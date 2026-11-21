// 大數字裡的單位與符號縮小顯示，讓數字本身成為視覺重點。
// 處理：後綴 % 與 +、前綴 ~、比較用的斜線、時間單位「秒」「分鐘」（英文頁改成 s、min）。
// 輸出 HTML 字串，給 set:html 使用；樣式在 b .u、b .pre、b .sep。
import type { Lang } from '../i18n';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function part(p: string, lang: Lang): string {
  return p
    .replace(/^~/, '<span class="pre up">~</span>')
    .replace(/\s*秒$/, () => `<span class="u sp">${lang === 'en' ? 's' : '秒'}</span>`)
    .replace(/\s*分鐘$/, () => `<span class="u sp">${lang === 'en' ? ' min' : '分鐘'}</span>`)
    .replace(/%/g, '<span class="u">%</span>')
    .replace(/\+$/, '<span class="u up">+</span>');
}

export function unitHtml(value: string, lang: Lang): string {
  return esc(value)
    .split(/\s*\/\s*/)
    .map((p) => part(p, lang))
    .join('<span class="sep">/</span>');
}
