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

// 短標籤用：依詞切開；單一個中文字黏到下一個詞，結尾標點黏到前一個詞，開頭標點黏到下一個詞。
// 空白會單獨回傳成 ' '，畫面上要輸出成一般文字，不要包進 span，空格才不會被吃掉。
const seg = new Intl.Segmenter('zh-Hant', { granularity: 'word' });
const isCjk = (s: string) => /[一-鿿]/.test(s);
export function words(text: string): string[] {
  if (!isCjk(text)) return text.split(/(\s+)/).filter(Boolean).map((t) => (/^\s+$/.test(t) ? ' ' : t));
  const out: string[] = [];
  let carry = '';
  for (const t of [...seg.segment(text)].map((x) => x.segment)) {
    if (/^\s+$/.test(t)) {
      if (carry) { out.push(carry); carry = ''; }
      out.push(' ');
      continue;
    }
    if (/^[，、：；。）」%]$/.test(t) && out.length && out[out.length - 1] !== ' ' && !carry) {
      out[out.length - 1] += t;
      continue;
    }
    if (/^[「（]$/.test(t) || ([...t].length === 1 && isCjk(t))) {
      carry += t;
      continue;
    }
    out.push(carry + t);
    carry = '';
  }
  if (carry) out.push(carry);
  return out;
}
