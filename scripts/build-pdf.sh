#!/bin/bash
# 需要先執行 npm run dev -- --port 4322
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PROFILE="$(mktemp -d)"
build() {
  "$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" --no-pdf-header-footer \
    --virtual-time-budget=8000 --print-to-pdf="public/files/$2" \
    "http://127.0.0.1:4322/print/$1/" 2>/dev/null
  echo "done: public/files/$2"
}
build resume-zh-tw KennyCheng_ProductDesigner_Resume_2026_zh.pdf
build resume-en KennyCheng_ProductDesigner_Resume_2026_en.pdf
build resume-pm-zh-tw KennyCheng_ProductManager_Resume_2026_zh.pdf
build portfolio-zh-tw KennyCheng_Portfolio_Summary_2026_zh.pdf
rm -rf "$PROFILE"
