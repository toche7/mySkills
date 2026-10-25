# Runtime and portability

The assets and Python helpers are self-contained. Rendering requires Marp CLI and a supported browser. Visual checking additionally requires Node.js and Playwright. Thai PDF text requires a Thai-capable font, preferably Noto Sans Thai or Sarabun, installed in the rendering environment. Fonts are not downloaded automatically.

Resolve `SKILL_DIR` to this skill's installed location; no helper assumes a particular home folder or workspace.

## Start a new project

```bash
python3 "$SKILL_DIR/scripts/prepare.py" new ./lecture
```

This creates `lecture/slides.md`, `lecture/themes/theme-mahidol.css`, and `lecture/fig/logos/mahidol.svg`. Replace the sample content and identity in the Markdown. Add distinct illustrations to `lecture/fig/illustrations/` as appropriate; they are not pre-generated for arbitrary subjects.

For a pre-existing deck, preserve its content and intended theme. If this theme is requested, stage assets without replacing its Markdown:

```bash
python3 "$SKILL_DIR/scripts/prepare.py" assets ./lecture
```

If a destination asset differs, the helper reports it without overwriting it; inspect and reconcile only the intended asset. Updating an unrelated project theme is not part of ordinary staging.

## Dependencies and rendering

Use existing project dependencies when present. If missing and installation is within the task's authorization, a project-local installation is one option:

```bash
npm install --save-dev @marp-team/marp-cli playwright
```

Use the host's usual permission mechanism when network, browser, or filesystem access requires it. Do not assume that a script grants broader permissions. A preinstalled Chrome/Chromium can be used instead of downloading a Playwright browser.

```bash
python3 "$SKILL_DIR/scripts/render.py" ./lecture/slides.md
```

The helper looks for `marp` on PATH or in the deck/project ancestor `node_modules/.bin`. It exports PDF and inspection HTML beside the source. An explicit command is supported without a shell:

```bash
python3 "$SKILL_DIR/scripts/render.py" ./lecture/slides.md \
  --marp-command 'npm exec --offline -- marp'
```

The command runs in the Markdown directory, so the explicit wrapper must resolve dependencies there. You can specify `--theme`, `--output-dir`, and `--formats pdf,html`; `pptx` is optional and only for a user request. Marp is invoked with HTML and local asset access enabled for the deck's own assets. Its image-based PowerPoint export does not make text editable.

## Check the preview

```bash
node "$SKILL_DIR/scripts/check_render.cjs" ./lecture/slides.html \
  --browser /path/to/chrome
```

Playwright is resolved from the preview's project ancestors, the working directory, or the helper's own environment. `--playwright-module /path/to/node_modules/playwright` supports another installed runtime without hardcoded paths. If `--browser`/`CHROME_PATH` is absent, Playwright uses its configured Chromium installation. `--no-sandbox` is an opt-in launch argument for an environment that specifically requires it; it does not bypass host approval.

The checker prints a JSON report and exits nonzero for missing images, unmeasurable sections, out-of-bounds content, or pagination/footer geometry mismatches. It does not detect every overlap. Fix issues, rerender, and inspect the actual PDF. With Poppler installed, preview a page using:

```bash
pdftoppm -f 2 -l 2 -singlefile -scale-to 1200 -png ./lecture/slides.pdf ./lecture/page-2
```

Review modified/new pages rather than rerendering indefinitely. For a new lesson, review the entire slide sequence. Keep only useful final deliverables linked to the user; the HTML is an inspection artifact unless requested.

## Moving the skill

Copy the complete `mahidol-marp-slides` folder into the other environment's skill directory, normally `~/.codex/skills/`, and start a chat where it is discoverable. Explicit invocation is `$mahidol-marp-slides`. This installs instructions/assets, not Marp, a browser, fonts, or image-generation services.

## Asset provenance

The bundled base theme and Mahidol SVG logo originate from the user's `toche7/tempMarp` repository, revision `e7a8602445f0d890dfa25d72b6dc0b90ba6cb544`. Local refinements add reusable slide components and the validated footer alignment. The logo is branding material, not a declaration that an unrelated presentation is affiliated with the university. The skill does not assign a new license to upstream assets or bundle the prior course's generated illustrations.
