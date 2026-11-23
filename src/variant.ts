// 隱藏數據版（lite）：建置時設 VARIANT=lite，網站部署在 /lite/。
// 完整版的內容不動；lite 建置時，把營運數據換成描述，原始數字不會輸出到任何檔案。
// 對照依據：reference/隱藏數據版_說法對照_2026-11-24.md（作者確認）。
import type { Lang } from './i18n';

export const LITE = process.env.VARIANT === 'lite';

type Pair = [string, string];

// 文字中的營運數據 → 描述（長的放前面，避免被短的先換掉）
const TEXT: Record<Lang, Pair[]> = {
  'zh-tw': [
    ['點「選擇價格」後，訪客只有 9% 走到訂單表單，會員是 50%；走到表單後兩者完成率差不多（50% 對 46%），落差出在登入這一步。', '點「選擇價格」後，訪客走到訂單表單的比例遠低於會員；走到表單後兩者完成率差不多，落差出在登入這一步。'],
    ['台灣 4 到 9 月的流量下滑，主要來自付費廣告縮減，不是網站變差。另外，網站的造訪有 72% 來自手機。', '先確認流量變化主要來自網站以外的因素，不是網站變差。另外，大多數造訪來自手機。'],
    ['14% 依改版清單估算：登入後接續訂單每月最多多出的訂房，約為月訂房量的 14%', '這個增幅依改版清單估算：登入後接續訂單每月最多多出的訂房，占月訂房量的比例相當可觀'],
    ['未登入的訪客只有 9% 走到訂單表單，已登入的會員是 50%。', '未登入的訪客走到訂單表單的比例，遠低於已登入的會員。'],
    ['官網 3.0 上線後，酒店頁的完成訂單比例（原 1～5%）', '官網 3.0 上線後，酒店頁的完成訂單比例'],
    ['酒店頁的完成訂單比例，上線前是 1～5%', '酒店頁的完成訂單比例，和上線前相比'],
    ['（訂單比例來自 Mixpanel，bug 數來自 Jira）', '（bug 數來自 Jira）'],
    ['未登入訪客只有 9% 走到訂單表單，會員是 50%', '未登入訪客走到訂單表單的比例遠低於會員'],
    ['落在這類頁面的使用者中，約 64% 帶有廣告來源標記', '落在這類頁面的使用者大多帶有廣告來源標記'],
    ['真正送出帳密的人有 85 到 90% 登入成功', '真正送出帳密的人絕大多數都登入成功'],
    ['看錄影複查：送出帳密的人 85～90% 成功', '看錄影複查：送出帳密的人絕大多數都成功'],
    ['實際送出帳密後有 85 到 90% 成功', '實際送出帳密的人絕大多數都成功'],
    ['提升到 10% 以上（上線前 1～5%）', '明顯提升'],
    ['從 1～5% 升到 10% 以上', '明顯提升'],
    ['所以 9% 和 50% 的差距不全是登入造成', '所以這個差距不全是登入造成'],
    ['只有 44% 回到原本的表單', '不到一半回到原本的表單'],
    ['完成率和會員差不多（50% 對 46%）', '完成率和會員差不多'],
    ['原始數據混了約 26% 的機器流量', '原始數據混了不少機器流量'],
    ['送出後成功率約 98%', '送出後幾乎都成功'],
    ['只有 44% 回到表單', '不到一半回到表單'],
  ],
  en: [
    ['After "Select rate," 9% of logged-out visitors and 50% of members reached the form. Once there, both converted at similar rates (50% vs 46%), so the gap is the login step.', 'After "Select rate," logged-out visitors reached the form far less often than members. Once there, both converted at similar rates, so the gap is the login step.'],
    ["The site's April–September traffic drop in Taiwan came mainly from cutting back on paid ads, not from the site getting worse. Also, 72% of visits came from mobile.", 'Traffic changes came mainly from factors outside the site, not from the site getting worse. Also, most visits came from mobile.'],
    ['The 14% comes from the backlog estimate: the most extra bookings that resuming after login could add each month, as a share of current monthly bookings.', 'The increase comes from the backlog estimate: the most extra bookings that resuming after login could add each month, which is a sizable share of current monthly bookings.'],
    ['Only 9% of logged-out visitors reached the booking form, versus 50% of logged-in members.', 'Logged-out visitors reached the booking form far less often than logged-in members.'],
    ['only 9% of logged-out visitors reached the booking form, versus 50% of members', 'logged-out visitors reached the booking form far less often than members'],
    ['about 64% of users who landed on these pages arrived via links with ad tracking tags', 'most users who landed on these pages arrived via links with ad tracking tags'],
    ['Recordings showed 85–90% of people who actually submitted credentials succeeded', 'Recordings showed most people who actually submitted credentials succeeded'],
    ['"Half of logins fail" was wrong: 85–90% succeed once credentials are submitted.', '"Half of logins fail" was wrong: most succeed once credentials are submitted.'],
    ['hotel-page booking rate after the v3.0 launch (was 1–5%)', 'hotel-page booking rate after the v3.0 launch'],
    ['hotel-page booking rate, up from 1–5% before launch', 'hotel-page booking rate, compared with before launch'],
    ['(booking rate from Mixpanel, bug counts from Jira)', '(bug counts from Jira)'],
    ['not all of the 9% vs 50% gap comes from', 'not all of the gap comes from'],
    ['Recordings: 85–90% of submitted logins succeed', 'Recordings: most submitted logins succeed'],
    ['about 26% of raw traffic was bots', 'a sizable share of raw traffic was bots'],
    ['at about the same rate as members (50% vs 46%)', 'at about the same rate as members'],
    ['about 98% of submitted forms go through', 'nearly all submitted forms go through'],
    ['only 44% returned to their form', 'fewer than half returned to their form'],
    ['rose from 1–5% to over 10%', 'rose noticeably'],
    ['rose above 10% (from 1–5%)', 'rose noticeably'],
    ['Only 44% return', 'Under half return'],
    // 數字卡標籤原本接在數值後面讀（9% / 50% of …），數值換成 Wide gap 後要改寫才通順
    ['of logged-out vs logged-in users reach the booking form', 'between logged-out and logged-in users reaching the booking form'],
  ],
};

