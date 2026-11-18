// 把 public/img 裡的 JPG、PNG 轉成 WebP，縮到實際需要的寬度，並產生寬高對照表。
// 用法：node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, unlink, writeFile } from 'node:fs/promises';
import { join, extname, relative } from 'node:path';

const ROOT = 'public';
const IMG = join(ROOT, 'img');

// 依用途設定最大寬度（顯示寬度的約 2 倍）；不放大比原圖小的圖片
const maxWidth = (rel) => {
  if (rel.startsWith('img/real/liff-')) return 400;
  if (rel === 'img/real/official-home.jpg') return 1600; // 首頁主視覺用裁切填滿，需要較寬的原圖
  if (rel === 'img/real/redeem-center-elite.jpg') return 900;
  return 1300;
};

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const sizes = {};
for (const file of await walk(IMG)) {
  const ext = extname(file).toLowerCase();
  const rel = relative(ROOT, file).split('\\').join('/');
  if (ext === '.webp') {
    const m = await sharp(file).metadata();
    sizes[rel] = [m.width, m.height];
    continue;
  }
  if (rel.startsWith('img/print/')) continue; // PDF 專用的 JPG，不轉檔
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;
  const out = file.slice(0, -ext.length) + '.webp';
  const info = await sharp(file)
    .resize({ width: maxWidth(rel), withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  sizes[rel.slice(0, -ext.length) + '.webp'] = [info.width, info.height];
  await unlink(file);
  console.log(`${rel} -> ${info.width}x${info.height}, ${Math.round(info.size / 1024)}KB`);
}

const body = Object.keys(sizes).sort().map((k) => `  '${k}': [${sizes[k][0]}, ${sizes[k][1]}],`).join('\n');
await writeFile('src/data/imageSizes.ts', `// 由 scripts/optimize-images.mjs 產生：圖片的寬高，用來在 <img> 上標 width、height\nexport const imageSizes: Record<string, [number, number]> = {\n${body}\n};\n`);
