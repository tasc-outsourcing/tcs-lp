#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

FILES=(
  "index.html"
  "tcs 1.png"
  "shutterstock_1224851173 1.png"
  "image 1.png"
  "image 2.png"
  "image 3.png"
  "image 4.png"
  "image 5.png"
  "buffer 1.svg"
  "pie-chart 1.svg"
  "quota 1.svg"
  "regulation 1.svg"
  "assessment 1.svg"
  "documents 1.svg"
  "approve 1.svg"
  "skyline 1.svg"
  "ksa 1.svg"
  "review 1.svg"
  "add-user 1.svg"
)

for file in "${FILES[@]}"; do
  cp "$ROOT_DIR/$file" "$DIST_DIR/$file"
done