// 數字卡的數值 → 描述
const VALUE: Record<string, Record<Lang, string>> = {
  '10%+': { 'zh-tw': '明顯提升', en: 'Clearly up' },
  '9% / 50%': { 'zh-tw': '差距懸殊', en: 'Wide gap' },
  '44%': { 'zh-tw': '不到一半', en: 'Under half' },
  '~14%': { 'zh-tw': '顯著增加', en: 'Sizable' },
};

export type Val = string | Record<Lang, string>;

/** 數值顯示用：完整版是字串，lite 版可能是中英對照 */
export const valText = (v: Val, lang: Lang): string => (typeof v === 'string' ? v : v[lang]);

/** lite 版才換掉文字中的營運數據 */
export function liteText(s: string, lang: Lang): string {
  if (!LITE) return s;
  return TEXT[lang].reduce((acc, [from, to]) => acc.split(from).join(to), s);
}

const isT = (o: unknown): o is Record<Lang, string> =>
  !!o && typeof o === 'object' && !Array.isArray(o) && typeof (o as Record<string, unknown>)['zh-tw'] === 'string' && typeof (o as Record<string, unknown>).en === 'string';

/** lite 版：原地換掉資料裡所有營運數據（中英文字串與數字卡數值） */
export function liteDeep<X>(node: X): X {
  if (!LITE) return node;
  const walk = (o: unknown): void => {
    if (Array.isArray(o)) {
      if (typeof o[0] === 'string' && VALUE[o[0]] && o.length >= 2 && isT(o[1])) o[0] = VALUE[o[0]];
      o.forEach(walk);
      return;
    }
    if (!o || typeof o !== 'object') return;
    const rec = o as Record<string, unknown>;
    if (isT(rec)) {
      rec['zh-tw'] = liteText(rec['zh-tw'] as string, 'zh-tw');
      rec.en = liteText(rec.en as string, 'en');
      return;
    }
    if (typeof rec.value === 'string' && VALUE[rec.value]) rec.value = VALUE[rec.value];
    Object.values(rec).forEach(walk);
  };
  walk(node);
  return node;
}
