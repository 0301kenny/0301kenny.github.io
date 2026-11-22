import type { T } from '../i18n';

const b = (zh: string, en: string): T => ({ 'zh-tw': zh, en });

export type Cap = 'pm' | 'ui' | 'fe';

export type DiagramKind = 'channels' | 'rules' | 'funnel' | 'groups' | 'triad' | 'mentor' | 'bars' | 'memflow' | 'correction' | 'plan' | 'latency' | 'ia' | 'loop' | 'resume';

export type Block =
  | { t: 'p'; text: T; todo?: boolean }
  | { t: 'h3'; text: T }
  | { t: 'callout'; title: T; text: T }
  | { t: 'decision'; q: T; a: T; text: T; todo?: boolean }
  | { t: 'figure'; src: string[]; alt: T; caption: T; phone?: boolean; pair?: boolean }
  | { t: 'table'; rows: [T, T, T][]; note?: T; head?: [T, T, T] }
  | { t: 'stats'; items: [string, T][] }
  | { t: 'guard'; items: [T, string, T][] }
  | { t: 'flow'; items: T[] }
  | { t: 'list'; items: T[]; ordered?: boolean }
  | { t: 'diagram'; kind: DiagramKind; caption: T }
  | { t: 'versions'; items: [string | T, T][] }
  | { t: 'compare'; ai: T; me: T; source: T; title?: T; aiLabel?: T; meLabel?: T }
  | { t: 'more'; label: T; blocks: Block[] };

export interface Section {
  id: string;
  caps: Cap[];
  toc: T;
  tags: string[];
  title: T;
  blocks: Block[];
}

export interface Case {
  slug: string;
  no: string;
  period: string;
  eyebrow: string;
  title: T;
  cardTitle: T;
  lead: T;
  chips: string[];
  meta: [T, T][];
  kpis: [string, T, T?][];
  hero: { kind: 'image'; src: string; alt: T; caption: T } | { kind: 'tiers'; caption: T } | { kind: 'diagram'; diagram: DiagramKind; caption: T };
  glance?: { problem: T; decision: T; result: T };
  card: { kind: 'phones' | 'image' | 'tiers' | 'diagram'; src?: string[]; diagram?: DiagramKind; label: T };
  /** 只放網站，不放進 PDF 作品集摘要 */
  webOnly?: boolean;
  /** 側邊專案：首頁「更多作品」分到側邊專案，並說明補足哪種能力 */
  side?: T;
  sections: Section[];
}

const capLabel = { pm: 'PM', ui: 'UI / UX', fe: 'Frontend' } as const;
export { capLabel };

const realShot = b('WOTA 正式站實際畫面 · 產品規劃與 UI/UX 由我主導，前端由工程團隊實作', 'Live WOTA product · I led product planning and UI/UX; engineering built the frontend');
const realShotShort = b('WOTA 正式站實際畫面', 'Live WOTA product');

