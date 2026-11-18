// 讓中文標題與短標籤只在合理的位置換行，避免斷在詞中間或留下孤字。

// 標題用：在，、：；。之後，以及「之前、」之後切開。
// 英文標題不切，只把連字號換成不斷行連字號，避免 cross- / platform 這種斷法。
export function phrases(text: string): string[] {
  if (!/[一-鿿]/.test(text)) return [text.replace(/(\w)-(\w)/g, '$1‑$2')];
  const out: string[] = [];
  let buf = '';
  for (const ch of text) {
    if (ch === '「' && buf) {
      out.push(buf);
      buf = '';
    }
    buf += ch;
    if ('，、：；。」'.includes(ch)) {
      out.push(buf);
      buf = '';
    }
  }
  if (buf) out.push(buf);
  return out;
}

// 短標籤用：依詞切開；單一個中文字黏到下一個詞，標點黏到前一個詞。
const seg = new Intl.Segmenter('zh-Hant', { granularity: 'word' });
const isCjk = (s: string) => /[一-鿿]/.test(s);
export function words(text: string): string[] {
  if (!isCjk(text)) return [text];
  const toks = [...seg.segment(text)].map((x) => x.segment);
  const out: string[] = [];
  let carry = '';
  for (const t of toks) {
    if (/^[，、：；。）」%]$/.test(t) && out.length) {
      out[out.length - 1] += t;
      continue;
    }
    const cur = carry + t;
    if ([...t].length === 1 && isCjk(t)) {
      carry = cur;
      continue;
    }
    carry = '';
    out.push(cur);
  }
  if (carry) {
    if (out.length) out[out.length - 1] += carry;
    else out.push(carry);
  }
  return out;
}
