#!/usr/bin/env python3
"""Stage bundled Marp assets without overwriting existing work."""
import argparse
from pathlib import Path
import shutil
import sys

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode', choices=['new', 'assets'])
    parser.add_argument('destination', type=Path)
    args = parser.parse_args()
    dest = args.destination.expanduser().resolve()
    pairs = [(ROOT / 'assets/themes/theme-mahidol.css', dest / 'themes/theme-mahidol.css'),
             (ROOT / 'assets/fig/logos/mahidol.svg', dest / 'fig/logos/mahidol.svg')]
    if args.mode == 'new':
        pairs.append((ROOT / 'assets/template.md', dest / 'slides.md'))
    conflicts = [str(dst) for src, dst in pairs if dst.exists() and
                 (not dst.is_file() or src.read_bytes() != dst.read_bytes())]
    if conflicts:
        print('No files written; existing files differ:\n' + '\n'.join(conflicts), file=sys.stderr)
        return 2
    for src, dst in pairs:
        if not dst.exists():
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)
            print(f'Created: {dst}')
        else:
            print(f'Unchanged: {dst}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
