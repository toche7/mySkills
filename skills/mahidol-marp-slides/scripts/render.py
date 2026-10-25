#!/usr/bin/env python3
"""Render a Marp deck using an existing runtime; PDF plus preview HTML by default."""
import argparse
from pathlib import Path
import shlex
import shutil
import subprocess
import sys


def runtime(source, explicit):
    if explicit:
        cmd = shlex.split(explicit)
        if not cmd:
            raise ValueError('The explicit Marp command is empty.')
        return cmd
    executable = shutil.which('marp')
    if executable:
        return [executable]
    for parent in (source.parent, *source.parent.parents):
        for name in ('marp', 'marp.cmd'):
            candidate = parent / 'node_modules/.bin' / name
            if candidate.is_file():
                return [str(candidate)]
    raise ValueError('Marp CLI not found. Use an installed project runtime or --marp-command; no dependencies were installed.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('markdown', type=Path)
    parser.add_argument('--theme', type=Path)
    parser.add_argument('--output-dir', type=Path)
    parser.add_argument('--formats', default='pdf,html')
    parser.add_argument('--marp-command')
    args = parser.parse_args()
    source = args.markdown.expanduser().resolve()
    if not source.is_file():
        parser.error(f'Markdown not found: {source}')
    formats = list(dict.fromkeys(x.strip() for x in args.formats.split(',') if x.strip()))
    if not formats or set(formats) - {'pdf', 'html', 'pptx'}:
        parser.error('--formats accepts pdf,html,pptx')
    theme = args.theme.expanduser().resolve() if args.theme else source.parent / 'themes/theme-mahidol.css'
    if not theme.is_file():
        parser.error('Theme not found. Stage assets or pass --theme for the existing theme.')
    try:
        cmd = runtime(source, args.marp_command)
    except ValueError as err:
        parser.error(str(err))
    destination = args.output_dir.expanduser().resolve() if args.output_dir else source.parent
    destination.mkdir(parents=True, exist_ok=True)
    for fmt in formats:
        output = destination / f'{source.stem}.{fmt}'
        command = cmd + [str(source), '--theme', str(theme), '--html', '--allow-local-files']
        if fmt != 'html':
            command.append('--' + fmt)
        command += ['-o', str(output)]
        result = subprocess.run(command, cwd=source.parent)
        if result.returncode:
            return result.returncode
        if not output.is_file() or output.stat().st_size == 0:
            print(f'Export did not produce a nonempty file: {output}', file=sys.stderr)
            return 1
        print(f'Created: {output}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
