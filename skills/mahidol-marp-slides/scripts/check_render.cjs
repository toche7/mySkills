#!/usr/bin/env node
/* Check rendered Marp HTML. No hardcoded home, project, or runtime paths. */
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {createRequire} = require('node:module');

function args(argv) {
  const result = {html: argv[0]};
  for (let i = 1; i < argv.length; i++) {
    if (argv[i] === '--no-sandbox') result.noSandbox = true;
    else if (['--browser', '--playwright-module'].includes(argv[i]) && argv[i + 1]) result[argv[i++].slice(2)] = argv[i];
    else throw new Error(`Unknown or incomplete argument: ${argv[i]}`);
  }
  if (!result.html || result.html.startsWith('--')) throw new Error('Usage: check_render.cjs FILE.html [--browser PATH] [--playwright-module PATH] [--no-sandbox]');
  return result;
}
function playwright(options, html) {
  if (options['playwright-module']) return require(path.resolve(options['playwright-module']));
  for (const anchor of [path.dirname(html), process.cwd(), __dirname]) {
    try { return createRequire(path.join(anchor, 'package.json'))('playwright'); } catch (_) {}
  }
  throw new Error('Playwright not found. Use the project runtime or --playwright-module; no dependencies were installed.');
}
(async () => {
  const options = args(process.argv.slice(2));
  const html = path.resolve(options.html);
  if (!fs.statSync(html).isFile()) throw new Error('HTML file not found.');
  const {chromium} = playwright(options, html);
  const launch = {headless: true};
  if (options.browser || process.env.CHROME_PATH) launch.executablePath = options.browser || process.env.CHROME_PATH;
  if (options.noSandbox) launch.args = ['--no-sandbox'];
  const browser = await chromium.launch(launch);
  try {
    const page = await browser.newPage({viewport: {width: 1280, height: 720}});
    await page.goto(pathToFileURL(html).href, {waitUntil: 'load'});
    await page.evaluate(() => document.fonts.ready);
    const report = await page.evaluate(() => {
      const sections = [...document.querySelectorAll('section')];
      const issues = [];
      const images = [...document.querySelectorAll('img')];
      for (const img of images) if (!img.complete || !img.naturalWidth) issues.push({type: 'missing-image', source: img.getAttribute('src')});
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const slide = index + 1;
        if (!rect.width || !rect.height) { issues.push({slide, type: 'unmeasurable-slide'}); return; }
        const scale = rect.width / section.offsetWidth;
        const footer = section.querySelector('footer');
        const footerVisible = footer && getComputedStyle(footer).display !== 'none';
        const bottomLimit = rect.bottom - (footerVisible ? 55 : 12) * scale;
        const candidates = new Set([...section.querySelectorAll('h1,h2,h3,h4,p,li,table,pre,blockquote'), ...section.children]);
        for (const element of candidates) {
          if (element.closest('footer,header') || ['STYLE','SCRIPT','IMG'].includes(element.tagName) || getComputedStyle(element).display === 'none') continue;
          const b = element.getBoundingClientRect();
          if (!b.width || !b.height || !element.textContent.trim()) continue;
          if (b.top < rect.top - scale || b.bottom > bottomLimit + scale || b.left < rect.left - scale || b.right > rect.right + scale) {
            issues.push({slide, type: 'content-bounds', text: element.textContent.trim().replace(/\s+/g,' ').slice(0,100)});
          }
        }
        if (footerVisible && section.hasAttribute('data-marpit-pagination')) {
          const f = getComputedStyle(footer), n = getComputedStyle(section, '::after');
          const same = (a,b) => Number.isFinite(parseFloat(a)) && Number.isFinite(parseFloat(b)) && Math.abs(parseFloat(a)-parseFloat(b)) < .1;
          if (parseFloat(n.paddingBottom) !== 0 || !same(f.bottom,n.bottom) || !same(f.fontSize,n.fontSize) || !same(f.lineHeight,n.lineHeight)) issues.push({slide, type: 'footer-pagination-alignment'});
        }
      });
      if (!sections.length) issues.push({type: 'no-slides'});
      return {slides: sections.length, images: images.length, issues};
    });
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = report.issues.length ? 1 : 0;
  } finally { await browser.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