const rawCases: Case[] = [
  {
    slug: 'booking',
    glance: { problem: b('舊官網找酒店不夠好用，視覺也撐不起高端旅宿的定位。', 'The old site made finding a hotel harder than it should be, and its look didn\'t fit a luxury travel brand.'), decision: b('主導官網 3.0 的產品規劃與介面，先改搜尋與優惠的呈現，再把同一套設計延伸到 LINE 訂房。', 'I led product planning and UI design for website v3.0, starting with search and how deals are shown, then brought the same design to booking in LINE.'), result: b('官網 3.0 在 2024 年上線，LINE 訂房在 2026 年 5 月上線；上線後 30 天，酒店頁的完成訂單比例從 1～5% 升到 10% 以上。', 'Website v3.0 launched in 2024 and LINE booking in May 2026. In the 30 days after the v3.0 launch, the hotel-page booking rate rose from 1–5% to over 10%.') },
    no: '01',
    period: '2023 — NOW',
    eyebrow: 'Case 01 · Product Design · Multi-platform',
    title: b('WOTA 跨平台旅宿訂房：\n官網 3.0 改版，以及延伸到 LINE 與銀行白牌', 'WOTA cross-platform hotel booking:\nthe website v3.0 redesign and its extension to LINE and bank partner sites'),
    cardTitle: b('WOTA 跨平台旅宿訂房體驗', 'WOTA hotel booking across web, LINE, and bank sites'),
    lead: b(
      '舊官網找酒店不夠好用，也少了高端旅宿該有的質感。我主導官網 3.0 改版的產品規劃與介面設計：重新整理酒店搜尋，例如在結果加上優惠標籤；字體改成襯線體搭配中黑體，讓整體變得典雅。官網 3.0 在 2024 年上線，之後再把同樣的設計延伸到 LINE 裡的訂房網頁（LIFF），兩邊共用同一組設計元件，也共用同一份四種語言的文案。',
      "Finding a hotel on the old website took more effort than it should, and the site didn't feel like a luxury travel brand. I led product planning and UI design for the v3.0 redesign. I reworked hotel search, adding deal tags to results, and paired a serif with a medium-weight sans for a more refined look. Website v3.0 launched in 2024. I then brought the same design to a booking site inside LINE, the messaging app most people in Taiwan use (built with LIFF). The two now share one component set and one source of copy in four languages.",
    ),
    chips: ['Product Design', 'UX Flow', 'i18n', 'Frontend'],
    meta: [
      [b('我的角色', 'My role'), b('主導：官網 3.0 產品規劃與 UI/UX、LIFF 的 UI 與方向 · 負責：驗收 · 協作：前端實作（官網切版由工程師完成）', 'Led: website v3.0 product planning and UI/UX; LIFF UI and direction · Owned: QA · Collaborated on: frontend build (engineers coded the website)')],
      [b('產品', 'Product'), b('高端旅宿訂房平台', 'Luxury hotel booking')],
      [b('期間', 'Period'), b('2023.03 — 現在', '2023.03 — present')],
      [b('平台', 'Platforms'), b('官網 · LIFF · 白牌，共用後端與後台', 'Website · LIFF · bank white-label sites, sharing one backend and admin')],
    ],
    kpis: [
      ['13', b('個面向客人的功能區完成 UI 設計', 'customer-facing modules designed'), b('官網 3.0 的 13 個面向客人的功能區（前台模組），UI 設計全部完成，每頁都附給工程的行為說明。', 'All 13 customer-facing modules of website v3.0 are fully designed, and every page has behavior notes for engineering.')],
      ['11', b('個共用元件庫，讓官網、LIFF 與通知信樣式一致', 'shared component libraries for web, LIFF, and email'), b('官網 3.0 的 Figma 元件頁共 735 個元件與變體，拆成 VI（品牌視覺規範）、字級、色彩、圖示、Email、通用元件等 11 個元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma component page holds 735 components and variants, organized into 11 libraries (visual identity, type scale, color, icons, email, general components, and more) shared by the website, LIFF, and notification emails.')],
      ['3,548', b('個字串，四種語言集中管理', 'strings managed in one place across 4 languages'), b('官網的 3,548 個文案字串同步成 Figma 四語系變數；2,615 個可綁定的 Figma 文字層全部綁定變數（價格、日期等 264 層另列待審）；已綁定文字與官網字串不一致為 0。', 'All 3,548 website strings were synced to four-language Figma variables, and all 2,615 bindable text layers are bound to them. The 264 layers with prices, dates, and similar content are on a separate review list. Bound text has zero mismatches with the website strings.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-home.webp',
      alt: b('WOTA 官網首頁：全版旅宿照片與搜尋列', 'WOTA homepage with full-bleed hotel photo and search bar'),
      caption: realShot,
    },
    card: { kind: 'phones', src: ['img/real/liff-home.webp', 'img/real/liff-room-list.webp'], label: b('LINE LIFF 正式站畫面', 'Live LINE LIFF screens') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('舊官網少了高端質感，找酒店也不夠順', 'The old site didn\'t feel luxurious, and hotel search fell short'),
        blocks: [
          { t: 'p', text: b('WOTA 經營的是高端旅宿，但舊官網的視覺缺少奢華的美感，和品牌調性對不上。酒店搜尋也不夠好用，例如客人看不出哪些酒店正在優惠。', 'WOTA sells luxury stays, but the old website didn\'t look luxurious and didn\'t match the brand. Hotel search wasn\'t easy to use either: for example, guests couldn\'t tell which hotels had active deals.') },
          { t: 'p', text: b('之後 LINE LIFF（在 LINE 裡打開的訂房網頁）和銀行白牌（掛銀行品牌的訂房站）陸續加入，三個前台共用同一個後端，官網的設計與文案也要延伸過去。銀行白牌目前沿用原本的樣式，所以這個案例的設計工作以官網和 LIFF 為主。', 'Later came a booking site that opens inside LINE (built with LIFF) and white-label sites for bank partners. All three run on one backend, and the website\'s design and copy had to carry over to them too. The bank sites still use their original design, so this case study focuses on the website and LIFF.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓官網呈現高端旅宿應有的典雅質感，讓客人更容易找到適合、正在優惠的酒店；也把同樣的設計延伸到 LINE 訂房網頁，而且都支援繁中、簡中、英文、日文 4 種語言。', 'Give the site the refined feel expected of a luxury travel platform, make it easier to find the right hotel and its deals, and bring the same design to the booking site inside LINE, all in Traditional Chinese, Simplified Chinese, English, and Japanese.') },
          { t: 'diagram', kind: 'channels', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('時間軸', 'Timeline') },
          { t: 'versions', items: [
            ['2023', b('主導官網 3.0 產品規劃與全站 UI/UX：研究競品、建立參考庫、自建進度表逐頁控管', 'Led website v3.0 planning and UI/UX: competitive research, reference library, page-by-page tracking')],
            ['2024', b('主持 UAT（上線前驗收），30 項問題全部修正後，官網 3.0 上線', 'Ran UAT; website v3.0 launched after all 30 issues were fixed')],
            ['2025', b('整理四語系文案檔與多語系（i18n）作業流程；LIFF 登入註冊開發', 'Organized the four-language copy files and the i18n workflow; LIFF sign-in and sign-up development')],
            ['2026', b('LINE LIFF 5 月上線、7 月加入信用卡購買會籍（付費會員資格）與英文版；Figma 四語系整理', 'LINE LIFF launched in May, with credit-card payment for memberships and English added in July. Figma four-language cleanup')],
          ] },
        ],
      },
      {
        id: 'ia', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('資訊架構', 'IA'),
        title: b('官網要放哪些服務，又該怎麼分區', 'What the site offers, and how it\'s organized'),
        blocks: [
          { t: 'p', text: b('官網要同時承載酒店、會員、私人訂製（量身規劃的行程）、機場通關服務、極致奢旅（高端旅遊行程）與文章內容。我先盤點這些服務的範圍，再把網站分成四塊：導覽入口、訂房主線、會員中心，以及給未登入訪客與搜尋引擎看的集團、品牌、國家、城市標準頁。', "The site had to cover hotels, membership, bespoke travel, airport fast-track service, Ultra Luxe (high-end trips), and articles. I mapped their scope first, then split the site into four parts: navigation, the booking path, the member center, and group, brand, country, and city pages for logged-out visitors and search engines.") },
          { t: 'diagram', kind: 'ia', caption: b('示意圖 · 依官網 3.0 開發細項重繪', 'Diagram · redrawn from the v3.0 development breakdown') },
          { t: 'list', items: [b('訂房主線：從目的地、日期、人數開始，經過結果篩選與地圖、房型與方案（同一房型不同的價格與條件），到結帳與特殊需求，要能一路連續。', 'Booking path: one unbroken flow from destination, dates, and guests, through filters and the map, to rooms and rates (different prices and terms for the same room), then checkout and special requests.'), b('會員中心：把會籍、酒店訂單、一般訂單與個人資料放在同一個結構裡；訂單分成全部、已確認、已入住、已取消，也設計了沒有資料時的空狀態。', 'Member center: membership, hotel bookings, other orders, and profile live in one structure. Bookings are split into all, confirmed, checked in, and cancelled, with empty states designed for when there\'s no data.')] },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('改版時做的決定', 'Calls I made during the redesign'),
        blocks: [
          { t: 'decision', q: b('改版要怎麼控管 79 個頁面？', 'How do you track a 79-page redesign?'), a: b('自建進度表，每頁走同一條流程', 'One tracker, one path for every page'), text: b('我自建一張進度表，讓每一頁都照同樣的順序推進：先出 UI 初版、定稿、開 Jira，再做成桌機與手機網頁、接上後端資料，最後驗收。2023 年 10 月的進度是 79 頁中 70 頁完成初版、49 頁定稿；全站在 2024 年完成驗收並上線。', 'I built a tracker so every page followed the same steps: first draft, final design, Jira ticket, desktop and mobile implementation, API integration, and finally QA. By October 2023, 70 of 79 pages had first drafts and 49 were final; the full site passed QA and launched in 2024.') },
          { t: 'decision', q: b('LIFF 的文案要自己寫，還是跟官網一致？', 'Should LIFF have its own copy or match the website?'), a: b('以官網用語為準，只有 LIFF 專屬功能才自訂', 'Website wording is the source of truth; LIFF-only features get custom copy'), text: b('LIFF 和官網的 774 條多語系文案（i18n key）逐條比對過。AI 產出比對表並分類，標成一致、有差異或無法配對；我判斷差異是否合理、親自審核 138 筆，再依分類逐批修正。', 'LIFF\'s 774 i18n keys were compared with the website\'s, one by one. AI built the comparison table and labeled each key as matched, different, or unmatched. I judged whether each difference made sense and personally reviewed 138 of AI\'s labels. The copy was then fixed in batches by label.') },
          { t: 'decision', q: b('客人習慣用官網，怎麼讓他們改用 LINE？', 'Guests prefer the website. How do we move them to LINE?'), a: b('不強迫切換，在既有接觸點加入 LINE 入口', 'No forced switch; add LINE entry points where guests already are'), text: b('在訂單完成頁和入住提醒信加上「加入 LINE，隨時查看訂單」的引導，也和行銷、銷售團隊一起準備宣傳素材，並約定追蹤成效的方式。', 'I added "Add WOTA on LINE to track your booking" prompts to the confirmation page and pre-arrival emails, and worked with marketing and sales on promo assets and how to track results.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面設計', 'Design'),
        title: b('字型、搜尋與共用元件', 'Type, search, and shared components'),
        blocks: [
          { t: 'figure', pair: true, src: ['img/case1/booking-before-2023.webp', 'img/case1/booking-after-v3.webp'], alt: b('左：2023 年舊版訂房頁，目的地是灰色色塊；右：官網 3.0 的酒店搜尋，卡片附品牌 logo 與優惠標籤', 'Left: the 2023 booking page with grey destination tiles. Right: website v3.0 hotel search, with brand logos and deal tags on each card'), caption: b('改版前後 · 左：2023 年 6 月的舊版訂房頁（網頁封存）；右：官網 3.0 正式站', 'Before and after · Left: the old booking page, June 2023 (web archive). Right: website v3.0, live site') },
          { t: 'list', items: [b('字型：從無襯線體改成襯線體搭配中黑體，整體更典雅。', 'Type: from a plain sans to a serif paired with a medium-weight sans, for a more refined feel.'), b('資訊層級：從只有目的地名稱的灰色色塊，改成有照片、品牌 logo、城市與國家的酒店卡片。', 'Hierarchy: from grey tiles showing only a destination name to hotel cards with a photo, brand logo, city, and country.'), b('優惠：卡片直接顯示「住 3 付 2」「保證升等」這類標籤，比較酒店時一眼就看得到。', 'Deals: tags like "stay 3, pay 2" and "guaranteed upgrade" sit right on each card, so guests see them while comparing hotels.')] },
          { t: 'h3', text: b('字型：襯線體搭配中黑體', 'Type: a serif paired with a medium-weight sans') },
          { t: 'p', text: b('字型改成襯線體搭配中黑體混用，讓官網從一般訂房網站的樣子，變成典雅、有高端旅宿質感的視覺。', 'Switching to a serif paired with a medium-weight sans took the site from a generic booking look to something refined enough for luxury hotels.') },
          { t: 'h3', text: b('搜尋：讓優惠一眼看得到', 'Search: deals at a glance') },
          { t: 'p', text: b('搜尋流程也一併重新整理，例如在搜尋結果加上優惠標籤，讓客人比較酒店時，更快看到正在優惠的選項。', 'I also reworked the search flow, adding deal tags to results so guests comparing hotels can spot current offers faster.') },
          { t: 'figure', src: ['img/real/official-room-list.webp'], alt: b('WOTA 官網房型列表', 'WOTA website room list'), caption: realShotShort },
          { t: 'h3', text: b('元件：官網、LIFF 與通知信共用', 'Components shared by web, LIFF, and email') },
          { t: 'p', text: b('官網 3.0 的 Figma 檔共 28 頁。光是其中 12 個模組頁，就有約 310 個桌機與手機畫面，每頁都附給工程的行為說明。735 個元件與變體整理成 11 個共用元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma file has 28 pages. Its 12 module pages alone hold about 310 desktop and mobile screens, and each page has behavior notes for engineering. The 735 components and variants sit in 11 shared libraries used by the website, LIFF, and notification emails.') },
          { t: 'h3', text: b('通知信：和官網同一個品牌', 'Email: the same brand as the site') },
          { t: 'p', text: b('註冊、預訂、取消、入住提醒等通知信的發送規則原本就有。我負責美化信件樣式，讓信件和官網 3.0 使用相同的視覺，客人從網站到信箱看到的是同一個品牌；Email 也是 11 個共用元件庫之一。', 'The sending rules for sign-up, booking, cancellation, and pre-arrival emails were already in place. My part was restyling the emails to match website v3.0, so guests see the same brand from the site to their inbox. Email is one of the 11 shared libraries.') },
          { t: 'p', text: b('LIFF 是在 LINE 裡打開的網頁，畫面更窄、操作更依賴大拇指。我讓 LIFF 的設計延續官網的高端調性，Figma 共 24 頁、約 238 個手機畫面、259 個元件，並把規則整理成設計系統手冊 v1.3。', 'LIFF runs inside LINE, so screens are narrower and interactions rely more on the thumb. I carried the website\'s luxury feel into 24 Figma pages, about 238 mobile screens, and 259 components, and documented the rules in design system guidelines v1.3.') },
          { t: 'figure', phone: true, src: ['img/real/liff-home.webp', 'img/real/liff-hotel-detail.webp', 'img/real/liff-room-list.webp'], alt: b('LINE LIFF 首頁、酒店詳情與房型列表', 'LINE LIFF home, hotel detail, and room list'), caption: realShotShort },
          { t: 'h3', text: b('可及性與數據', 'Accessibility and data') },
          { t: 'p', text: b('對比度與可讀性都依照 WCAG（網頁無障礙標準）檢查過。至於上線後訂房流程卡在哪一步，2026 年另外用 Clarity 錄影與熱點圖做了完整分析，詳見 Case 04。', 'Contrast and legibility were checked against WCAG. To see where the live booking flow gets stuck, I ran a full analysis with Clarity recordings and heatmaps in 2026 (see Case 04).') },
        ],
      },
      {
        id: 'liff', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('LIFF 延伸', 'LIFF'),
        title: b('把訂房與會員服務延伸到 LINE', 'Extending booking and membership into LINE'),
        blocks: [
          { t: 'versions', items: [
            ['2025-12', b('登入註冊與 LINE 綁定的 PRD', 'PRD for sign-in and LINE account linking')],
            [b('2026-01～04', '2026-01–04'), b('會員中心、預訂與個人資料的設計與 review', 'Design and review of member center, booking, and profile')],
            ['2026-05-04', b('LINE LIFF 對外推出', 'LINE LIFF goes live')],
            [b('2026-06～09', '2026-06–09'), b('UAT、跨語系與 UI 架構持續改善', 'UAT, cross-language fixes, and ongoing UI structure work')],
          ] },
          { t: 'decision', q: b('已經是官網會員的人，怎麼在 LINE 接著用？', 'How do existing members keep using their accounts in LINE?'), a: b('先把登入與既有帳號綁定寫成流程', 'Define sign-in and account linking first'), text: b('既有會員要能用原本的帳號登入並綁定 LINE，訂單與會籍才接得上。我先把這段寫進 PRD，讓工程與測試有共同的流程依據。', 'Members needed to sign in with their current accounts and link them to LINE so their bookings and membership carried over. I wrote this flow into the PRD first, so engineering and QA had one reference.') },
          { t: 'decision', q: b('從通知點進來要登入時，客人會不會回不到原本的頁面？', 'After tapping a LINE notification and signing in, do guests end up back where they were?'), a: b('把通知、登入、返回原頁當成同一條路徑追', 'Treat notification, sign-in, and return as one path'), text: b('客人從 LINE 通知點進來，登入後要再跳回原本的方案，這一路上有幾個地方會斷掉。這些斷點都列出來，排進修正追蹤，目標是讓客人能回到正確的頁面。', 'When guests tap a LINE notification, sign in, and then need to get back to the rate they were viewing, the path can break in several places. I listed every break point and added them to the fix tracker, aiming to get guests back to the right page.') },
          { t: 'p', text: b('為了讓之後的頁面和 AI 實作都依照相同的規則，我分析現有頁面、公司共用的元件庫、字型與色彩，撰寫時搭配 AI，整理成設計系統手冊、用元件組出頁面的說明，以及給 AI 的實作規範。', 'So future pages and AI-built code follow the same rules, I analyzed the existing pages, the company\'s shared component libraries, type, and color. With AI\'s help, I wrote them up as design system guidelines, a guide to building pages from components, and coding rules for AI.') },
        ],
      },
      {
        id: 'i18n', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('多語系治理', 'i18n'),
        title: b('四個語系的文案管理', 'Managing copy in four languages'),
        blocks: [
          { t: 'stats', items: [['3,548', b('個官網字串同步成 Figma 四語變數', 'site strings synced to four-language Figma variables')], ['2,615', b('個 Figma 文字全部綁定變數', 'Figma text layers bound to variables')], ['0', b('個已綁定文字與官網字串不一致', 'mismatches between bound text and website strings')], ['774', b('個 LIFF 文案項目與官網比對', 'LIFF copy keys compared with the website')]] },
          { t: 'p', text: b('四語系的檢查分成兩部分：', 'The four-language checks came in two parts:') },
          { t: 'list', items: [b('代表畫面：挑出 12 個代表畫面逐一切換四種語言，共核對 1,107 次，與官網字串 0 處不符，也抽查了日文的版面。', 'Key screens: 12 screens were checked in all four languages (1,107 checks in total), with zero mismatches against the website strings. Japanese layouts were also spot-checked.'), b('酒店元件：從 294 個變體、489 個文字層裡，挑出能確定意思的 225 層，對應到 91 個官方變數，225 層全部完成綁定。', 'Hotel components: out of 294 variants and 489 text layers, the 225 layers with unambiguous text were mapped to 91 official variables, and all 225 are bound.')] },
          { t: 'decision', q: b('價格、日期這類會變的文字，也要綁進變數嗎？', 'Should prices, dates, and other changing text be bound too?'), a: b('不硬綁，列入待審清單', 'No. They go in a review queue'), text: b('價格、日期、內容管理系統的內容與客人輸入，硬綁成固定文字反而會出錯。這類 264 個文字層留在待審清單，交接時可以清楚分辨哪些已處理、哪些還要人工判斷。每批改動前也先保存快照與復原清單，避免改錯後追不回來。', 'Binding prices, dates, CMS content, or guest input to fixed text would break them. These 264 layers stay in a review queue, so the handover makes clear what\'s done and what still needs human judgment. Before each batch, a snapshot and a rollback list were saved, so any mistake could be undone.') },
          { t: 'compare', ai: b('Figma 裡還有 36 個舊變數被畫面引用，AI 判斷「有引用就不能刪」，建議全部保留。', 'Figma still had 36 legacy variables in use. The AI concluded "in use means keep" and proposed keeping them all.'), me: b('我指出「改套用到正式變數不就可以刪了」。流程改成先改綁、再檢查、最後刪除：這 36 個舊變數在畫面上共 122 處引用，全部改綁；另外也刪除 16 個沒有被引用的變數。整體清理後，變數從 271 個降到 219 個，壞掉的引用 0 個。', 'I pointed out they could be rebound to the official variables and then removed. The flow became rebind, check, then delete: all 122 references to the 36 variables were rebound, and 16 unused variables were deleted too. After the full cleanup, variables went from 271 to 219 with zero broken references.'), source: b('2026 年 7～8 月 · Figma 四語系遷移時', 'Jul–Aug 2026 · during the Figma four-language migration') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗收', 'Build'),
        title: b('逐頁比對設計與程式', 'Checking the build against the design, page by page'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的切版由工程師完成，我負責逐頁比對設計還原度。這段時間的工作包括：', 'Engineers built the website v3.0 frontend, and I checked it against the design page by page. The work included:') },
          { t: 'list', items: [b('2023 年 8 月到 2024 年 3 月，留下 54 張修正截圖。', 'Logged 54 screenshots documenting UI corrections from Aug 2023 to Mar 2024.'), b('UAT 回報的 30 項問題，逐一追蹤到處理完成。', 'Tracked all 30 UAT issues until they were resolved.'), b('2026 年起改為搭配 AI 參與 LIFF 前端，清掉 250 多處不一致的樣式，也整理出 Figma、程式、文件三方衝突 42 項。', 'Starting in 2026, worked on the LIFF frontend with AI: cleaned up 250+ inconsistent styles and documented 42 conflicts across Figma, code, and documentation.')] },
          { t: 'table', rows: [
            [b('規格', 'Specs'), b('整理跨平台需求、比對官網與 LIFF 文件差異', 'Summarize cross-platform needs, diff website and LIFF docs'), b('決定哪些流程要一致、哪些保留平台差異', 'Decide which flows must match and which stay platform-specific')],
            [b('文案', 'Copy'), b('產出 774 條多語系文案的比對表與建議對照', 'Generate the 774-key comparison and suggested matches'), b('判斷差異是否合理、親自審核 138 筆判定', 'Judge each difference; personally review 138 of AI\'s labels')],
            [b('驗收', 'QA'), b('整理測試案例與 Slack 回報的問題', 'Compile test cases and issues reported in Slack'), b('實際操作驗收、判斷優先順序與是否上線', 'Run hands-on QA, set priorities, and make the go/no-go call')],
          ] },
          { t: 'h3', text: b('UAT 抓到的問題', 'What UAT caught') },
          { t: 'p', text: b('2024 年 3 月的 UAT 記錄到這些問題：', 'The March 2024 UAT logged issues such as:') },
          { t: 'list', ordered: true, items: [b('搜尋條件都填好後，警示沒有消失', 'A warning stayed visible after all search fields were filled'), b('地圖沒有移到篩選範圍', 'The map did not move to the filtered area'), b('幣別沒有跟著更新', 'Currency did not update'), b('切換方案會捲回頁首', 'Switching rates sent the page back to the top'), b('酒店訂單版面和 Figma 不一致', 'The hotel booking layout differed from Figma')] },
          { t: 'p', text: b('每一項都對回設計稿，變成工程可以直接定位的修正線索；30 項全部修正後，官網 3.0 才上線。', 'Each one was traced back to the design so engineers could pinpoint what to change, and website v3.0 launched only after all 30 were fixed.') },
          { t: 'callout', title: b('用真實資料型的案例做測試', 'Testing with realistic data'), text: b('官網 3.0 上線後我們發現，護照英文姓名的格式只有在真實客人資料下才會出錯。之後測試一律改用中文姓名、英文護照名等真實資料型案例，不再隨意填寫。', 'After website v3.0 launched, we found that English passport-name formatting broke only with real guest data. Now we always test with realistic cases, such as Chinese names paired with English passport names, instead of arbitrary values.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('官網變得典雅好找，LINE 成為新通路', 'A more refined site, easier search, and a new LINE channel'),
        blocks: [
          { t: 'stats', items: [['10%+', b('酒店頁的完成訂單比例，上線前是 1～5%', 'hotel-page booking rate, up from 1–5% before launch')], ['<10', b('件 UI 相關 bug，上線前是 10～30 件', 'UI-related bugs, down from 10–30 before launch')], ['2', b('個訂房通路上線：官網 3.0 與 LINE 訂房', 'booking channels launched: website v3.0 and LINE')]] },
          { t: 'p', text: b('數字比較官網 3.0 上線前後各 30 天（訂單比例來自 Mixpanel，bug 數來自 Jira）。這是團隊一起交付的成果，我負責產品規劃、UI/UX 與驗收。', 'Figures compare the 30 days before and after the v3.0 launch (booking rate from Mixpanel, bug counts from Jira). It was a team release; I was responsible for product planning, UI/UX, and QA.') },
          { t: 'h3', text: b('上線了什麼', 'What shipped') },
          { t: 'list', items: [b('官網 3.0（2024 年）：襯線體搭配中黑體的典雅風格，搜尋結果加上優惠標籤。', 'Website v3.0 (2024): a refined serif and sans pairing, with deal tags in search results.'), b('LINE 訂房（2026 年 5 月）：7 月加入信用卡購買會籍、英文版與 LINE 訂房通知。', 'Booking in LINE (May 2026): credit-card payment for memberships, an English version, and LINE booking notifications followed in July.')] },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次改版前，我會先定義要看的指標和事件，讓上線前後可以直接比較成效。2026 年我也回頭補上了量測，用數據檢查官網 3.0，找出登入牆等問題。', 'Before the next redesign, I\'d define the metrics and events up front so we can compare results before and after launch. In 2026 I went back, added that tracking, and used it to audit v3.0, which surfaced problems like the login wall.') },
        ],
      },
    ],
  },
  {
    slug: 'rewards',
    glance: { problem: b('會員獎勵的規則彼此牽動，開發途中規則還改版，各部門容易各說各話。', 'The loyalty rules depend on one another and changed mid-build, so teams could easily end up working from different versions.'), decision: b('以產品負責人的新規則為唯一來源，整合成一份 PRD 和 4 支可點擊的原型；28 題規則逐題列出選項，讓團隊定案。', 'I made the product owner\'s new rules the single source of truth, merged everything into one PRD and four clickable prototypes, and laid out options for each of 28 rules so the team could settle them.'), result: b('Phase 1 在 2026 Q3 於官網與 LIFF 上線，PM、工程、QA 和客服共用同一份規格。', 'Phase 1 launched on the website and LIFF in Q3 2026, with PM, engineering, QA, and support working from one spec.') },
    no: '02',
    period: '2025 — 2026',
    eyebrow: 'Case 02 · Product Management · Systems Thinking',
    title: b('WOTA Journey Rewards：\n把複雜規則變成可交付的規格', 'WOTA Journey Rewards:\nturning complex rules into a spec the team could build from'),
    cardTitle: b('WOTA Journey Rewards：把複雜規則變成可交付的規格', 'WOTA Journey Rewards: turning complex rules into a spec the team could build from'),
    lead: b(
      '會員等級、房晚入帳、升等積分、兌換與庫存規則彼此牽動。我把這些規則寫成產品需求文件（PRD）和資訊架構（IA），也做成可以實際點擊的原型，讓設計、工程和客服對每一條規則的理解都一樣。',
      'Tiers, room-night credits, upgrade points, redemptions, and inventory all depend on one another. I turned the rules into a product requirements document (PRD) and an information architecture (IA), plus clickable prototypes, so design, engineering, and support read every rule the same way.',
    ),
    chips: ['Product Management', 'PRD', 'Edge Cases', 'Prototype'],
    meta: [
      [b('我的角色', 'My role'), b('PRD · IA · 互動原型 · 前台 UI', 'PRD · IA · interactive prototypes · customer-facing UI')],
      [b('規則架構', 'Rule framework'), b('由產品負責人定義', 'Defined by the product owner')],
      [b('期間', 'Period'), b('2025.01 — 2026', '2025.01 — 2026')],
      [b('狀態', 'Status'), b('Phase 1 於 2026 Q3 在官網與 LIFF 上線', 'Phase 1 launched on the website and LIFF in Q3 2026')],
    ],
    kpis: [
      ['18', b('種兌換狀態設計', 'redemption states designed'), b('兌換中心的 18 種狀態依優先級分成三批：最優先 6 種、第二批 7 種、第三批 5 種。', 'The 18 redemption-center states were grouped into three batches by priority: 6 in the first, 7 in the second, and 5 in the third.')],
      ['28', b('題升等規則，逐題列出選項讓團隊定案', 'upgrade rules settled, each from options I laid out for the team'), b('升等積分的 28 個規則問題逐題列出選項讓團隊拍板，例如定案「效期結束時積分歸零，會籍一律降一級」。', 'I laid out 28 open questions on upgrade-point rules, each with options for the team to decide. For example, the team settled on "points reset at the end of the term, and the tier always drops one level."')],
      ['4', b('處權益差異，在新版兌換流程上線前找出', 'benefit changes caught before the new redemption flow ships'), b('審查新版兌換流程概念稿時，用 Codex 比對 16 頁概念稿與現行畫面，我挑出 4 處會改變既有會員權益的差異交給團隊，例如機場接送少了「禮賓」。', 'While reviewing a concept for the new redemption flow, I had Codex compare its 16 screens with the current ones, then flagged 4 changes that would alter existing member benefits, such as airport transfer losing "concierge."')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/redeem-center-elite.webp',
      alt: b('Journey Rewards 兌換中心（Elite 會員）：上方顯示會員資格與累計 32 晚，下方四個獎勵中兩個可兌換、兩個顯示房晚不足', 'Journey Rewards redemption center for an Elite member: tier and 32 nights shown at the top, two rewards available to redeem, and two marked as not enough nights'),
      caption: b('兌換中心 · Elite（第二級會籍）會員畫面 · 擷取自 UI Spec 開發環境，資料為假資料', 'Redemption center, Elite (second-tier) member · captured from UI Spec in the dev environment, with fake data'),
    },
    card: { kind: 'image', src: ['img/real/redeem-center-elite.webp'], label: b('兌換中心 · Elite（第二級會籍）· 假資料', 'Redemption center · Elite (second tier) · fake data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('一條規則改了，會牽動 UI、API、帳本和客服說法', 'Change one rule, and the UI, API, ledger, and support scripts all have to follow'),
        blocks: [
          { t: 'p', text: b('會員權益改版時，如果設計、工程和客服用的是不同版本的規則，會員就可能看到錯的資格或兌換條件。Journey Rewards 是會員獎勵計畫：會員入住後累積「房晚」（用來兌換禮遇，例如酒店早餐、機場接送等會員權益）與「升等積分」（決定會籍等級）。這些規則會互相影響：', 'When benefits change and design, engineering, and support work from different versions of the rules, members can end up seeing the wrong eligibility or redemption terms. Journey Rewards is WOTA\'s loyalty program. Members earn two things from stays: room nights, which they redeem for perks like hotel breakfast or airport transfers, and upgrade points, which set their tier. The rules feed into one another:') },
          { t: 'flow', items: [b('入住', 'Stay'), b('房晚入帳', 'Room-night credit'), b('升等積分', 'Upgrade points'), b('升級與保級（維持原等級）', 'Upgrades and tier retention'), b('兌換與庫存', 'Redemption and inventory')] },
          { t: 'p', text: b('同一套規則要同時出現在官網與 LIFF 的介面、後端 API 與記錄每筆房晚與積分的帳本、QA 測試案例，以及客服 FAQ。而且開發途中規則改版，產品負責人發布的新架構和原本的版本不相容。', 'The same rules appear in the web and LIFF UI, the backend API and the ledger that tracks every night and point, QA cases, and the support FAQ. The rules also changed mid-project: the product owner\'s new framework was incompatible with the earlier version.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('把規則整理成一份設計、工程、QA 和客服都能對照的規格，讓兌換失敗、房晚不足這類特殊狀況，在開發前就先討論清楚。', 'Write the rules into one spec that design, engineering, QA, and support can all check against, so special cases such as failed redemptions or too few nights are settled before development.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm'], tags: ['PM'], toc: b('關鍵決策', 'Decisions'),
        title: b('規則怎麼定', 'How the rules were settled'),
        blocks: [
          { t: 'decision', q: b('我的舊版本和產品負責人的新規則衝突，怎麼整合成一份？', 'My earlier version conflicted with the product owner\'s new rules. How do they become one spec?'), a: b('以新規則為唯一來源，把兩版整合成 PRD v2.2', 'Treat the new rules as the single source of truth and merge both into PRD v2.2'), text: b('先前的版本以「1 晚＝1 點、點數可換會籍」為主軸；整合成 PRD v2.2 時，點數拆成只決定等級的「升等積分」與逐筆 24 個月到期的「累計房晚」，移除點數換會籍，改成達標自動升級。', 'My earlier version was built on "1 night = 1 point, and points can be exchanged for a higher tier." In PRD v2.2, points were split into upgrade points, which only set the tier, and accumulated room nights, each expiring after 24 months. Exchanging points for a higher tier was dropped; members now upgrade automatically once they hit the threshold.') },
          { t: 'decision', q: b('房晚要算付費的晚數，還是實際入住的晚數？', 'Count paid nights or nights actually stayed?'), a: b('以有效入住晚數為基準', 'Count valid nights actually stayed'), text: b('例如「住三付二」這類贈送的房晚也應該計入。這個決定要同步到 PRD、API、帳本、QA 與客服 FAQ，不能只改其中一處。', 'Free nights from offers like "stay 3, pay 2" count too. The decision had to land in the PRD, API, points ledger, QA, and FAQ at the same time, not in just one of them.') },
          { t: 'diagram', kind: 'rules', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'decision', q: b('兩種累積機制同時推進，要一次做完還是分段上線？', 'Two earning systems at once: ship together or in phases?'), a: b('分段上線，先定義 Phase 1 範圍', 'In phases, starting with a clearly scoped Phase 1'), text: b('我釐清房晚和積分同時上線時會互相影響的地方之後，把「舊積分停止累積」「新功能可分批開關」「舊資料轉移」拆成獨立任務，降低一次上線過多功能的風險。', 'I mapped where nights and points would affect each other if they launched together, then split the work into separate tasks: stopping old-point accrual, feature flags for a staged rollout, and migrating old data. That lowered the risk of packing too much into one release.') },
        ],
      },
      {
        id: 'states', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('房晚狀態', 'Night states'),
        title: b('房晚入帳前的各種狀態', 'The states a room night passes through'),
        blocks: [
          { t: 'p', text: b('房晚有 Pending、Upcoming、Processing、Active、Excluded 等狀態，名字很像，會員和營運都容易混淆。', 'Room nights move through states like Pending, Upcoming, Processing, Active, and Excluded. The names are similar enough that members and the ops team mix them up easily.') },
          { t: 'p', text: b('我把每個狀態對回訂單狀態，整理前台與後台需要的資料與文案，例如不計入的房晚，就直接寫「不計入」。', 'I mapped each state back to an order status and listed the data and copy each screen needed across the customer-facing UI and the admin. Excluded nights, for example, simply say "not counted."') },
          { t: 'p', text: b('「我的房晚紀錄」的列表與明細，讓每一筆都看得出來源、酒店、入住日期與入帳進度，也設計了沒有資料、載入中、出錯與分頁時的畫面。', 'The "My room nights" list and detail views show each night\'s source, hotel, stay date, and credit progress, with empty, loading, error, and pagination states designed too.') },
          { t: 'figure', src: ['img/case2/night-records.webp'], alt: b('我的房晚紀錄：上方是目前累計房晚與獲得、待入帳、兌換消耗、即將到期的統計，下方列表每筆標出酒店、訂單、到期日與狀態', 'My room nights: totals for earned, pending, redeemed, and expiring nights at the top, and a list below showing each stay\'s hotel, order, expiry, and status'), caption: b('我的房晚紀錄 · 同一頁呈現待入帳、入帳處理中、有效、即將到期、已使用、已失效六種狀態 · 擷取自 UI Spec 開發環境，資料為假資料', 'My room nights · one page showing all six states: pending, processing, active, expiring soon, used, and expired · captured from UI Spec in the dev environment, with fake data') },
        ],
      },
      {
        id: 'redeem', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('兌換流程', 'Redemption'),
        title: b('兌換中心的四種情境', 'Four situations in the redemption center'),
        blocks: [
          { t: 'p', text: b('兌換中心要分清楚四種情境：可以兌換、會籍等級不足、房晚不足，以及沒有可兌換的品項。每一種都在高保真原型裡有自己的畫面、引導卡與資格提示，會員看得出自己差在哪裡。', 'The redemption center separates four situations: can redeem, tier too low, not enough nights, and no items available. Each has its own screen, guidance card, and eligibility hint in the high-fidelity prototype, so members can see what they still need to qualify.') },
          { t: 'figure', src: ['img/case2/redeem-detail-can-redeem.webp', 'img/case2/redeem-detail-tier-too-low.webp', 'img/case2/redeem-detail-not-enough-nights.webp', 'img/case2/redeem-center-empty.webp'], alt: b('四張兌換畫面，由上而下：可以兌換（確認兌換按鈕）、會籍等級不足（未達兌換條件）、房晚不足（房晚不足）、沒有可兌換的品項', 'Four redemption screens, top to bottom: can redeem (confirm button), tier too low (requirements not met), not enough nights, and no items available'), caption: b('四種情境，由上而下：可以兌換、會籍等級不足、房晚不足、沒有可兌換的品項。右側按鈕會依情境改變 · 擷取自 UI Spec 開發環境，資料為假資料', 'The four situations, top to bottom: can redeem, tier too low, not enough nights, and no items available. The button on the right changes with each one · captured from UI Spec in the dev environment, with fake data') },
          { t: 'p', text: b('兌換本身走「詳情 → 確認 → 成功或失敗」三步，失敗頁要能重試或找到後續入口。原型也加入修改規則：每筆兌換只能改一次，航空里程不開放修改；房晚快到期時，會顯示提醒與兌換引導。', 'Redemption takes three steps: detail, confirm, then success or failure. Failure pages offer a retry or a clear next step. The prototype also covers change rules: each redemption can be changed once, airline-mile redemptions can\'t be changed, and nights close to expiring trigger a reminder with redemption suggestions.') },
          { t: 'figure', pair: true, src: ['img/case2/redeem-confirm-dialog.webp', 'img/case2/redeem-success.webp'], alt: b('左：確認兌換彈窗，列出兌換項目、扣除房晚與兌換後剩餘；右：兌換成功頁，禮品券已加入我的禮品券', 'Left: the confirm dialog listing the item, nights deducted, and nights remaining. Right: the success page, with the voucher added to My vouchers'), caption: b('兌換流程的確認與成功 · 擷取自 UI Spec 開發環境，資料為假資料', 'Confirming and completing a redemption · captured from UI Spec in the dev environment, with fake data') },
          { t: 'p', text: b('這段的四種情境與修改規則是在原型裡驗證的；正式站的品項、扣房晚與 API 由工程團隊驗收。', 'The four situations and the change rules were validated in the prototype; the engineering team verifies the live reward items, room-night deductions, and APIs.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('流程與原型', 'Design'),
        title: b('用可以操作的原型討論規則', 'Talking through rules with clickable prototypes'),
        blocks: [
          { t: 'p', text: b('只有 IA 時，失敗、暫停、連結失效這些狀態都沒有定義。我做了 4 支互相串接的互動原型，讓工程與客服可以直接操作。', 'An IA alone left states like failure, pause, and expired links undefined, so I built four linked, interactive prototypes that engineering and support could click through themselves.') },
          { t: 'p', text: b('兩支互相矛盾的規則原型也合併成一支，讓原型、IA、Figma、設計系統四處一致。', 'Two prototypes with conflicting rules were merged into one, so the prototype, IA, Figma, and design system all agree.') },
          { t: 'h3', text: b('名詞統一', 'One set of terms') },
          { t: 'p', text: b('「可兌換房晚」改為「累計房晚」，並統一使用「房晚」而不是夜泊或點數。i18n、介面、PRD 與客服說法都改用同一組詞。', '"Redeemable nights" became "accumulated nights," and "room nights" replaced variants like "nights stayed" and "points." i18n, UI, PRD, and support now all use the same words.') },
        ],
      },
      {
        id: 'matrix', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('驗證矩陣', 'Coverage'),
        title: b('會籍、語言與結果的組合檢查', 'Checking tier, language, and outcome combinations'),
        blocks: [
          { t: 'p', text: b('測試四種會籍、兩種語言，以及成功和失敗兩種結果時，很容易只驗到「一般會員、中文、成功」這一種。所以把所有組合交叉攤開，用不同身分和語言逐一操作原型。', 'With four tiers, two languages, and two outcomes, it\'s easy to only ever test "basic member, Chinese, success." So I laid out every combination and walked through the prototypes as a member of each tier, in each language.') },
          { t: 'p', text: b('四支原型也統一數字字型、加上亮暗模式切換，並用相關連結串起來，評審可以看完整段會員旅程。也試過讓四支原型在同一個分頁連續跳轉，測試後還原，改用連結。', 'The four prototypes share one typeface for numbers, a light/dark switch, and links between them so reviewers can follow the whole member journey. I also tried chaining them so they jump from one to the next in a single tab, but went back to links after testing.') },
          { t: 'p', text: b('這些檢查限於原型裡的兩種語言，不代表正式系統的四語系與端到端測試已通過。', 'These checks cover the two languages in the prototypes only, not all four languages or end-to-end tests of the live system.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('前台實作與新稿比對', 'Frontend work and reviewing a new draft'),
        blocks: [
          { t: 'p', text: b('Phase 1 的工程任務由工程團隊開立，我負責追蹤進度。前台由我用 Claude Code 撰寫 Journey Rewards 頁面與 LIFF「我的房晚紀錄」的程式並串接 API，我負責審查與驗收，全端工程師也會 review 程式碼。', 'The engineering team created the Phase 1 tickets, and I tracked their progress. On the frontend, I used Claude Code to write the Journey Rewards pages and My room nights in LIFF, including the API integration. I reviewed and signed off on the work, and a full-stack engineer also reviewed the code.') },
          { t: 'table', rows: [
            [b('規則', 'Rules'), b('整理規則、比對各版文件、探索流程分支', 'Organize rules, diff versions, explore branches'), b('判斷衝突、決定以哪份規則為準', 'Resolve conflicts and pick the source of truth')],
            [b('規格', 'Specs'), b('產生 PRD 與兌換規格初稿、例外情境檢查清單', 'Draft the PRD, redemption spec, and edge-case checklist'), b('確認使用者體驗與交付範圍', 'Confirm the experience and delivery scope')],
            [b('前台', 'Frontend'), b('以 Claude Code 調整頁面、文字與路由', 'Adjust pages, copy, and routes with Claude Code'), b('審查畫面與程式、跟著節點驗收', 'Review screens and code, sign off at each gate')],
          ] },
          { t: 'compare',
            title: b('過程證據：AI 比對，我判斷', 'Evidence: AI compares, I judge'),
            aiLabel: b('AI 負責', 'What AI did'), meLabel: b('我的判斷', 'My call'),
            ai: b('新版兌換流程概念稿有 16 頁。我用 Codex 把每一頁和 UI Spec（Case 03 開發中的工具）裡的現行畫面比對，列出所有文字與欄位的差異。', 'A new redemption-flow concept had 16 screens. I had Codex compare each one against the current screens in UI Spec, the in-development tool from Case 03, and list every text and field difference.'),
            me: b('我從差異裡挑出 4 處改到會員權益的地方：機場接送少了「禮賓」、機場通關服務刪掉「出境」、特定酒店的早餐禮遇消失、「Elite 可兌換」被改成「Elite 規格」：原意是 Elite 會員可以兌換，改成「規格」後像在描述品項，會員會搞不清楚自己能不能換。這 4 處標出來交給團隊，避免新稿在不知不覺中改掉已定案的權益。', 'From those differences I picked out 4 that changed member benefits: the airport transfer lost "concierge," the fast-track service dropped "departure," a hotel breakfast benefit disappeared, and "Elite can redeem" became "Elite spec," which reads like an item description, so members wouldn\'t know whether they qualify. I flagged all 4 for the team so the new draft wouldn\'t quietly change benefits that were already settled.'),
            source: b('2026 年 11 月 · 審查新版兌換流程概念稿時', 'Nov 2026 · while reviewing a new redemption-flow concept') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('Phase 1 上線，各角色對著同一份規格工作', 'Phase 1 shipped, with everyone working from one spec'),
        blocks: [
          { t: 'stats', items: [['2', b('個平台上線 Phase 1：官網與 LIFF', 'platforms where Phase 1 is live: website and LIFF')], ['4', b('支串接的可點擊原型，搭配同一份規格，PM、工程、QA 和客服共用', 'linked clickable prototypes and one spec, shared by PM, engineering, QA, and support')], ['4', b('處權益差異，在新版兌換流程上線前找出', 'benefit changes caught before the new redemption flow ships')]] },
          { t: 'p', text: b('現在 PM、前後端工程師、QA 和客服，看的都是同一套可以點擊的原型和規格。', 'PM, frontend and backend engineers, QA, and support now all work from the same clickable prototypes and spec.') },
          { t: 'h3', text: b('上線了什麼', 'What shipped') },
          { t: 'list', items: [b('官網 Journey Rewards：房晚紀錄、升等積分、兌換中心、我的禮品券。', 'Website Journey Rewards: room nights, upgrade points, redemption center, and my vouchers.'), b('LIFF：我的房晚紀錄。', 'LIFF: My room nights.')] },
          { t: 'h3', text: b('規格怎麼演進', 'How the spec evolved') },
          { t: 'versions', items: [
            ['2025-01', b('房晚累積獎勵表', 'Room-night rewards table')],
            ['v2.0', b('我的版本：1 晚＝1 點、點數可換會籍', 'My version: 1 night = 1 point, points can be exchanged for a higher tier')],
            ['v2.1', b('產品負責人發布新版規則架構', 'Product owner publishes the new rule framework')],
            ['v2.2', b('2026-05-22 整合成 PRD v2.2 與 5 份 IA', 'Merged into PRD v2.2 and 5 IA documents (2026-05-22)')],
            ['2026 Q3', b('分段上線：官網 Journey Rewards 與 LIFF「我的房晚紀錄」', 'Phased launch: website Journey Rewards and LIFF "My room nights"')],
            ['2026-10', b('4 支串接原型與 Figma、設計系統 v1.3 完成同步', 'Four linked prototypes synced with Figma and design system v1.3')],
          ] },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會在 PRD 階段就做可操作的原型，讓工程、客服和產品負責人一開始就對著同一個畫面，討論失敗、暫停這些狀態。', 'Next time I\'d build a clickable prototype during the PRD stage, so engineering, support, and the product owner can talk through states like failure and pause on the same screen from day one.') },
        ],
      },
    ],
  },
  {
    slug: 'ui-spec',
    glance: { problem: b('要看一個會員狀態的畫面，得先換帳號、準備資料、等 API，驗收很費工。', 'Seeing one member state meant switching accounts, preparing data, and waiting for the API, which made reviews slow.'), decision: b('用正式頁面的程式加上假資料，做出一個只在開發環境運作的檢查工具。', 'I built a checking tool that runs the production page code with fake data and lives only in the development environment.'), result: b('129 個狀態畫面不用換帳號就能看，檢查一個狀態從約 30 分鐘縮短到 1 分鐘內（估計）；建置時就找到 2 個正式站的顯示錯誤。', 'All 129 state screens can be viewed without switching accounts. Checking one state dropped from about 30 minutes to under one (estimate), and building the tool turned up 2 live display bugs.') },
    no: '03',
    period: '2026 · BUILT WITH CLAUDE CODE',
    eyebrow: 'Case 03 · Frontend × AI · Built with Claude Code',
    title: b('UI Spec：設計師用 AI\n做出的會員畫面檢查工具', 'UI Spec: a member-screen checker\na designer built with AI'),
    cardTitle: b('UI Spec：設計師用 AI 做出的會員畫面檢查工具', 'UI Spec: a member-screen checker a designer built with AI'),
    lead: b(
      '我做了一個內部檢查工具，讓設計、PM 與 QA 不必換帳號、也不必等後端，就能看到每個會籍、每種狀態的畫面。畫面用的是正式頁面的程式，只把資料換成假資料。',
      'I built an internal tool so design, PM, and QA can see the screen for every tier and state without switching accounts or waiting for the backend. The screens run the production page code, with only the data swapped for fake data.',
    ),
    chips: ['Frontend × AI', 'Claude Code', 'Vue / Quasar', 'Design Token'],
    meta: [
      [b('我的角色', 'My role'), b('發起、規劃、設計與實作', 'Initiated, planned, designed, and built it')],
      [b('產品', 'Product'), b('WOTA 官網會員中心', 'WOTA member center')],
      [b('期間', 'Period'), b('2026.08 — 11', '2026.08 — 11')],
      [b('狀態', 'Status'), b('只在開發環境使用', 'Dev environment only, by design')],
    ],
    kpis: [
      ['129', b('個狀態畫面', 'state screens'), b('11 月 6 日第一階段完成 18 個頁面、63 個狀態畫面，11 月 12 日擴充到 129 個。每個畫面都用正式頁面的程式，只把資料換成假的。', 'Phase 1 wrapped on Nov 6 with 18 pages and 63 state screens, growing to 129 by Nov 12. Every screen runs the production page code, with only the data swapped for fake data.')],
      ['1 分鐘', b('內就能看到一個會員狀態（原本約 30 分鐘）', 'or less to see a member state, down from about 30 minutes'), b('以前要準備對應的帳號與資料、等 API 正常，估計約 30 分鐘；現在打開工具切到對應狀態，1 分鐘內就看得到。時間是我自己的估計，沒有正式計時。', 'Before, it took about 30 minutes to set up a matching account and data and wait for the API; now it takes under a minute to open the tool and switch to the state. These are my own estimates, not formal timings.')],
      ['2', b('個正式站的顯示錯誤，在檢查時發現並回報', 'live display bugs found and reported during checks'), b('驗證過程中，發現 2 個已經在正式站影響會員的會員獎勵卡片顯示錯誤，回報給團隊修正。', 'Checks turned up 2 display bugs in member rewards cards that were already affecting members on the live site. I reported both to the team.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/uispec-gallery.webp',
      alt: b('UI Spec 工具畫面：左側分組導覽，上方寬度與語系切換，右側並排 Journey Rewards 兌換中心四個會籍與兌換詳情各狀態', 'UI Spec screen: grouped navigation, width and language switches, and Journey Rewards redemption pages for four tiers and detail states side by side'),
      caption: b('UI Spec 開發環境實際畫面 · 畫面中的會員資料皆為假資料', 'UI Spec in the dev environment · all member data shown is fake'),
    },
    card: { kind: 'image', src: ['img/real/uispec-gallery.webp'], label: b('UI Spec 開發環境實際畫面 · 假資料', 'UI Spec dev environment · fake data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('要看一個狀態，得先換帳號、重現情境', 'Seeing one state meant switching accounts and recreating the scenario'),
        blocks: [
          { t: 'p', text: b('會員中心與 Journey Rewards 的畫面會隨會籍等級、點數餘額、庫存與日期規則變化。過去要確認某個狀態長什麼樣子，必須準備對應的帳號與資料，還要等 API 和登入功能正常。', 'Member center and Journey Rewards screens change with tier, balance, inventory, and dates. Checking one state used to require the right accounts and data, plus a working API and login.') },
          { t: 'p', text: b('結果是驗收很費工，很多例外狀態要到很晚才被看見。', 'Reviews were slow, and many edge cases only came to light late in the process.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓團隊在不登入、不連後端的情況下，直接看到每一個會籍、每一種狀態的真實畫面，而且畫面跟正式頁面來自同一份程式。', 'Let the team see every tier and state without logging in or calling the backend, using the same code as the production pages.') },
        ],
      },
      {
        id: 'origin', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('起點', 'Origin'),
        title: b('這個工具從整理前端樣式開始', 'The tool began with a frontend style cleanup'),
        blocks: [
          { t: 'p', text: b('2026 年 9 月，我先整理前端的樣式：各頁散落、不一致的間距和排版寫法，收斂成共用樣式，並加上自動檢查，避免之後又寫出不一致的數值。', 'In September 2026 I started by tidying the frontend styles: I folded scattered, inconsistent spacing and layout rules into shared styles and added an automatic check so inconsistent values can\'t creep back in.') },
          { t: 'decision', q: b('改了這麼多樣式，怎麼確定畫面沒有跑掉？', 'After so many style changes, how do you know nothing moved?'), a: b('量每個元素的位置與尺寸，而不是比對截圖', 'Measure element positions and sizes, not screenshots'), text: b('圖片載入和骨架動畫（載入時的灰色占位畫面）會讓截圖比對誤判。改成在同一次載入下，切換新舊寫法量測每個元素的位置與尺寸：兩組頁面共 4,105 個元素，差異都是 0。', 'Image loading and skeleton animations make screenshot diffs unreliable. Instead, in a single load, I switched between old and new code and measured every element\'s position and size across two sets of pages, 4,105 elements in all, with zero difference.') },
          { t: 'p', text: b('整理過程中也修好一個看得到的問題：房價方案描述較長的酒店卡片，品牌 logo 被擠成約 7.9px，恢復成 20×20px。整理時也用副本（正式頁面的複製頁，只把資料換成假的）補上平常看不到的狀態，例如彈窗、登入後才出現的元件。UI Spec 延續了這個做法：把平常看不到的狀態全部攤開來看。', 'Along the way I fixed a visible bug: on hotel cards with long rate descriptions, the brand logo was squeezed to about 7.9px, and it\'s now back to 20×20px. I also used page copies (duplicates of production pages with fake data) to cover normally hidden states, such as dialogs and components that appear only after sign-in. UI Spec extends that idea: lay out every hidden state in one place.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('關鍵決策', 'Decisions'),
        title: b('工具的做法怎麼選', 'Choosing how the tool works'),
        blocks: [
          { t: 'decision', q: b('用截圖、Figma，還是真的元件？', 'Screenshots, Figma, or real components?'), a: b('選擇渲染正式頁面的真元件', 'Render the real production components'), text: b('截圖和設計稿會跟實際程式脫節。副本頁的畫面程式跟正式頁面完全相同，只把資料換成假的，看到的就是使用者會看到的。', 'Screenshots and mockups drift from the code. Page copies run exactly the same screen code as the production pages, with only the data swapped for fake data, so they show what users see.') },
          { t: 'decision', q: b('手機版要用縮小的桌機畫面，還是真的重排？', 'Shrink the desktop view, or truly reflow?'), a: b('依選定寬度重新判斷版面', 'Recompute the layout for the chosen width'), text: b('工具會依照選定的寬度重新計算版面，所以 1440、1280、1024、375 四種寬度都會真的重新排版，手機寬度也會換成手機版的元件。', 'The tool renders real responsive behavior at 1440, 1280, 1024, and 375px instead of shrinking one desktop screen, and mobile widths switch to mobile components.') },
          { t: 'decision', q: b('假資料工具最怕流進正式站，怎麼防？', 'A fake-data tool must never reach production. How?'), a: b('五層防線，不靠人記得', 'Five automated safeguards, so no one has to remember'), text: b('用五道自動關卡擋住工具進入正式環境，細節見「隔離與同步」。', 'Five automatic checks keep the tool out of production; details under Isolation.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('工具設計', 'Design'),
        title: b('讓不同角色都能快速找到要看的狀態', 'Helping every role find the state they need fast'),
        blocks: [
          { t: 'p', text: b('工具本身也是一個要設計的產品。使用者是設計師、PM 與 QA，他們打開工具時，想知道的是「我要看的那個狀態在哪裡」。', 'The tool is a product too. Its users are designers, PMs, and QA, and when they open it, all they want to know is where to find the state they need.') },
          { t: 'h3', text: b('資訊架構', 'Information architecture') },
          { t: 'p', text: b('左側分成總覽、最近修改、頁面副本、設計 Token（顏色、字級等共用設定）四區。頁面副本依產品分成 5 組，每張卡片標示狀態名稱與是否待確認。', 'The sidebar has four areas: overview, recent changes, page copies, and design tokens (shared settings such as color and type size). Page copies are split into 5 product groups, and each card shows its state name and whether it still needs a decision.') },
          { t: 'h3', text: b('瀏覽方式', 'Browsing') },
          { t: 'p', text: b('每個狀態畫面是一格，所有格子並排就是畫廊。瀏覽時可以：', 'Each state screen is a cell, and all cells side by side form the gallery. While browsing, you can:') },
          { t: 'list', items: [b('在上方切換 4 種寬度，以及繁中、簡中、EN 三種語系', 'Switch between 4 widths and 3 languages (Traditional Chinese, Simplified Chinese, and English) at the top'), b('開啟輔助線、以游標為中心縮放，或直接搜尋', 'Turn on guides, zoom around the cursor, or search'), b('在格子裡操作，互動和真站一致，假 API 可以切換成功或失敗', 'Interact inside a cell just as on the live site, with fake APIs that switch between success and failure'), b('複製網址分享給同事，網址會記住目前的分組與卡片', 'Share the URL with a colleague; it keeps the current group and card')] },
          { t: 'figure', src: ['img/real/uispec-gallery.webp'], alt: b('UI Spec 分組導覽與 1440 寬的狀態畫廊', 'UI Spec grouped navigation and the 1440px state gallery'), caption: b('UI Spec 開發環境實際畫面 · 1440 寬下的 Journey Rewards 狀態畫廊，同步／TBD 標示每張卡片是否待確認', 'UI Spec in the dev environment · Journey Rewards gallery at 1440px, with sync and TBD labels on each card') },
        ],
      },
      {
        id: 'interaction', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('互動驗證', 'Interaction'),
        title: b('在格子裡操作互動', 'Interacting inside each cell'),
        blocks: [
          { t: 'p', text: b('靜態格子只能看「長什麼樣子」，看不到「點下去會怎樣」。評審要檢查的是完整流程，所以我加了三個能力：', 'Static cells show what a screen looks like, not what happens on click. Reviewers need to check whole flows, so I added three capabilities:') },
          { t: 'decision', q: b('在格子裡跳到別的頁面後，怎麼回來？', 'After jumping to another page inside a cell, how do you get back?'), a: b('加上返回軌跡', 'Add a navigation history'), text: b('可以回上一步、回起點，也可以從下拉選單選任何一步，連畫面縮放與捲動位置都會還原。', 'Go back one step, return to the start, or pick any step from a dropdown, with zoom and scroll position restored.') },
          { t: 'decision', q: b('送出表單、彈窗這些互動，怎麼驗又不會寫到真資料？', 'How do you test form submissions and dialogs without touching real data?'), a: b('攔截 API，回傳可切換的成功或失敗', 'Intercept API calls and return switchable success or failure'), text: b('每一格都有自己的假回應，可以切換成功或失敗，看到兩種結果的畫面，不會寫進任何真資料。', 'Each cell has its own fake responses that can switch between success and failure, showing both outcomes without writing any real data.') },
          { t: 'decision', q: b('改了東西，怎麼讓大家知道改在哪裡？', 'After a change, how does everyone find what changed?'), a: b('逐格記錄最近修改', 'Track recent changes per cell'), text: b('原本「最近修改」會把同一頁的所有狀態都列出來。現在改成分格記錄修改時間，連引用到的副本也會追蹤，列出最新 25 格。', 'Recent changes used to list every state on a page. Now each cell records its own change time, including the copies it references, and the latest 25 cells are listed.') },
        ],
      },
      {
        id: 'safety', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('隔離與同步', 'Isolation'),
        title: b('怎麼避免假資料流進正式站', 'Keeping fake data out of production'),
        blocks: [
          { t: 'p', text: b('這個工具刻意只在開發環境運作，不會出現在正式網站上。它有兩個風險：副本畫面慢慢和正式頁面脫節，以及測試用的假資料被帶進正式站。前者用同步檢查處理，副本只要和正式頁不一致就會報錯，一個指令就能同步回來；後者用五道關卡處理。', 'By design, the tool runs only in the development environment and never appears on the live site. It carries two risks: copies drifting from production pages, and fake test data leaking into the live site. A sync check handles the first: it fails whenever a copy differs, and one command syncs it back. Five safeguards handle the second.') },
          { t: 'guard', items: [
            [b('網址', 'URLs'), '', b('正式版不會產生工具的網址', "Production builds leave out the tool's pages")],
            [b('網域', 'Domain'), '', b('只在開發網域打得開', 'Opens on development domains only')],
            [b('部署', 'Deploy'), '', b('部署設定不會把工具帶上正式站', 'Deployment config never ships the tool')],
            [b('打包', 'Build'), '', b('只要有殘留，打包就直接失敗', 'The build fails if anything is left behind')],
            [b('程式', 'Code'), '', b('檢查正式程式沒有引用工具', 'Checks that production code never imports the tool')],
          ] },
          { t: 'p', text: b('另外，單一格子出錯時只會影響那一格，不會讓整個畫廊掛掉。格子揭露的正式頁問題，則交回各自的頁面修正。', 'If one cell fails, only that cell is affected, not the whole gallery. Bugs a cell reveals in a production page are fixed in that page itself.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('用 Claude Code 實作，由我負責判斷與驗證', 'Built with Claude Code; I made the calls and verified the work'),
        blocks: [
          { t: 'p', text: b('工具建在公司既有的 Vue / Quasar 專案裡，必須遵守原本的程式規範。', 'The tool lives in the existing Vue / Quasar codebase and follows its coding rules.') },
          { t: 'table', rows: [
            [b('規劃', 'Plan'), b('整理頁面清單、狀態組合與檔案結構草案', 'Draft page list, state combinations, and file structure'), b('決定要做真元件副本、範圍與分組方式', 'Choose real-component copies, scope, and grouping')],
            [b('實作', 'Build'), b('產生副本頁、假資料與寬度重排的程式', 'Generate copies, fake data, and width reflow code'), b('審查程式、要求符合既有規範與程式規範檢查（lint）', 'Review code, enforce standards and lint')],
            [b('驗證', 'Verify'), b('比對副本與正式頁面的差異', 'Diff copies against production'), b('逐一檢查畫面、判斷是否為真正的問題', 'Inspect each screen and decide which issues are real')],
          ] },
          { t: 'compare', ai: b('AI 一次處理的範圍太大，每批要跑很久，跑完我沒辦法逐項確認做對了沒有。', 'The AI took on too much per batch; each run took so long I couldn\'t verify what it had done.'), me: b('我要求重新切分任務粒度：每批 30 到 90 秒、最多寫入 5 個檔案。每一批都小到我看得完、驗得了，才繼續下一批。', 'I had it break the work into smaller batches: 30–90 seconds per batch, with at most 5 files written. Every batch was small enough for me to review before the next one ran.'), source: b('這是 2026 年 8 月 Figma 四語系遷移時建立的做法，之後成為我與 AI 協作的固定方式', 'A practice I established during the Figma four-language migration in Aug 2026, which became my standard way of working with AI') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('建置過程中，就找到正式站的顯示錯誤', 'Catching live display bugs while building the tool'),
        blocks: [
          { t: 'stats', items: [['129', b('個狀態畫面，不用換帳號就能檢查', 'state screens, viewable without switching accounts')], ['30→1', b('分鐘：檢查一個狀態的時間（估計）', 'minutes to check one state (estimate)')], ['2', b('個正式站顯示錯誤，發現並回報', 'live display bugs found and reported')]] },
          { t: 'p', text: b('11 月 6 日完成第一階段（18 個頁面、63 個狀態畫面），11 月 12 日擴充到 129 個。驗證時也發現前後端欄位命名不一致。', 'Phase 1 finished on November 6 with 18 pages and 63 state screens, growing to 129 by November 12. Verification also surfaced mismatched field names between frontend and backend.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會先做驗收時最常卡關的那些狀態，讓工具更早被團隊用起來，再逐步擴充。', 'Next time I\'d start with the states that block reviews most often, get the tool into the team\'s hands sooner, and expand from there.') },
        ],
      },
    ],
  },
  {
    slug: 'analytics',
    glance: { problem: b('團隊只看得到流量和轉換的表面數字，不知道客人卡在哪一步。', 'The team could see top-line traffic and conversion, but not where guests got stuck.'), decision: b('以操作錄影為核心交叉驗證數據，推翻了「登入有一半失敗」的初步結論。', 'I put session recordings at the center and cross-checked the data, which overturned the early conclusion that half of all logins were failing.'), result: b('找出登入牆和看不到價格的落地頁兩個卡點，交付 41 項排好優先順序的改版建議和每週追蹤。', 'I found two bottlenecks, the login wall and landing pages with no prices, and delivered 41 prioritized recommendations plus weekly tracking.') },
    no: '04',
    period: '2026.10 — NOW',
    eyebrow: 'Case 04 · UX Research · Data',
    title: b('網站行為分析：\n找出訂單卡在哪一步', 'Website behavior analysis:\nfinding where bookings stall'),
    cardTitle: b('網站行為分析：找出訂單卡在哪一步', 'Website behavior analysis: where bookings get stuck'),
    lead: b(
      '團隊只看得到流量和轉換的表面數字，不知道客人卡在哪裡。我對照使用者的操作錄影和網站數據，找出客人最常卡住的兩個地方：一是要先登入才能繼續訂房，二是從廣告點進來的酒店頁看不到價格。同時設定每週自動產出追蹤報告，之後改版就能比較前後的差異。',
      'The team could see top-line traffic and conversion, but not where guests got stuck. By comparing session recordings with site analytics, I pinned down the two points where guests stalled most often: they had to log in before they could continue booking, and hotel pages reached from ads showed no price. I also set up an automated weekly report, so every fix can be measured before and after.',
    ),
    chips: ['UX Research', 'Mixpanel', 'Clarity', 'GTM'],
    meta: [
      [b('我的角色', 'My role'), b('發起並主導', 'Initiated and led')],
      [b('產品', 'Product'), b('WOTA 官網', 'WOTA website')],
      [b('期間', 'Period'), b('2026.10 — 現在', '2026.10 — present')],
      [b('狀態', 'Status'), b('改版清單已交給產品團隊', 'Backlog handed to the product team')],
    ],
    kpis: [
      ['9% / 50%', b('未登入 vs 已登入走到訂單表單', 'of logged-out vs logged-in users reach the booking form'), b('點「選擇價格」後，訪客只有 9% 走到訂單表單，會員是 50%；走到表單後兩者完成率差不多（50% 對 46%），落差出在登入這一步。', 'After "Select rate," 9% of logged-out visitors and 50% of members reached the form. Once there, both converted at similar rates (50% vs 46%), so the gap is the login step.')],
      ['44%', b('成功登入的人回到表單', 'of successful logins returned to the form'), b('成功登入的人當中，只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'Of those who logged in successfully, only 44% returned to their form, and signing up does not log people in automatically.')],
      ['41', b('項附證據的發現與建議', 'evidence-backed findings and recommendations'), b('每項都附證據強度、建議解法與優先等級；另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each comes with an evidence rating, a proposed fix, and a priority; 16 ruled-out claims are logged too, so the team doesn\'t revisit them.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-hotel-no-dates.webp',
      alt: b('從外部連結進入的酒店頁：沒有日期，只顯示「缺少必要參數，請填寫入住條件」', 'Hotel page opened from an external link: no dates, only "Missing required parameters. Please enter your stay details."'),
      caption: b('WOTA 官網正式站實際畫面 · 從廣告或 Google 進入、沒帶日期時看到的酒店頁', 'Live WOTA site · what a hotel page shows when opened from an ad or Google without dates'),
    },
    card: { kind: 'diagram', diagram: 'funnel', label: b('示意圖 · 依分析數據重繪', 'Diagram · redrawn from the analysis') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('只看得到數字，不知道原因', 'Numbers without reasons'),
        blocks: [
          { t: 'p', text: b('這個網站就是由我主導產品規劃與介面的官網 3.0。當初上線時沒有先定義要看的指標和事件，所以 2026 年我回頭補上量測，用數據和錄影檢查自己交付的產品。', 'This is website v3.0, the redesign where I led product planning and UI. We hadn\'t defined metrics or events before launch, so in 2026 I went back, added the tracking, and used data and recordings to check the product I had shipped.') },
          { t: 'flow', items: [b('AI 初步判斷：登入有一半失敗', 'AI\'s first read: half of logins fail'), b('看錄影複查：送出帳密的人 85～90% 成功', 'Recordings: 85–90% of submitted logins succeed'), b('真正卡點：被要求登入的那一刻，以及登入後回不到表單', 'Real bottleneck: the login prompt, and not returning to the form'), b('交付：41 項排好順序的改版建議', 'Delivered: 41 prioritized recommendations')] },
          { t: 'p', text: b('團隊在 Mixpanel（網站數據分析工具）看得到流量下滑、轉換偏低，但不知道原因、也不知道客人卡在哪一步。更麻煩的是，原始數據混了約 26% 的機器流量，部分事件定義也有錯，直接引用會得出錯誤結論。這個案例裡的數字，都已排除機器流量、修正事件定義。', 'The team could see traffic dropping and low conversion in Mixpanel, but not why or where guests got stuck. Worse, about 26% of raw traffic was bots and some events were misdefined, so taking the numbers at face value would lead to the wrong conclusions. Every figure in this case study excludes bot traffic and uses the corrected event definitions.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('交給產品團隊一份附證據、可以直接排進開發時程的改版清單，也讓每次改版上線後，都能量到它有沒有帶來改善。', 'Give the product team an evidence-backed fix list they can schedule right away, and a way to measure whether each fix helps once it ships.') },
          { t: 'h3', text: b('先釐清背景', 'Setting the baseline') },
          { t: 'p', text: b('台灣 4 到 9 月的流量下滑，主要來自付費廣告縮減，不是網站變差。另外，網站的造訪有 72% 來自手機。', 'The site\'s April–September traffic drop in Taiwan came mainly from cutting back on paid ads, not from the site getting worse. Also, 72% of visits came from mobile.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('分析方法怎麼定', 'Choosing the analysis method'),
        blocks: [
          { t: 'decision', q: b('要相信數據，還是看使用者實際怎麼操作？', 'Trust the numbers or watch real behavior?'), a: b('以錄影為核心，數據只是背景', 'Recordings first, numbers as context'), text: b('我用 Mixpanel 數據、Clarity 的使用者操作錄影，以及 GTM（設定網站要記錄哪些行為的工具）裡的事件定義三方交叉驗證，任何結論都要在錄影裡看得到對應的行為。錄影工具會自動遮蔽客人輸入的內容，分析只看操作行為。', 'Every conclusion had to match behavior visible in Clarity recordings, cross-checked against Mixpanel and the event definitions in GTM (the tool that sets what the site tracks). The recording tool automatically masks what guests type, so the analysis covers behavior only.') },
          { t: 'decision', q: b('結論怎麼確定不是看錯？', 'How do we know a conclusion is right?'), a: b('換角度重新抽樣檢查 7 輪', 'Seven rounds of re-sampling and cross-checking'), text: b('我複查的 16 項主要結論中，4 項被推翻、6 項被修正。例如「登入有一半失敗」被推翻：實際送出帳密後有 85 到 90% 成功，問題在別處。', 'Of the 16 main conclusions I re-checked, 4 were overturned and 6 revised. "Half of logins fail" was wrong: 85–90% succeed once credentials are submitted. The problem was elsewhere.') },
          { t: 'decision', q: b('問題這麼多，先修哪個？', 'Many issues. Which first?'), a: b('依證據強度與影響排優先', 'Rank by evidence strength and impact'), text: b('41 項發現每項都附證據強度、建議解法與優先等級，另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each of the 41 findings has an evidence rating, proposed fix, and priority. Another 16 ruled-out claims are recorded so the team doesn\'t revisit them.') },
        ],
      },
      {
        id: 'measure', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('先修正量測', 'Measurement'),
        title: b('404 錯誤暴增，先檢查數字怎麼算', '404s spiked, so I checked how they were counted first'),
        blocks: [
          { t: 'p', text: b('週報偵測到 10 月 13 日起找不到頁面的錯誤暴增（35 → 131）。我先檢查數字怎麼算出來的，發現兩個量測問題：', 'The weekly report flagged a jump in page-not-found errors from October 13 (35 → 131). I first checked how the number was produced and found two measurement problems:') },
          { t: 'list', ordered: true, items: [b('網址裡的編號剛好含有「404」，被誤算成錯誤頁。', 'Page IDs that happened to contain "404" were counted as errors.'), b('「造訪」和「瀏覽」混在一起算，讓數字被放大。', 'Visits and page views were mixed together, inflating the count.')] },
          { t: 'p', text: b('篩選規則與計數方式更正後，在原報告留下修正註記，再交叉比對錄影、事件、工程資料庫與實際操作，查明真正的原因是兩篇文章下架與舊連結，不是程式出錯，並向主管匯報處置建議。後面所有結論都改用修正後的數字。', 'I corrected the filter and counting rules and left a correction note in the original report. Cross-checking recordings, events, the engineering database, and hands-on tests showed the real cause: two removed articles and old links, not a code bug. I reported the recommended fix to my manager. All later conclusions use the corrected numbers.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('兩個轉換瓶頸', 'Two conversion bottlenecks'),
        blocks: [
          { t: 'h3', text: b('登入牆', 'The login wall') },
          { t: 'p', text: b('點「選擇價格」之後的數據：', 'What happened after "Select rate":') },
          { t: 'list', items: [b('未登入的訪客只有 9% 走到訂單表單，已登入的會員是 50%。', 'Only 9% of logged-out visitors reached the booking form, versus 50% of logged-in members.'), b('訪客一旦走到表單，完成率和會員差不多（50% 對 46%），所以落差出在中間的登入這一步。', 'Once visitors reached the form, they completed it at about the same rate as members (50% vs 46%), so the gap is the login step in between.'), b('成功登入的人當中，只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'Of those who logged in successfully, only 44% returned to their form, and signing up does not log people in automatically.'), b('會員本來就可能比較想訂房，所以 9% 和 50% 的差距不全是登入造成；但錄影裡也看得到訪客在被要求登入時離開。', 'Members may simply be more ready to book, so not all of the 9% vs 50% gap comes from the login step. But the recordings also show visitors leaving at the moment they are asked to log in.'), b('這組比例用的是當時記錄到的事件；官網手機寬度的「選擇價格」當時沒有記錄，所以主要反映桌機。手機的錄影和登入數據也看得到同樣的流失。', 'These rates come from the events recorded at the time. Mobile-width "Select rate" clicks weren\'t being tracked then, so the rates mainly reflect desktop; mobile recordings and login data show the same drop-off.')] },
          { t: 'p', text: b('要先登入才能繼續訂房，是當時為了會員經營訂下的業務規則。數據讓這條規則的代價第一次被看見，我用這些證據推動調整。', 'Requiring login before booking was a business rule, set at the time for membership goals. The data made its cost visible for the first time, and I used that evidence to push for a change.') },
          { t: 'diagram', kind: 'funnel', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('看不到價格的落地頁', 'Landing pages with no prices') },
          { t: 'p', text: b('從廣告與 Google 進來的酒店頁沒有帶日期，看不到價格。', 'Hotel pages reached from ads and Google carried no dates, so they showed no prices.') },
          { t: 'list', items: [b('90 天內，落在這類頁面的使用者中，約 64% 帶有廣告來源標記，代表付費帶進來的客人一進站就看不到價格。', 'In 90 days, about 64% of users who landed on these pages arrived via links with ad tracking tags, so visitors we paid to bring in landed on a page with no price.'), b('四週觀察的抽樣中，活動落地頁的 48 段錄影，沒有一段進到訂單表單。這是抽樣觀察，用來佐證問題，不代表所有廣告客人都無法訂房。', 'In a four-week sample, none of the 48 recorded campaign landing sessions reached the booking form. This is a sample that supports the finding; it doesn\'t mean no ad visitor ever booked.')] },
          { t: 'figure', src: ['img/real/official-hotel-no-dates.webp'], alt: b('沒有日期的酒店頁，只顯示缺少必要參數', 'Hotel page without dates showing a missing-parameters message'), caption: b('WOTA 官網正式站實際畫面 · 2026-11-16 擷取', 'Live WOTA site · captured 2026-11-16') },
          { t: 'h3', text: b('不是問題的地方', 'What turned out fine') },
          { t: 'p', text: b('訂單表單沒送出的多是看完總價後離開的比價行為，不是表單出錯；送出後成功率約 98%。', 'Most booking forms were abandoned by people comparing prices after seeing the total, not because of form errors; about 98% of submitted forms go through.') },
        ],
      },
      {
        id: 'solution', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('設計方案', 'Solution'),
        title: b('登入之後，直接回到原本的訂單', 'After login, straight back to the booking'),
        blocks: [
          { t: 'p', text: b('41 項建議裡最優先的是「登入後接續訂單」：客人點「選擇價格」被要求登入，登入成功後直接帶回原本的訂單表單，不必重新找酒店、選日期和房型。', 'The top item among the 41 recommendations is resuming the booking after login: when guests are asked to log in after "Select rate," logging in takes them straight back to their booking form, so they don\'t have to find the hotel and pick dates and a room again.') },
          { t: 'diagram', kind: 'resume', caption: b('示意圖 · 依分析數據與改版規格重繪', 'Diagram · redrawn from the analysis and the fix spec') },
          { t: 'p', text: b('做法是在登入流程中帶上返回的位置，不需要新增畫面，所以這裡的設計工作是定義跳轉行為：從哪一步進入登入、登入後回到哪裡。這一項已排入開發，上線後用每週追蹤比較登入後回到表單的比例。', 'The fix passes the return location through the login flow and needs no new screens, so the design work here is defining the redirect behavior: which step sends guests to login, and where they land afterward. It\'s scheduled for development, and once it ships the weekly tracking will compare how many people return to the form after logging in.') },
        ],
      },
      {
        id: 'loop', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('載入逾時', 'Timeouts'),
        title: b('網路一慢，頁面就說「查無酒店」', 'On a slow network, the page says "no hotel found"'),
        blocks: [
          { t: 'p', text: b('看錄影時還發現另一個發生在看價格階段的阻礙：酒店頁載入逾時的時候，畫面直接顯示「查無酒店」，客人以為酒店不存在；按上一頁又會被帶回同一頁，繞成迴圈。', 'Recordings revealed another blocker at the price-checking stage: when a hotel page timed out, it showed "no hotel found," so guests assumed the hotel didn\'t exist, and pressing Back just reloaded the same page, in a loop.') },
          { t: 'diagram', kind: 'loop', caption: b('示意圖 · 依診斷紀錄重繪', 'Diagram · redrawn from the diagnosis notes') },
          { t: 'p', text: b('和工程一起查程式，並在 Chrome 與 Safari 實際重現後，提出三個解法：', 'Working with engineering, I traced the code, reproduced the issue in Chrome and Safari, and proposed three fixes:') },
          { t: 'list', ordered: true, items: [b('載入失敗時讓客人可以重試', 'Let guests retry when loading fails'), b('換頁方式改成不會留下返回迴圈', 'Change navigation to prevent the back-button loop'), b('舊酒店編號自動轉成新編號', 'Redirect old hotel IDs to new ones')] },
          { t: 'p', text: b('原因已經找到，三個解法都排入了待辦清單。', 'We found the cause, and all three fixes are in the backlog.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('量測與自動化', 'Tracking'),
        title: b('修正追蹤設定，並每週自動產出週報', 'Fixing the tracking and automating a weekly report'),
        blocks: [
          { t: 'p', text: b('我先找出追蹤設定本身的問題：手機版「選擇價格」與「立即預訂」不會觸發事件，原因是追蹤程式只認得桌機版的按鈕；站內換頁也不會記錄頁面瀏覽。', 'First I found bugs in the tracking itself. On mobile, the "Select rate" and "Book now" events never fired because the tracking code only recognized desktop buttons, and in-site page changes didn\'t record page views.') },
          { t: 'table', rows: [
            [b('擷取', 'Collect'), b('擷取 Mixpanel 數據與錄影、整理統計', 'Pull Mixpanel data and recordings, run counts'), b('發起分析、定義要回答的問題', 'Initiate the analysis and define the questions')],
            [b('分析', 'Analyze'), b('產出結論與文件初稿', 'Draft findings and documents'), b('看錄影驗證，推翻或修正結論', 'Verify against recordings, overturn or revise')],
            [b('追蹤', 'Track'), b('每週一自動產出週報', 'Generate the weekly report every Monday'), b('判讀趨勢、決定要提給產品的項目', 'Read trends and choose what to bring to the product team')],
          ] },
          { t: 'stats', items: [['300', b('段已分類標註的錄影', 'tagged session recordings')], ['85', b('週 Mixpanel 數據', 'weeks of Mixpanel data')], ['5', b('期自動產出的週報', 'weekly reports generated automatically')], ['2', b('個每週一自動執行的排程', 'jobs running every Monday')]] },
          { t: 'compare', ai: b('數據初步顯示：登入流程大約有一半失敗，看起來是登入功能有問題。', 'The first read of the data: about half of logins fail, so login looked broken.'), me: b('我要求換角度、用更多樣本重新驗證。看錄影後發現，真正送出帳密的人有 85 到 90% 登入成功；流失發生在「被要求登入」那一刻，以及登入後沒有回到原本的表單。問題從「修登入」變成「重新設計登入牆」。', 'I asked for a fresh angle and more samples. Recordings showed 85–90% of people who actually submitted credentials succeeded; the drop-off happened when they were asked to log in, and when they weren\'t returned to their form. The fix changed from "repair login" to "redesign the login wall."'), source: b('2026 年 10 月 · 複查行為分析結論時', 'Oct 2026 · while re-checking the behavior findings') },
        ],
      },
      {
        id: 'after', caps: ['pm'], tags: ['PM'], toc: b('改版後追蹤', 'After release'),
        title: b('改版上線後怎麼看成效', 'Measuring impact after each release'),
        blocks: [
          { t: 'p', text: b('流量變動不一定是改版造成的，也可能是內容調整、廣告投放或季節。為了之後能客觀回報成效，我先準備了這些：', 'Traffic changes may come from content edits, ad spend, or seasonality rather than a fix. To report results objectively later, I prepared:') },
          { t: 'list', ordered: true, items: [b('改版上線紀錄', 'A release log'), b('每項改版預期會改變的行為', 'The behavior each fix is expected to change'), b('上線後兩週、四週的前後比較', 'Before-and-after comparisons at two and four weeks')] },
          { t: 'p', text: b('改版上線後，就拿實際的變化和預期行為對照。', 'After a release, the actual changes are checked against those expectations.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('交付了一份可以排期的待辦，以及每週追蹤', 'A ready-to-schedule backlog and weekly tracking'),
        blocks: [
          { t: 'stats', items: [['41', b('項附證據的改版建議，已排好優先順序', 'evidence-backed recommendations, already prioritized')], ['2', b('項最優先：登入後接續訂單、落地頁顯示日期與價格', 'top priorities: resume booking after login, and show dates and prices on landing pages')], ['~14%', b('只修第一項，每月訂房最多可能增加的幅度（估算）', 'possible monthly booking increase from the first fix alone (estimate)')]] },
          { t: 'p', text: b('我交付了兩樣東西：一份附證據、可以直接排期的改版清單，以及每週自動產出的追蹤報告。最優先的兩項影響最大、證據也最充分。14% 依改版清單估算：登入後接續訂單每月最多多出的訂房，約為月訂房量的 14%，上線後以每週追蹤驗證。', 'I delivered two things: an evidence-backed fix list that\'s ready to schedule, and an automated weekly tracking report. The top two fixes have the biggest impact and the strongest evidence. The 14% comes from the backlog estimate: the most extra bookings that resuming after login could add each month, as a share of current monthly bookings. Once the fixes ship, the weekly tracking will test it.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會在分析進行中，就先挑一項改版推上線，用每週追蹤量到成效，再用結果爭取後續改版。', 'Next time I\'d ship one change while the analysis is still running, measure it with the weekly tracking, and use that result to build support for the next fixes.') },
        ],
      },
    ],
  },
  {
    slug: 'research',
    glance: { problem: b('自我成長社群的成員越來越少，業主不知道原因，也從沒做過使用者研究。', 'A personal growth community was losing members, and the client didn\'t know why and had never done user research.'), decision: b('三組分別研究活躍、流失與潛在用戶；我負責活躍用戶組的主訪。', 'Three teams each studied one group: active, lapsed, and prospective members. I led the interviews for the active-member team.'), result: b('18 場訪談，整理成三類建議向業主簡報。', '18 interviews, synthesized into three areas of recommendations presented to the client.') },
    no: '05',
    period: '2022.10 — 2023.02',
    eyebrow: 'Case 05 · UX Research',
    title: b('研究「析心事務所」社群用戶減少，\n為什麼有人留下、有人離開', 'Researching a shrinking personal growth community:\nwhy some stay and others leave'),
    cardTitle: b('研究「析心事務所」社群用戶減少，為什麼有人留下、有人離開', 'Researching a shrinking community: why some stay and others leave'),
    lead: b(
      '一個自我成長社群的成員越來越少，課程也賣不動，業主從沒做過使用者研究。我和 UX 工作坊的 11 位成員分成三組，訪談 18 位活躍、流失與潛在用戶，找出有人留下、有人離開的原因；我在活躍用戶組擔任主訪。最後我們根據這些發現，向業主提出具體做法，例如讓資深成員帶新成員，以及把 Discord 頻道分層開放，幫助新成員更快融入社群。',
      "A personal growth community was losing members, its courses weren't selling, and the client had never done user research. Eleven other UX workshop members and I split into three teams and interviewed 18 active, lapsed, and prospective members to learn why people stayed or left. I led the interviews for the active-member team. From there, we gave the client concrete next steps, such as having experienced members mentor newcomers and opening Discord channels in stages, so new members could settle in faster.",
    ),
    chips: ['UX Research', 'Interviews', 'Survey', 'Affinity mapping'],
    meta: [
      [b('我的角色', 'My role'), b('第一組研究員（活躍用戶）· 主訪 · 問卷與訪綱設計 · 參與整合簡報', 'Researcher, active-member team · lead interviewer · screener and interview guide design · contributed to the final readout')],
      [b('業主', 'Client'), b('原子實踐 × 析心事務所', 'A Taiwanese personal growth community')],
      [b('期間', 'Period'), b('2022.10 — 2023.02 · UX 工作坊業主委託專案', '2022.10 — 2023.02 · client project in a UX workshop')],
      [b('狀態', 'Status'), b('2022 年 12 月向業主簡報', 'Presented to the client in Dec 2022')],
    ],
    kpis: [
      ['3', b('群用戶分開研究', 'user groups studied separately'), b('活躍、流失或觀望、從沒接觸過的潛在用戶，各由一組 4 人負責。', 'Active, lapsed or undecided, and never-joined prospective members, each covered by its own team of four.')],
      ['18', b('位受訪者', 'interviews'), b('三組各 6 位，每場約 1.5 小時線上訪談，2022 年 11 月 7 到 13 日完成。', 'Six per team, each a roughly 90-minute online interview, completed November 7–13, 2022.')],
      ['43', b('份招募問卷回覆', 'recruiting survey responses'), b('用來篩選三群受訪者，也用來對照業主原本的客群假設。', "Used to recruit the three groups and to check the client's original assumptions about its audience.")],
    ],
    hero: { kind: 'diagram', diagram: 'groups', caption: b('示意圖 · 依研究紀錄重繪', 'Diagram · redrawn from the research notes') },
    card: { kind: 'diagram', diagram: 'groups', label: b('示意圖 · 依研究紀錄重繪', 'Diagram · redrawn from the research notes') },
    webOnly: true,
    side: b('補足質化研究：設計訪綱、擔任主訪、整合三組發現', 'Adds qualitative research: interview design, leading interviews, and synthesis'),
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('業主只知道社群成員正在流失，但卻不知道是什麼原因', 'The client knew community members were leaving, but not why'),
        blocks: [
          { t: 'p', text: b('社群初期迴響很好，後來參與人數下滑；新講師上任後課程也賣得不理想。團隊之前沒做過任何使用者研究，判斷都來自經營者自己的觀察。業主原本鎖定「習慣用理性邏輯處理人生問題」的人，認為服務感性族群的成本太高。', "The community started strong, then participation dropped, and courses sold poorly after a new instructor joined. The team had never done user research; decisions came from the organizers' own observations. The client had targeted \"people who handle life problems with logic,\" believing emotionally driven members would cost too much to serve.") },
          { t: 'callout', title: b('目標', 'Goal'), text: b('找出原本參與的人為什麼漸漸離開、另一部分的人為什麼留下，並確認業主原本設定的目標客群對不對。', "Find out why some members drifted away while others stayed, and check whether the client had chosen the right target audience.") },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我在負責「活躍用戶」的第一組，參與的工作包括：', 'I was on the active-member team, and my work included:') },
          { t: 'list', items: [b('分析業主原本的想法和假設', 'Analyzing the client\'s original ideas and assumptions'), b('設計招募問卷與訪綱', 'Designing the screener and interview guide'), b('擔任主訪，並用 ORID（依序記下事實、感受、詮釋與決定的整理方法）整理訪談紀錄', 'Leading interviews and organizing the notes with ORID (recording facts, feelings, interpretations, and decisions in that order)'), b('參與把三組的發現整合起來，並向業主簡報', 'Helping merge the three teams\' findings and present them to the client')] },
        ],
      },
      {
        id: 'method', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('研究設計', 'Method'),
        title: b('三群用戶由三組分開研究', 'Three user groups, three research teams'),
        blocks: [
          { t: 'flow', items: [
            b('需求訪談與商業假設拆解（10 月中）', 'Client interview + assumptions (mid-Oct)'),
            b('社群觀察：LINE、Facebook、Discord（10 月）', 'Observing LINE, Facebook, Discord (Oct)'),
            b('招募問卷篩選三群受訪者', 'Recruiting survey, 3 groups'),
            b('18 場訪談，ORID 紀錄（11 月）', '18 interviews, ORID notes (Nov)'),
            b('三組整合，向業主簡報（12 月）', 'Synthesis + client presentation (Dec)'),
          ] },
          { t: 'p', text: b('三群各由一組負責，因為同一個問題在三群人身上的答案不同：留下的人說得出「為什麼留」，流失的人說得出「為什麼走」，沒接觸過的人才看得到「為什麼一開始沒進來」。', "Each group had its own team because the same question gets different answers: people who stayed can say why they stayed, people who left can say why they left, and people who never joined show why they didn't join in the first place.") },
        ],
      },
      {
        id: 'goals', caps: ['pm'], tags: ['PM'], toc: b('研究目標', 'Goals'),
        title: b('研究目標改了三次', 'The research goals, rewritten three times'),
        blocks: [
          { t: 'p', text: b('第一版研究目標是照著業主的假設寫的。小組討論時我們發現，這樣的目標是在找證據支持業主，訪談還沒開始就預設了答案，所以前後修改了三次。', "Our first research goals were written around the client's assumptions. In team discussions we realized those goals were set up to find evidence for the client's view and had assumed the answer before any interview, so we revised them three times.") },
          { t: 'compare', title: b('過程證據：把研究目標從「驗證」改成「探索」', 'Evidence: turning "prove it" goals into "explore it" goals'), aiLabel: b('第一版目標', 'First draft'), meLabel: b('第三次修改後', 'Third revision'),
            ai: b('確認「越多的互動」是否真的可以提升「購課率」。', 'Confirm whether more interaction actually increases course purchases.'),
            me: b('研究「社群互動」與用戶活躍程度之間的關聯。我們發現第一版是在找證據支持業主的假設；改成探索關聯，才不會在訪談前就預設答案。', "Study how community interaction relates to members' activity levels. We realized the first draft was hunting for evidence to support the client's assumption; reframing it as exploring a relationship stopped us from deciding the answer before the interviews."),
            source: b('2022 年 10 月 27 日 · 第三次修改研究目標時', '27 Oct 2022 · third revision of the research goals') },
        ],
      },
      {
        id: 'fieldwork', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('招募與訪談', 'Fieldwork'),
        title: b('招募受訪者與訪談紀錄方式', 'Recruiting participants and recording interviews'),
        blocks: [
          { t: 'p', text: b('招募問卷收到 43 份回覆，用來篩選三群受訪者，也拿來對照業主原本的客群假設。訪談在 2022 年 11 月 7 到 13 日完成，三組各訪 6 位，每場約 1.5 小時，全部線上進行。', "The screener received 43 responses, which we used to recruit the three groups and check the client's audience assumptions. Interviews ran November 7–13, 2022: six per team, about 90 minutes each, all online.") },
          { t: 'p', text: b('我在活躍用戶組擔任主訪。三組用同一種方法整理每場紀錄：先記客觀發生的事，再記受訪者的感受、詮釋與決定（ORID）。因為記錄方式一致，12 月才能把三組的發現放在一起比對（親合圖、同理心地圖）。', 'I led interviews for the active-member team. All three teams wrote up every session the same way: first what objectively happened, then the participant\'s feelings, interpretations, and decisions (ORID). Because the notes matched in format, in December we could compare the three teams\' findings side by side (affinity and empathy maps).') },
        ],
      },
      {
        id: 'findings', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('三群人各自的發現', 'What each group told us'),
        blocks: [
          { t: 'callout', title: b('質化發現', 'Qualitative findings'), text: b('以下來自 18 場訪談與社群觀察，是方向性的發現，不是比例或因果。', 'These come from 18 interviews and community observation. They are directional findings, not proportions or cause and effect.') },
          { t: 'h3', text: b('留下的人：三人小組是最被肯定的活動', 'Why people stay: the three-person practice group, the most valued activity') },
          { t: 'p', text: b('三人一組輪流擔任引導者、被引導者與旁觀者練習對話。每種個性的人都能在裡面找到自己的位置；人少，每個人都會被回應，陪伴感最強。', 'Groups of three rotate as guide, speaker, and observer to practice conversations. Every personality finds a place, and in a group that small everyone gets a response, so it\'s where members felt most supported.') },
          { t: 'diagram', kind: 'triad', caption: b('示意圖 · 依研究簡報重繪', 'Diagram · redrawn from the research deck') },
          { t: 'p', text: b('但社群從 LINE 搬到 Discord 後，三人小組從固定成員改成隨機配對，累積起來的熟悉感和連結跟著變弱。', 'After the community moved from LINE to Discord, practice groups switched from fixed members to random matching, and the familiarity people had built up weakened.') },
          { t: 'h3', text: b('離開的人：卡在新手期', 'Why people leave: stuck as newcomers') },
          { t: 'table', head: [b('原因', 'Reason'), b('受訪者的狀況', 'What we heard'), b('對應建議', 'Recommendation')], rows: [
            [b('找不到自己的角色', "Can't find a role"), b('不知道讀書會要做什麼，旁聽也有壓力', 'Unsure what to do in reading groups; even listening feels like pressure'), b('活動前先說明角色與要做的事', 'Explain roles and tasks before each session')],
            [b('頻道太多太難懂', 'Too many unclear channels'), b('二、三十個頻道，名稱遊戲化，看不出用途', 'Twenty to thirty channels with playful names that hide their purpose'), b('先選興趣，再開啟相關頻道', 'Pick interests first, then unlock related channels')],
            [b('回饋不夠深', 'Shallow feedback'), b('目的性強的人覺得得不到有深度的知識回饋', 'Goal-driven members found too little depth'), b('活動後整理知識重點', 'Summarize key takeaways after sessions')],
            [b('沒有被回應', 'No one responds'), b('發言沒人接，感受不到陪伴', 'Posts go unanswered, so they don\'t feel supported'), b('安排熱心成員主動關心新人', 'Assign welcoming members to check on newcomers')],
          ], note: b('依流失組研究整理', "From the lapsed-member team's findings") },
          { t: 'h3', text: b('沒進來的人：先信任，才會加入', 'Why people never join: trust comes first') },
          { t: 'p', text: b('潛在用戶是透過信任的朋友、網紅（KOL）或平台認識新社群；他們用自己的問題去搜尋（例如「想改善親子關係」），不會用「原子習慣」（一本暢銷書提出的習慣養成方法）這類專有名詞。所以對外溝通時，要用他們會搜尋的問題來描述，例如親子關係，少用方法的名稱。', 'Prospective members find communities through trusted friends, creators, or platforms, and they search in terms of their own problems (like "improve my relationship with my kids"), not terms like "Atomic Habits." So messaging should describe the problems they search for, such as family relationships, and rely less on the method\'s name.') },
        ],
      },
      {
        id: 'recommendations', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('建議', 'Recommendations'),
        title: b('把三人小組的力量放大到整個社群', 'Scale what works in the three-person groups'),
        blocks: [
          { t: 'decision', q: b('講師顧不到每個人，怎麼讓新人不掉隊？', "The instructor can't reach everyone. How do newcomers keep up?"), a: b('培養學長姊帶學弟妹', 'Train experienced members to guide newcomers'), text: b('先由講師帶三人小組，把練習得好的學員培養成引導者，再由引導者帶新進成員，講師逐步退到旁邊觀察。', 'The instructor leads early groups, trains the most skilled members as guides, and guides then lead newcomers while the instructor steps back to observe.') },
          { t: 'diagram', kind: 'mentor', caption: b('示意圖 · 依研究建議重繪', 'Diagram · redrawn from the recommendations') },
          { t: 'decision', q: b('新人看不懂 Discord 怎麼辦？', "Newcomers can't navigate Discord. What then?"), a: b('頻道分層開啟', 'Unlock channels in layers'), text: b('第一層只給大分類，選了感興趣的主題（例如讀書會）才開啟相關子頻道。', 'Show only top categories first; related sub-channels open once someone picks a topic, such as reading groups.') },
          { t: 'decision', q: b('兩種新手要的不一樣？', 'Do two kinds of newcomers want different things?'), a: b('分開設計支持方式', 'Support them differently'), text: b('目的性強的人給清楚的指引和重點整理；想慢慢探索的人給陪伴和固定小組。', 'Goal-driven newcomers get clear guides and summaries; explorers get companionship and a fixed small group.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('第一次做研究學到的三件事', 'Three lessons from my first research project'),
        blocks: [
          { t: 'stats', items: [['18', b('位受訪者，三組各 6 位', 'interviews, 6 per team')], ['3', b('類建議交給業主：新成員融入、社群內容、日常經營', 'areas of recommendations for the client: onboarding, content, and day-to-day running')], ['3', b('件下次會做得不同的事', 'things I\'d do differently next time')]] },
          { t: 'p', text: b('2022 年 12 月，我們向業主簡報研究結果。三組的發現整理成三類建議：怎麼幫新成員融入社群、社群裡要提供哪些內容，以及平常怎麼經營社群。這是我第一次完整走過使用者研究，現在回頭看，有三件事會做得不一樣。', "We presented our research to the client in December 2022. We synthesized the three teams' findings into three areas of recommendations: how to help newcomers settle into the community, what content the community should offer, and how to run it day to day. It was my first full research project, and looking back there are three things I'd do differently.") },
          { t: 'h3', text: b('1. 用實際行為分群，不用「聽過什麼」分群', '1. Segment by behavior, not by what people have heard of') },
          { t: 'p', text: b('招募問卷用「有沒有聽過原子習慣」分流，結果把一些參加過社群、但沒聽過這個詞的人篩掉了。下次我會用最後一次參加活動的時間、互動頻率、有沒有付費來分群。', "Our screener routed people by whether they'd heard of \"Atomic Habits,\" which filtered out some who had joined the community but didn't know the term. Next time I'd segment by last activity, interaction frequency, and whether they've paid.") },
          { t: 'figure', src: ['img/case5/survey-routing-draft.webp'], alt: b('招募問卷分流草稿', 'Draft screener routing'), caption: b('當時的問卷分流草稿 · 以「是否聽過原子習慣」作為分流條件', 'Our original screener routing draft, branching on "heard of Atomic Habits"') },
          { t: 'h3', text: b('2. 每個結論都標出樣本與證據強度', '2. Label every conclusion with sample size and evidence strength') },
          { t: 'p', text: b('2026 年用 AI 協助重新檢視這份研究時，回頭重看當年的問卷資料。認為「做決定時邏輯比心情重要」的比例如下：', 'Revisiting the study with AI in 2026, I reread our survey data. The share who said logic matters more than feelings in big decisions:') },
          { t: 'list', items: [b('聽過原子習慣但沒實踐的人：70%（14/20）', 'People who\'d heard of Atomic Habits but didn\'t practice it: 70% (14/20)'), b('真正在實踐的人：25%（3/12）', 'Active practitioners: 25% (3/12)')] },
          { t: 'p', text: b('這比我們當年引用的圖更能檢驗業主的客群假設，但它量的是「有沒有實踐原子習慣」，不是「有沒有留在社群」，樣本也小。下次每個結論都會寫出樣本數和證據強度。', 'That tests the client\'s audience assumption better than the chart we used, but it measures practicing the method, not staying in the community, and the sample sizes are small. Next time every conclusion gets a sample size and an evidence rating.') },
          { t: 'diagram', kind: 'bars', caption: b('示意圖 · 2026 年回頭重看問卷資料重繪，非當年研究結論', 'Diagram · redrawn in 2026 from the survey data, not a 2022 finding') },
          { t: 'h3', text: b('3. 建立信任，但不引導答案', '3. Build rapport without leading') },
          { t: 'p', text: b('同事回饋我在訪談中能很快讓受訪者放鬆（評語在「關於我」頁），但這次也學到寒暄和引導的界線：開場稱讚受訪者、分享自己的看法，都可能讓對方順著訪談者的方向回答。下次會從「最近一次發生的具體事件」問起。', "Workshop teammates have said I put participants at ease quickly (see the About page), but I learned where small talk ends and leading begins: praising a participant or sharing my own view at the start can steer their answers. Next time I'd start by asking about the most recent specific event.") },
        ],
      },
    ],
  },
  {
    slug: 'memory',
    glance: { problem: b('會議一多，事後很難找回誰說了什麼、決定了什麼。', 'With many meetings, it\'s hard to find who said what, or what was decided.'), decision: b('用三個本機模型一起辨識，再限制 AI 只能從三個版本和字典裡挑，不能改寫。', 'Three on-device models transcribe together, and AI may only choose from their versions and a glossary, never rewrite.'), result: b('個人 macOS App 已安裝使用；錄音重播測試中，95% 的字幕在 3.2 秒內出現。', 'A personal macOS app, installed and in use. In replay tests, 95% of captions appear within 3.2 seconds.') },
    no: '06',
    period: '2026.11 — NOW',
    eyebrow: 'Case 06 · Product Design · AI Tool',
    title: b('工作記憶助理：\n會議中記得準，會議後查得到', 'Work Memory Agent:\naccurate during meetings, searchable afterward'),
    cardTitle: b('工作記憶助理：記錄會議、提示任務、整理成可備查的摘要', 'Work Memory Agent: record meetings, surface tasks, keep searchable summaries'),
    lead: b(
      '會議一多，事後很難找回誰說了什麼、決定了什麼。我用 AI 開發了一個會議助理：三個本機模型一起辨識中英夾雜的會議，提到相關專案時跳出任務提示，會議後整理成附原句的摘要與待辦；介面也重新設計過，讓不懂技術的同事也看得懂。',
      'With many meetings a week, it\'s hard to find who said what, or what was actually decided. So I built a meeting assistant with AI: three on-device models transcribe meetings with mixed Chinese and English, related tasks pop up when a project is mentioned, and each meeting turns into a summary and to-do list backed by source quotes. I also redesigned the interface so colleagues without a technical background can understand it.',
    ),
    chips: ['Product Design', 'AI Tool', 'Speech-to-text', 'Design System'],
    meta: [
      [b('我的角色', 'My role'), b('需求定義、架構構想、介面與視覺決策、驗收；程式由 AI 實作', 'Defined needs, proposed the architecture, made the UI and visual decisions, and signed off on the work; AI wrote the code')],
      [b('產品', 'Product'), b('個人用 macOS 桌面 App', 'Personal macOS desktop app')],
      [b('期間', 'Period'), b('2026.11 — 現在', '2026.11 — present')],
      [b('狀態', 'Status'), b('個人 macOS App，已安裝使用 · 數據來自錄音重播測試', 'Personal macOS app, installed and in use · figures from recorded-meeting replays')],
    ],
    kpis: [
      ['3', b('個本機模型一起辨識', 'on-device models transcribing together'), b('Whisper large-v3-turbo、Breeze-ASR-25、TEA-ASR-1.1 都在電腦本機執行。三個模型錯的地方各不相同，AI 只能從三個版本和公司字典裡挑，不能自己改寫。', 'Whisper large-v3-turbo, Breeze-ASR-25, and TEA-ASR-1.1 all run on the computer. They make different mistakes, and AI may only select from the three versions and the company glossary; it can\'t rewrite the text.')],
      ['3.2 秒', b('內出現 95% 的即時字幕（錄音重播測試）', 'for 95% of live captions to appear (replay test)'), b('同一場 9 分鐘會議重播量測：修正前 6.7 秒、最慢 17 秒；修正後 3.2 秒、最慢 5.9 秒。', 'Measured by replaying the same 9-minute meeting: 6.7 s before (slowest 17 s), 3.2 s after (slowest 5.9 s).')],
      ['15 秒', b('前後各一段原音隨決策保存，被追問時可以直接回聽', 'of audio before and after each confirmed decision, saved for replay'), b('會議後擷取的決策，每條都附逐字稿原句；確認後會保存前後各 15 秒的原音，被追問時可以直接回聽。沒確認的候選 30 天後自動封存。', 'Each decision pulled from a meeting comes with its source quote. Once confirmed, 15 seconds of audio before and after it are saved so it can be replayed when someone asks; unconfirmed candidates are archived after 30 days.')],
    ],
    hero: { kind: 'diagram', diagram: 'memflow', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    card: { kind: 'diagram', diagram: 'memflow', label: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    webOnly: true,
    side: b('補足從 0 到 1 的產品定義：排出需求、訂驗收條件、收斂介面', 'Adds 0-to-1 product definition: ranking needs, setting acceptance criteria, and refining the UI'),
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('開完會，記不清誰說了什麼、決定了什麼', 'After meetings, I couldn\'t remember who said or decided what'),
        blocks: [
          { t: 'p', text: b('最常遇到的狀況是，被追問「那時候為什麼這樣決定」卻答不出來。為了理清需求，請 AI 用單選題「拷問」自己，兩輪共 8 題，把一長串想做的功能排出先後，定出工具的核心任務：', 'What kept happening was being asked "why did we decide that?" and having no answer. I had AI grill me with multiple-choice questions, eight across two rounds, to rank a long wish list and set the tool\'s core tasks:') },
          { t: 'table', head: [b('時機', 'When'), b('核心任務', 'Core task'), b('目前狀態', 'Status')], rows: [
            [b('會議中', 'During'), b('準確記錄會議內容', 'Record the meeting accurately'), b('已完成三模型辨識與兩段式糾錯，以錄音重播測試', 'Three-model recognition and two-layer correction built; tested on recorded-meeting replays')],
            [b('會議中', 'During'), b('提到相關專案或任務時，顯示多個相關任務提示', 'Show several related tasks when a project or task comes up'), b('已完成，以錄音重播測試', 'Built; tested on recorded-meeting replays')],
            [b('會議後', 'After'), b('整理內容，做成摘要與任務，備查', 'Organize the content into a summary and tasks for later lookup'), b('已完成：重點、待辦、未決與決策，都附原句', 'Done: highlights, to-dos, open questions, and decisions, each with a source quote')],
          ] },
          { t: 'callout', title: b('目標', 'Goal'), text: b('先讓逐字稿正確，之後的任務提示和會議摘要才有可靠的依據。', 'Get the transcript right first, so task hints and meeting summaries are built on reliable text.') },
          { t: 'p', text: b('但第一版的逐字稿「十分不正確」，中英夾雜尤其差。逐字稿不可信，上層功能都沒有意義，所以我先處理辨識。', 'But the first transcripts were badly wrong, especially with mixed Chinese and English. Without a trustworthy transcript nothing built on top would matter, so I tackled recognition first.') },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我定義需求、提出架構構想、決定介面與視覺；程式由 Claude 實作，計劃另外請 Codex 審閱。每個功能都由我先定好驗收條件，再用自己的會議或錄音重播檢查，決定接受、退回或調整順序。', 'I defined the need, proposed the architecture, and made the interface and visual decisions. Claude wrote the code, and Codex reviewed the plan. For each feature, I set the acceptance criteria up front, checked it against my own meetings or recorded replays, and decided whether to accept it, send it back, or reorder the plan.') },
        ],
      },
      {
        id: 'recognition', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('辨識架構', 'Recognition'),
        title: b('用三個模型和公司字典提高辨識準確度', 'Three models and a company glossary for accuracy'),
        blocks: [
          { t: 'decision', q: b('辨識不準怎麼辦？', 'What if recognition isn\'t accurate?'), a: b('多個模型一起辨識，再由 AI 對照公司字典整理', 'Run several models, then let AI reconcile them with a glossary'), text: b('這是我提出的構想。用自己的會議錄音比較後，三個新模型都遠勝原本的小模型，Breeze 和 TEA 對中英夾雜最好；而且三個模型錯的地方各不相同，正好互補。', 'This was my idea. On my own meeting recordings, all three new models far outperformed the original smaller model, and Breeze and TEA did best on mixed Chinese and English. Each also made different mistakes, so they complement each other.') },
          { t: 'decision', q: b('會議中要快、會議後要準，怎麼兼顧？', 'Fast during, accurate after. How?'), a: b('分成兩層處理', 'Split it into two layers'), text: b('會議中只做粗略快速的修正，讓字幕先出來；會議後再由三個模型整場重轉，先通讀全場，再對照字典逐批精修。', 'During the meeting, only quick fixes run so captions appear fast. Afterward, all three models re-transcribe the whole meeting, and the result is read through in full, then refined batch by batch against the glossary.') },
          { t: 'decision', q: b('AI 會不會把句子改得很通順但是錯的？', 'Could AI make sentences fluent but wrong?'), a: b('限制 AI 只能挑，不能改寫', 'Let AI choose, never rewrite'), text: b('AI 只能從三個模型的版本和字典裡挑出組合；沒把握的地方就列為「待確認詞」，不自己猜。', 'AI may only combine what the three models heard and what the glossary contains; anything uncertain is flagged for review instead of being guessed.') },
          { t: 'diagram', kind: 'correction', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'h3', text: b('公司字典', 'The company glossary') },
          { t: 'p', text: b('我指定從工作資料和官網的酒店資料整理字典，共 774 個詞，另有 3,800 間酒店的參考清單。實測時，被聽成「力力子、萬號、卡賠、香港回禮、波西蛇」的詞，被認回立鼎世、萬豪、Capella、Rosewood、Four Seasons 這幾個酒店品牌與酒店聯盟。', 'I had the glossary built from work documents and hotel data on our website: 774 terms plus a reference list of 3,800 hotels. In testing, words misheard as Chinese sound-alikes were correctly recognized as the hotel alliance and brands Leading Hotels of the World, Marriott, Capella, Rosewood, and Four Seasons.') },
        ],
      },
      {
        id: 'hints', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('任務提示', 'Task hints'),
        title: b('提到相關專案時，旁邊就跳出相關任務', 'Mention a project, and related tasks appear'),
        blocks: [
          { t: 'p', text: b('原本的計劃是從會議裡慢慢累積任務資料。我直接提供團隊每週更新的任務表和自己的工作日誌當來源，任務庫因此當天就建好，不必從零開始。', 'The plan was to build up task data from meetings over time. Instead I pointed it at the team\'s weekly-updated task sheet and my own work log, so the task library was ready the same day.') },
          { t: 'decision', q: b('開會時怎麼知道該提示哪些任務？', 'How does it know which tasks to show?'), a: b('比對最近一分鐘的談話，在本機完成', 'Match the last minute of conversation, entirely on-device'), text: b('每段字幕都和最近一分鐘的談話一起比對任務庫，最多顯示 5 張相關任務卡，可以釘選；比對全程在本機，不呼叫 AI。沒在開會時，同一個區塊可以手動查詢。', 'Each caption segment, plus the last minute of conversation, is matched against the task library, showing up to 5 related task cards you can pin. Matching runs on-device without calling AI. Outside meetings, the same panel works as manual search.') },
          { t: 'p', text: b('第一次用錄好的會議檢查時，提示欄在閒聊中也跳出無關的卡片，雜訊比幫助多。我把這個修正提前處理，細節見「實作與驗證」。', 'The first check with recorded meetings showed irrelevant cards popping up during small talk, more noise than help. I moved that fix forward; details are under Build.') },
        ],
      },
      {
        id: 'plan', caps: ['pm'], tags: ['PM'], toc: b('計劃與挑戰', 'Planning'),
        title: b('計劃越寫越大時，主動找人挑戰', 'When the plan grew, I asked to be challenged'),
        blocks: [
          { t: 'p', text: b('下一步要把工具改成辦公室同事也能用的版本，計劃從 v1 一路改到 v5。計劃變大後，我先要 AI 自省整個計劃，再請另一個 AI（Codex）當挑戰者審閱。', 'The next step was turning the tool into something office colleagues could use, and the plan went from v1 to v5. As it grew, I first asked AI to review its own plan, then asked another AI, Codex, to review it as a challenger.') },
          { t: 'diagram', kind: 'plan', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'p', text: b('兩次挑戰改變了順序：核心需求「決策擷取」從計劃的後段提前到前段，錄音保護也提前到最前面。', 'Both reviews changed the order: the core need, decision extraction, moved from late in the plan to near the start, and recording safety moved to the front.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面收斂', 'Design'),
        title: b('讓辦公室同事也看得懂的介面', 'An interface office colleagues can understand'),
        blocks: [
          { t: 'p', text: b('第一版是用工程角度做的。我要求用介面設計師的方法重新盤點：情境走查、內容盤點、使用性原則，看過 7 個頁面，找出 7 個跨頁問題。', 'The first version was built from an engineering angle. I had it re-audited the way an interface designer would, with scenario walkthroughs, a content inventory, and usability heuristics. The audit covered 7 pages and found 7 issues that span multiple pages.') },
          { t: 'h3', text: b('首頁：只留開會時用得到的東西', 'Home: only what a meeting needs') },
          { t: 'p', text: b('原本首頁有寫死的日期、8 張示意資料卡和整排工程說明。改版後拿掉這些，依狀態切換：會議前是查詢、準備開會、我的未完成；會議中是錄音列、字幕與相關任務。', 'The old home page had a hard-coded date, 8 placeholder cards, and rows of engineering notes. They\'re gone; the page now switches by state. Before a meeting: search, meeting prep, and my open items. During a meeting: the recording bar, captions, and related tasks.') },
          { t: 'figure', src: ['img/case6/home-before.webp'], alt: b('改版前的首頁：寫死日期與多張說明卡', 'Old home page with a fixed date and many info cards'), caption: b('工作記憶助理實際畫面 · 改版前的首頁 · 卡片是 App 內建的示意資料', 'Work Memory Agent screenshot · old home page · cards are built-in sample data') },
          { t: 'figure', src: ['img/case6/home-after.webp'], alt: b('改版後的首頁（會議前）：查詢、準備開會、我的未完成、最近的會議', 'New home page before a meeting: search, prepare, open items, recent meetings'), caption: b('工作記憶助理實際畫面 · 改版後的首頁（會議前）· 清單含同事與客戶資訊，已遮蔽', 'Work Memory Agent screenshot · new home page, before a meeting · lists hidden for privacy') },
          { t: 'h3', text: b('字幕：糾正後原地覆蓋', 'Captions: corrections replace the draft') },
          { t: 'p', text: b('原本三個模型的字幕並排顯示。當時的想法是「我還是需要及時看到有東西出來」，參考 Notion 會議記錄，提出單欄字幕：先出草稿，AI 糾正後原地替換，行尾標示草稿、已糾錯或有疑點；三個模型的原文收進可展開區。', 'Captions from the three models used to sit side by side. I needed to see text right away, so, using Notion\'s meeting notes as a reference, I proposed a single column: a draft first, replaced in place once AI corrects it, with each line marked as a draft, corrected, or uncertain. The raw model output moved into an expandable area.') },
          { t: 'figure', src: ['img/case6/captions-before.webp'], alt: b('改版前：三個模型的逐字稿並排顯示，右側是相關任務', 'Before: three model transcripts side by side, related tasks on the right'), caption: b('工作記憶助理實際畫面 · 改版前：三個模型並排的即時逐字稿與相關任務 · 以系統語音模擬會議', 'Work Memory Agent screenshot · before: three transcripts side by side with related tasks · simulated meeting audio') },
          { t: 'figure', src: ['img/case6/captions-after.webp'], alt: b('改版後：單欄字幕，行尾標示草稿、已糾錯或有疑點，右側是相關任務與決策', 'After: one caption column with status per line, related tasks and decisions on the right'), caption: b('工作記憶助理實際畫面 · 改版後：單欄字幕與相關任務 · 會議內容已遮蔽', 'Work Memory Agent screenshot · after: single caption column and related tasks · meeting content hidden') },
          { t: 'h3', text: b('設定：工程欄位收進進階', 'Settings: technical fields tucked away') },
          { t: 'p', text: b('我決定工程欄位「全部收進進階，不刪」，所以這些欄位都移進「進階」區塊；設定頁也重新分成幾個區塊，並寫明逐字稿會送到哪裡。', 'I decided to move every technical field into an Advanced section rather than delete any of them. The settings page was also regrouped and now states where transcripts are sent.') },
          { t: 'figure', src: ['img/case6/settings-before.webp'], alt: b('改版前的設定頁：Provider、Local command 等工程欄位直接攤開', 'Old settings page with technical fields such as Provider and Local command'), caption: b('工作記憶助理實際畫面 · 設定頁改版前', 'Work Memory Agent screenshot · settings before') },
          { t: 'figure', src: ['img/case6/settings-after.webp'], alt: b('改版後的設定頁：工程欄位收進進階，並寫明逐字稿會送到哪裡', 'New settings page: technical fields under Advanced, with where transcripts are sent'), caption: b('工作記憶助理實際畫面 · 設定頁改版後', 'Work Memory Agent screenshot · settings after') },
          { t: 'h3', text: b('視覺：單一色系、少粗體', 'Visuals: one hue, less bold') },
          { t: 'compare', title: b('過程證據：第一版樣張 vs 我的修改原則', 'Evidence: first specimen vs my revision'), aiLabel: b('第一版樣張', 'First specimen'), meLabel: b('我的修改原則', 'My direction'),
            ai: b('macOS 藍色當強調色；「未確認」「附條件」「資訊」各用不同顏色；粗體很多。', 'macOS blue as the accent; "unconfirmed," "conditional," and "info" each in a different color; lots of bold.'),
            me: b('「顏色不要太多種，用單一色系深淺變化」「字體不要太多粗體字，感覺整個很厚重，又不知道畫面重點」。保留原本的墨綠，標籤改成灰階，粗體只留標題。第二版一次通過，直接套用。', '"Not too many colors, use shades of one hue." "Not so much bold; it feels heavy and hides what matters." I kept the original deep green, turned tags gray, and limited bold to headings. The second version passed on the first try and was applied as is.'),
            source: b('2026 年 11 月 18 日 · 確認視覺樣張時', '18 Nov 2026 · reviewing the visual specimen') },
          { t: 'figure', src: ['img/case6/specimen-v1.webp'], alt: b('第一版視覺樣張：藍色強調色、多色標籤', 'First visual specimen: blue accent and multicolor tags'), caption: b('第一版視覺樣張 · 淺色與深色模式 · 示意資料', 'First visual specimen · light and dark · sample data') },
          { t: 'figure', src: ['img/case6/specimen-v2.webp'], alt: b('第二版視覺樣張：墨綠單一色系、灰色標籤', 'Second visual specimen: one deep-green hue and gray tags'), caption: b('依我的回饋修改的第二版 · 已套用到整個 App · 示意資料', 'Second specimen, revised from my feedback · applied across the app · sample data') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('會議後整理', 'After the meeting'),
        title: b('會議後自動整理摘要與任務', 'Automatic summaries and tasks after each meeting'),
        blocks: [
          { t: 'p', text: b('會議結束後，工具自動擷取重點、待辦、未決事項與決策候選。這些整理好的內容留著備查：被追問時，要能找到當初的決定。', 'After each meeting, the tool extracts highlights, to-dos, open questions, and decision candidates, kept for later lookup: when someone asks, I can find the original decision.') },
          { t: 'decision', q: b('怎麼避免 AI 編出不存在的決定？', 'How do we stop AI inventing decisions?'), a: b('每條都要附逐字稿原句，找不到就清空', 'Each needs a supporting quote; otherwise it\'s cleared'), text: b('每個欄位都要對得回逐字稿裡的原句；對不回來的欄位直接清空，不讓 AI 補。', 'Every field must match a sentence in the transcript; fields that don\'t are cleared rather than filled in by AI.') },
          { t: 'decision', q: b('還分不出誰在說話，人物怎麼填？', 'Speakers aren\'t identified yet. Who said it?'), a: b('讓 AI 推測，但標出信心度', 'Let AI guess, with a confidence label'), text: b('分辨講者排在之後的階段；在那之前，提出人由 AI 推測並標示信心度，確認前都只是候選。', 'Speaker identification is planned for a later phase; until then, AI guesses who proposed it and labels its confidence, and everything stays a candidate until confirmed.') },
          { t: 'figure', src: ['img/case6/decision.webp'], alt: b('會議後擷取的決策卡：附依據原句，可以修改或回聽原音', 'Extracted decision card with its source quote, edit and replay buttons'), caption: b('工作記憶助理實際畫面 · 會議後擷取的決策 · 附依據原句，可修改或回聽原音', 'Work Memory Agent screenshot · an extracted decision · source quote, edit, and replay') },
          { t: 'p', text: b('確認後會保存前後各 15 秒的原音，被追問時可以直接回聽；沒確認的候選 30 天後自動封存。', 'Once confirmed, 15 seconds of audio before and after the quote are kept for replay; unconfirmed candidates are archived after 30 days.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('沒有會議，也先用錄好的會議驗收', 'No meetings? Test with recorded ones'),
        blocks: [
          { t: 'p', text: b('檢查點原本要等真實會議。當下沒有會議，我請 AI 用錄好的會議重播代跑，結果發現會議中提示欄「雜訊多於幫助」：閒聊 3 分鐘就跳出 4 張無關的任務卡。這個修正因此從計劃的後段提前處理，修完後，同一段錄音重播的無關卡片降到 0 張。', 'The checkpoint was originally planned for live meetings. With none scheduled, I had AI replay recorded ones instead, and it showed the in-meeting hint panel was more noise than help: 4 irrelevant task cards in 3 minutes of small talk. The fix moved up from late in the plan, and on the same replay the irrelevant cards dropped to zero.') },
          { t: 'diagram', kind: 'latency', caption: b('示意圖 · 依重播量測數據重繪', 'Diagram · redrawn from replay measurements') },
          { t: 'p', text: b('字幕延遲也是用同一種方法量：重播同一場 9 分鐘會議，95% 段落的草稿延遲從 6.7 秒降到 3.2 秒。另外，錄音每 2 秒寫進硬碟，當機或關掉視窗時，最多只會遺失最後幾秒。', 'Caption delay was measured the same way, replaying one 9-minute meeting: the 95th-percentile draft delay fell from 6.7 to 3.2 seconds. Recordings are also written to disk every 2 seconds, so a crash or closed window loses at most the last few seconds.') },
          { t: 'table', rows: [
            [b('需求', 'Requirements'), b('用單選題拷問、整理功能排序', 'Quiz me with multiple-choice questions, rank features'), b('作答、定出核心需求', 'Answer and set the core need')],
            [b('實作', 'Build'), b('寫程式、跑測試、打包', 'Write code, run tests, package'), b('提出架構構想、決定介面與視覺', 'Propose the architecture, decide UI and visuals')],
            [b('驗收', 'Verify'), b('重播錄音代跑檢查點、量延遲', 'Replay recordings, measure delay'), b('用自己的會議回饋、決定下一步順序', 'Test in my own meetings, choose what comes next')],
          ] },
          { t: 'callout', title: b('這些數字的限制', 'Limits of these numbers'), text: b('代跑時，決策的標註和擷取都由 AI 做，延遲也是在同一段錄音上調整與量測，所以只代表方向對了；真實會議的效果還要再驗證。', 'In the replays, AI both labeled and extracted the decisions, and delay was tuned and measured on the same recording, so the numbers only show the approach is heading the right way; it still has to be verified in live meetings.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('完成的部分', 'What\'s built so far'),
        blocks: [
          { t: 'stats', items: [['3', b('個本機模型一起辨識，再兩段式糾錯', 'on-device models transcribing together, with two-layer correction')], ['95%', b('即時字幕在 3.2 秒內出現（錄音重播測試）', 'of live captions appear within 3.2 s (replay test)')], ['4→0', b('張無關任務卡：閒聊 3 分鐘時的提示雜訊（重播測試）', 'irrelevant task cards during 3 minutes of small talk (replay test)')]] },
          { t: 'h3', text: b('已完成的項目', 'Built so far') },
          { t: 'list', items: [b('三模型辨識與兩段式糾錯', 'Three-model recognition with two-layer correction'), b('會議後的決策擷取', 'Post-meeting decision extraction'), b('會議前與會議中兩種首頁', 'Before- and during-meeting home states'), b('單一色系的視覺系統', 'A one-hue visual system')] },
          { t: 'p', text: b('這些都已打包安裝在自己的電腦上。和第一版相比，在自己的會議裡感受到辨識正確率大幅提升；這是主觀感受，沒有量化。', 'All of this is packaged and installed on my computer. In my own meetings, recognition feels much better than in the first version; that is my own impression, not a measured result.') },
          { t: 'h3', text: b('資料存放', 'Where the data lives') },
          { t: 'p', text: b('錄音、逐字稿與工作資料都存在本機；AI 糾錯與會議後整理時，會把逐字稿送到企業版的雲端 AI 模型，服務商不會拿這些資料訓練模型。', 'Recordings, transcripts, and work data are stored on my computer. During AI correction and post-meeting summaries, transcripts are sent to an enterprise cloud AI model, and the provider does not use that data to train its models.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次會一開始就固定一段錄音和人工校對稿當基準，量出辨識正確率；也會把驗收用和調整用的句子分開，並照和 AI 協作的實際速度來估工時。', 'Next time I\'d set a baseline from day one, a fixed recording with a hand-checked transcript, to measure accuracy. I\'d also keep test sentences separate from tuning sentences, and plan time around the real pace of working with AI.') },
        ],
      },
    ],
  },
];

/**
 * v3 網站版：
 * 1. 「AI 的產出、我的判斷」對照（過程證據）移到問題之後的獨立段落。
 * 2. 「AI 負責／我負責」分工表與數字密集的佐證段落，收進可展開的細節。
 * PDF 作品集摘要仍用 rawCases（不收合），內容不受影響。
 */
const FOLD: Record<string, [string, number][]> = {
  booking: [['design', 8], ['design', 11], ['i18n', 2], ['build', 1], ['build', 2]],
  rewards: [['build', 1], ['outcome', 5]],
  'ui-spec': [['build', 1], ['outcome', 1]],
  analytics: [['build', 1]],
  research: [['fieldwork', 0]],
  memory: [['build', 2], ['build', 3]],
};
const detailsLabel = b('看細節與數據', 'Details and figures');
const splitLabel = b('看 AI 與我的分工', 'How AI and I split the work');
const isAiCompare = (bk: Block) => bk.t === 'compare' && (!bk.aiLabel || /AI|樣張/.test(bk.aiLabel['zh-tw']));

export const cases: Case[] = rawCases.map((c) => {
  const fold = FOLD[c.slug] ?? [];
  const evidence: Block[] = [];
  const sections = c.sections.map((sec) => {
    const blocks = sec.blocks
      .map((bk, i): Block => {
        if (!fold.some(([id, idx]) => id === sec.id && idx === i)) return bk;
        const label = bk.t === 'table' && !bk.head ? splitLabel : detailsLabel;
        return { t: 'more', label, blocks: [bk] };
      })
      .filter((bk) => {
        if (isAiCompare(bk)) { evidence.push(bk); return false; }
        return true;
      });
    return { ...sec, blocks };
  });
  if (evidence.length) {
    const at = sections.findIndex((s) => s.id === 'problem') + 1;
    sections.splice(at, 0, {
      id: 'evidence', caps: ['pm', 'ui', 'fe'], tags: ['AI'], toc: b('過程證據', 'Evidence'),
      title: b('AI 的產出，我怎麼判斷', 'What AI produced, and how I judged it'),
      blocks: evidence,
    });
  }
  return { ...c, sections };
});

/** PDF 作品集摘要用：排除只放網站的案例 */
export const printCases = rawCases.filter((c) => !c.webOnly);

export function neighbors(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return {
    prev: cases[(i - 1 + cases.length) % cases.length],
    next: cases[(i + 1) % cases.length],
  };
}
