import type { T } from '../i18n';

const b = (zh: string, en: string): T => ({ 'zh-tw': zh, en });

export type Cap = 'pm' | 'ui' | 'fe';

export type DiagramKind = 'channels' | 'rules' | 'funnel' | 'groups' | 'triad' | 'mentor' | 'bars' | 'memflow' | 'correction' | 'plan' | 'latency' | 'ia' | 'loop';

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
  | { t: 'versions'; items: [string, T][] }
  | { t: 'compare'; ai: T; me: T; source: T; title?: T; aiLabel?: T; meLabel?: T };

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
  card: { kind: 'phones' | 'image' | 'tiers' | 'diagram'; src?: string[]; diagram?: DiagramKind; label: T };
  /** 只放網站，不放進 PDF 作品集摘要 */
  webOnly?: boolean;
  sections: Section[];
}

const capLabel = { pm: 'PM', ui: 'UI / UX', fe: 'Frontend' } as const;
export { capLabel };

const realShot = b('WOTA 正式站實際畫面 · 本人參與設計與規格，非獨立完成', 'Live WOTA product · I contributed design and specs as part of the team');
const realShotShort = b('WOTA 正式站實際畫面', 'Live WOTA product');

export const cases: Case[] = [
  {
    slug: 'booking',
    no: '01',
    period: '2023 — NOW',
    eyebrow: 'Case 01 · Product Design · Multi-platform',
    title: b('WOTA 跨平台旅宿訂房：\n官網 3.0 改版，以及延伸到 LINE 與銀行白牌', 'WOTA hotel booking:\nredesigning website v3.0 and extending it to LINE and bank partner sites'),
    cardTitle: b('WOTA 跨平台旅宿訂房體驗', 'WOTA hotel booking across web, LINE, and bank sites'),
    lead: b(
      '舊官網少了高端旅宿該有的質感，找酒店也不夠好用。我主導官網 3.0 改版：網站字體改成用襯線體搭配中黑體，讓整體變得典雅；優化酒店搜尋，例如顯示優惠標籤。之後再把同樣的設計延伸到 LINE 裡的訂房網頁（LIFF）和銀行的合作訂房網站，三個網站共用同一組設計元件，也共用同一份四種語言的文案。',
      "The old website didn't feel like a luxury hotel brand, and finding a hotel took more effort than it should. I led the v3.0 redesign, pairing a serif with a medium-weight sans for a more refined look and improving hotel search, for example by surfacing deal tags. I then extended the same design to a booking mini-app inside LINE (LIFF) and to bank partner booking sites. All three now share one component set and one source of copy in four languages.",
    ),
    chips: ['Product Design', 'UX Flow', 'i18n', 'Frontend'],
    meta: [
      [b('我的角色', 'My role'), b('官網 3.0 產品規劃與 UI/UX 主導 · LIFF UI 與方向主導、前端協作與驗收', 'Led website v3.0 planning and UI/UX · Led LIFF UI and direction; frontend collaboration and QA')],
      [b('產品', 'Product'), b('高端旅宿訂房平台', 'Luxury hotel booking')],
      [b('期間', 'Period'), b('2023.03 — 現在', '2023.03 — now')],
      [b('平台', 'Platforms'), b('官網 · LIFF · 白牌，共用後端與後台', 'Website · LIFF · bank white-label sites, sharing one backend and admin')],
    ],
    kpis: [
      ['13', b('個面向客人的功能區完成 UI 設計', 'customer-facing modules designed'), b('官網 3.0 的 13 個面向客人的功能區（前台模組），UI 設計全部完成，每頁都附給工程的行為說明。', 'UI design is complete for all 13 customer-facing modules of website v3.0, and every page comes with behavior notes for engineering.')],
      ['11', b('個共用元件庫', 'shared component libraries'), b('官網 3.0 的 Figma 元件頁共 735 個元件與變體，拆成 VI（品牌視覺規範）、字級、色彩、圖示、Email、通用元件等 11 個元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma component page holds 735 components and variants, organized into 11 libraries (visual identity, type scale, color, icons, email, general components, and more) shared by the website, LIFF, and notification emails.')],
      ['3,548', b('個字串四語同步', 'strings synced in 4 languages'), b('官網的 3,548 個文案字串同步成 Figma 四語系變數；2,615 個可綁定的 Figma 文字層全部綁定變數（價格、日期等 264 層另列待審）；已綁定文字與官網字串不一致為 0。', 'All 3,548 website copy strings were synced to four-language Figma variables, and all 2,615 bindable text layers are bound to them (264 layers with prices, dates, and similar content are on a separate review list). The bound text shows zero mismatches with the website strings.')],
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
          { t: 'p', text: b('之後 LINE LIFF（在 LINE 裡打開的訂房網頁）和銀行白牌（掛銀行品牌的訂房站）陸續加入，三個前台共用同一個後端，官網的設計與文案也要延伸過去。', 'Later, a LINE mini-app (LIFF) and white-label sites for bank partners came on board. All three run on one backend, so the website\'s design and copy had to carry over.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓官網呈現高端旅宿應有的典雅質感，讓客人更容易找到適合、正在優惠的酒店；也讓 LINE 和銀行合作網站使用同樣的設計，而且都支援繁中、簡中、英文、日文 4 種語言。', 'Give the site the refined feel expected of a luxury hotel brand, make it easier to find the right hotel and its deals, and bring the same design to LINE and the bank partner sites, all in Traditional Chinese, Simplified Chinese, English, and Japanese.') },
          { t: 'diagram', kind: 'channels', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('時間軸', 'Timeline') },
          { t: 'versions', items: [
            ['2023', b('主導官網 3.0 產品規劃與全站 UI/UX：研究競品、建立參考庫、自建進度表逐頁控管', 'Led website v3.0 planning and UI/UX: competitive research, reference library, page-by-page tracking')],
            ['2024', b('主持 UAT（上線前驗收）收斂 30 項問題，官網 3.0 上線', 'Ran UAT and closed out 30 issues; website v3.0 launched')],
            ['2025', b('整理四語系文案檔與多語系（i18n）作業流程；LIFF 登入註冊開發', 'Set up four-language copy files and an i18n workflow; LIFF sign-in development')],
            ['2026', b('LINE LIFF 5 月上線、7 月加入信用卡購買會籍（付費會員資格）與英文版；Figma 四語系整理', 'LINE LIFF launched in May; card payment for memberships and an English version followed in July. Figma four-language cleanup')],
          ] },
        ],
      },
      {
        id: 'ia', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('資訊架構', 'IA'),
        title: b('官網要放哪些服務，又該怎麼分區', 'What the site offers, and how it\'s organized'),
        blocks: [
          { t: 'p', text: b('官網要同時承載酒店、會員、私人訂製（量身規劃的行程）、機場通關服務、極致奢旅（高端旅遊行程）與文章內容。我先盤點這些服務的範圍，再把網站分成四塊：導覽入口、訂房主線、會員中心，以及給未登入訪客與搜尋引擎看的品牌、國家、城市標準頁。', "The site had to carry hotels, membership, bespoke travel, airport services, Ultra Luxe (high-end trips), and articles. I mapped their scope first, then split the site into four parts: navigation, the booking path, the member center, and brand, country, and city pages for logged-out visitors and search engines.") },
          { t: 'diagram', kind: 'ia', caption: b('示意圖 · 依官網 3.0 開發細項重繪', 'Diagram · redrawn from the v3.0 development breakdown') },
          { t: 'list', items: [b('訂房主線：從目的地、日期、人數開始，經過結果篩選與地圖、房型與方案（同一房型不同的價格與條件），到結帳與特殊需求，要能一路連續。', 'Booking path: one unbroken flow from destination, dates, and guests, through filters and the map, to rooms and rates (different prices and terms for the same room), then checkout and special requests.'), b('會員中心：把會籍、酒店訂單、一般訂單與個人資料放在同一個結構裡；訂單分成全部、已確認、已入住、已取消，也設計了沒有資料時的空狀態。', 'Member center: membership, hotel orders, other orders, and profile live in one structure. Orders can be filtered by all, confirmed, stayed, and cancelled, and the empty states are designed too.')] },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('改版時做的決定', 'Calls I made during the redesign'),
        blocks: [
          { t: 'decision', q: b('改版要怎麼控管 79 個頁面？', 'How do you track a 79-page redesign?'), a: b('自建進度表，每頁走同一條流程', 'One tracker, one path for every page'), text: b('我自建一張進度表，讓每一頁都照同樣的順序推進：先出 UI 初版、定稿、開 Jira，再做成桌機與手機網頁、接上後端資料，最後驗收。2023 年 10 月時，79 頁中已有 70 頁完成初版、49 頁定稿。', 'I built a tracker so every page followed the same order: first draft, final design, a Jira ticket, desktop and mobile implementation, API integration, and finally QA. By October 2023, 70 of 79 pages had first drafts and 49 were final.') },
          { t: 'decision', q: b('LIFF 的文案要自己寫，還是跟官網一致？', 'Should LIFF have its own copy or match the website?'), a: b('以官網用語為準，只有 LIFF 專屬功能才自訂', 'Website wording is the source of truth; LIFF-only features get custom copy'), text: b('LIFF 和官網的 774 條多語系文案（i18n key）逐條比對過。AI 產出比對表並分類，標成一致、有差異或無法配對；我判斷差異是否合理、親自審核 138 筆，再依分類逐批修正。', 'LIFF\'s 774 i18n keys were compared with the website\'s one by one: AI produced the comparison table and labeled each key as matched, different, or unmatched, and I judged whether each difference was justified and personally reviewed 138 of those decisions. The copy was then fixed in batches by label.') },
          { t: 'decision', q: b('客人習慣用官網，怎麼讓他們改用 LINE？', 'Guests prefer the website. How do we move them to LINE?'), a: b('不強迫切換，在既有接觸點加入 LINE 入口', 'No forced switch; add LINE entry points where guests already are'), text: b('在訂單完成頁和入住提醒信加上「加入 LINE，隨時查看訂單」的引導，也和行銷、銷售團隊一起準備宣傳素材，並約定追蹤成效的方式。', 'I added "Join LINE to track your booking" prompts to the confirmation page and pre-arrival emails, and worked with marketing and sales on promo assets and how to track results.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面設計', 'Design'),
        title: b('字型、搜尋與共用元件', 'Type, search, and shared components'),
        blocks: [
          { t: 'h3', text: b('字型：襯線體搭配中黑體', 'Type: a serif paired with a medium sans') },
          { t: 'p', text: b('字型改成襯線體搭配中黑體混用，讓官網從一般訂房網站的樣子，變成典雅、有高端旅宿質感的視覺。', 'Switching to a serif paired with a medium-weight sans took the site from a generic booking look to something refined enough for luxury hotels.') },
          { t: 'h3', text: b('搜尋：讓優惠一眼看得到', 'Search: deals at a glance') },
          { t: 'p', text: b('搜尋流程也一併重新整理，例如在搜尋結果加上優惠標籤，讓客人比較酒店時，更快看到正在優惠的選項。', 'I also reworked how search behaves, for example by adding deal tags to the results, so guests comparing hotels can spot current offers faster.') },
          { t: 'figure', src: ['img/real/official-room-list.webp'], alt: b('WOTA 官網房型列表', 'WOTA website room list'), caption: realShotShort },
          { t: 'h3', text: b('元件：官網、LIFF 與通知信共用', 'Components shared by web, LIFF, and email') },
          { t: 'p', text: b('官網 3.0 的 Figma 檔共 28 頁。光是其中 12 個模組頁，就有約 310 個桌機與手機畫面，每頁都附給工程的行為說明。735 個元件與變體整理成 11 個共用元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma file has 28 pages. Just 12 of its module pages hold about 310 desktop and mobile screens, each with behavior notes for the engineering team. 735 components and variants are organized into 11 shared libraries used by the website, LIFF, and notification emails.') },
          { t: 'h3', text: b('通知信：和官網同一個品牌', 'Email: the same brand as the site') },
          { t: 'p', text: b('註冊、預訂、取消、入住提醒等通知信的發送規則原本就有。我負責美化信件樣式，讓信件和官網 3.0 使用相同的視覺，客人從網站到信箱看到的是同一個品牌；Email 也是 11 個共用元件庫之一。', 'The sending rules for sign-up, booking, cancellation, and pre-arrival emails were already in place. My part was restyling the emails to match website v3.0, so guests see the same brand from the site to their inbox. Email is also one of the 11 shared libraries.') },
          { t: 'p', text: b('LIFF 是在 LINE 裡打開的網頁，畫面更窄、操作更依賴大拇指。我讓 LIFF 的設計延續官網的高端調性，Figma 共 24 頁、約 238 個手機畫面、259 個元件，並把規則整理成設計系統手冊 v1.3。', 'LIFF runs inside LINE, so screens are narrower and most interactions happen with a thumb. I kept the website\'s luxury feel across 24 Figma pages, about 238 mobile screens, and 259 components, and documented the rules in design system v1.3.') },
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
            ['2026-01～04', b('會員中心、預訂與個人資料的設計與 review', 'Design and review of member center, booking, and profile')],
            ['2026-05-04', b('LINE LIFF 對外推出', 'LINE LIFF goes live')],
            ['2026-06～09', b('UAT、跨語系與 UI 架構持續改善', 'UAT, cross-language fixes, and ongoing UI structure work')],
          ] },
          { t: 'decision', q: b('已經是官網會員的人，怎麼在 LINE 接著用？', 'How do existing members carry on inside LINE?'), a: b('先把登入與既有帳號綁定寫成流程', 'Define sign-in and account linking first'), text: b('既有會員要能用原本的帳號登入並綁定 LINE，訂單與會籍才接得上。我先把這段寫進 PRD，讓工程與測試有共同的流程依據。', 'Existing members needed to sign in with their accounts and link LINE so orders and membership carried over. I put this flow in the PRD first, giving engineering and QA one reference.') },
          { t: 'decision', q: b('從通知點進來要登入時，客人會不會回不到原本的頁面？', 'After tapping a LINE notification and signing in, do guests end up back where they were?'), a: b('把通知、登入、返回原頁當成同一條路徑追', 'Treat notification, sign-in, and return as one path'), text: b('客人從 LINE 通知點進來，登入後要再跳回原本的方案，這一路上有幾個地方會斷掉。這些斷點都列出來，排進修正追蹤，目標是讓客人能回到正確的頁面。', 'When guests tap a LINE notification, sign in, and then need to get back to the rate they were viewing, the path can fail in several places. I listed every failure point and logged them for fixes, with the goal of getting guests back to the right page.') },
          { t: 'p', text: b('為了讓之後的頁面和 AI 實作都依照相同的規則，我分析現有頁面、公司共用的元件庫、字型與色彩，撰寫時搭配 AI，整理成設計系統手冊、用元件組出頁面的說明，以及給 AI 的實作規範。', 'To keep future pages and AI-built implementations on the same rules, I analyzed the existing pages, the company\'s shared component libraries, type, and color, then worked with AI to write them up as a design system handbook, a guide to assembling pages from components, and implementation guidelines for AI.') },
        ],
      },
      {
        id: 'i18n', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('多語系治理', 'i18n'),
        title: b('四個語系的文案管理', 'Managing copy in four languages'),
        blocks: [
          { t: 'stats', items: [['3,548', b('個官網字串同步成 Figma 四語變數', 'site strings synced to Figma variables')], ['2,615', b('個 Figma 文字全部綁定變數', 'Figma text layers bound to variables')], ['0', b('個已綁定文字四語不一致', 'mismatches in bound text')], ['774', b('個 LIFF 文案項目與官網比對', 'LIFF copy keys compared with the website')]] },
          { t: 'p', text: b('四語系的檢查分成兩部分：', 'The four-language checks came in two parts:') },
          { t: 'list', items: [b('代表畫面：挑出 12 個代表畫面逐一切換四種語言，共核對 1,107 次，與官網字串 0 處不符，也抽查了日文的版面。', 'Representative screens: 12 screens were each switched through all four languages, for 1,107 checks with zero mismatches against the website strings, plus a spot check of the Japanese layouts.'), b('酒店元件：從 294 個變體、489 個文字層裡，挑出能確定意思的 225 層，對應到 91 個官方變數，225 層全部完成綁定。', 'Hotel components: out of 294 variants and 489 text layers, the 225 layers whose meaning was certain were mapped to 91 official variables, and all 225 are bound.')] },
          { t: 'decision', q: b('價格、日期這類會變的文字，也要綁進變數嗎？', 'Should prices, dates, and other changing text be bound too?'), a: b('不硬綁，列入待審清單', 'No. They go in a review queue'), text: b('價格、日期、內容管理系統的內容與客人輸入，硬綁成固定文字反而會出錯。這類 264 個文字層留在待審清單，交接時可以清楚分辨哪些已處理、哪些還要人工判斷。每批改動前也先保存快照與復原清單，避免改錯後追不回來。', 'Binding prices, dates, CMS content, or guest input to fixed text would break them. These 264 layers stay in a review queue, so the handover makes clear what\'s done and what still needs a human call. Before each batch I also saved a snapshot and a rollback list, so any mistake could be undone.') },
          { t: 'compare', ai: b('Figma 裡還有 36 個舊變數被畫面引用，AI 判斷「有引用就不能刪」，建議全部保留。', 'Figma still had 36 legacy variables in use. The AI concluded "in use means keep" and proposed keeping them all.'), me: b('我指出「改套用到正式變數不就可以刪了」。流程改成先改綁、再檢查、最後刪除：這 36 個舊變數在畫面上共 122 處引用，全部改綁。整體清理後，變數從 271 個降到 219 個，壞掉的引用 0 個。', 'I pointed out they could be rebound to the official variables and then removed. The flow became rebind, check, then delete: the 36 variables were used in 122 places, all rebound. After the full cleanup, variables went from 271 to 219 with zero broken references.'), source: b('2026 年 7～8 月 · Figma 四語系遷移時', 'Jul–Aug 2026 · during the Figma four-language migration') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗收', 'Build'),
        title: b('逐頁比對設計與程式', 'Checking the build against the design, page by page'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的切版由工程師完成，我負責逐頁比對設計還原度。這段時間的工作包括：', 'Engineers built website v3.0, and I checked it against the design page by page. The work included:') },
          { t: 'list', items: [b('2023 年 8 月到 2024 年 3 月，留下 54 張修正截圖。', 'Logged 54 correction screenshots from Aug 2023 to Mar 2024.'), b('UAT 回報的 30 項問題，逐一追蹤到處理完成。', 'Tracked all 30 UAT issues until they were resolved.'), b('2026 年起改為搭配 AI 參與 LIFF 前端，清掉 250 多處不一致的樣式，也整理出 Figma、程式、文件三方衝突 42 項。', 'From 2026, worked on the LIFF frontend with AI: cleaned up 250+ inconsistent styles and documented 42 conflicts across Figma, code, and documentation.')] },
          { t: 'table', rows: [
            [b('規格', 'Specs'), b('整理跨平台需求、比對官網與 LIFF 文件差異', 'Summarize cross-platform needs, diff website and LIFF docs'), b('決定哪些流程要一致、哪些保留平台差異', 'Decide which flows must match and which stay platform-specific')],
            [b('文案', 'Copy'), b('產出 774 條多語系文案的比對表與建議對照', 'Generate the 774-key comparison and suggested matches'), b('判斷差異是否合理、親自審核 138 筆判定', 'Judge each difference; personally reviewed 138 decisions')],
            [b('驗收', 'QA'), b('整理測試案例與 Slack 回報的問題', 'Compile test cases and issues reported in Slack'), b('實際操作驗收、判斷優先順序與是否上線', 'Hands-on QA, prioritize, and decide go or no-go')],
          ] },
          { t: 'h3', text: b('UAT 抓到的問題', 'What UAT caught') },
          { t: 'p', text: b('2024 年 3 月的 UAT 記錄到這些問題：', 'The March 2024 UAT logged issues such as:') },
          { t: 'list', ordered: true, items: [b('搜尋條件都填好後，警示沒有消失', 'A warning stayed after all search fields were filled'), b('地圖沒有移到篩選範圍', 'The map did not move to the filtered area'), b('幣別沒有跟著更新', 'Currency did not update'), b('切換方案會捲回頁首', 'Switching rates jumped back to the top'), b('酒店訂單版面和 Figma 不一致', 'The hotel order layout differed from Figma')] },
          { t: 'p', text: b('每一項都對回設計稿，變成工程可以直接定位的修正線索。', 'Each one was traced back to the design so engineers could locate the fix.') },
          { t: 'callout', title: b('用真實資料型的案例做測試', 'Testing with realistic data'), text: b('官網 3.0 上線後我們發現，護照英文姓名的格式只有在真實客人資料下才會出錯。之後測試一律改用中文姓名、英文護照名等真實資料型案例，不再隨意填寫。', 'After website v3.0 launched, we found that English passport-name formatting broke only with real guest data. Since then, we always test with realistic cases, such as Chinese names paired with English passport names, instead of filling in arbitrary values.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('官網變得典雅好找，LINE 成為新通路', 'A more refined site, easier search, and a new LINE channel'),
        blocks: [
          { t: 'p', text: b('官網 3.0 上線後，視覺換成襯線體搭配中黑體的典雅風格，酒店搜尋也更容易看到優惠；這是團隊一起交付的成果，我負責產品規劃、UI/UX 與驗收。LINE LIFF 在 2026 年 5 月上線，7 月加入信用卡購買會籍、英文版與 LINE 訂房通知。', 'Website v3.0 launched with an elegant serif and sans pairing and hotel search that surfaces deals more clearly. It was a team release; I was responsible for product planning, UI/UX, and QA. LINE LIFF launched in May 2026, and July added card payment for memberships, an English version, and booking notifications in LINE.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次改版前，我會先定義要看的指標和事件，讓上線前後可以直接比較成效。', 'Before the next redesign, I\'d define the metrics and events up front so we can compare results before and after launch.') },
        ],
      },
    ],
  },
  {
    slug: 'rewards',
    no: '02',
    period: '2025 — 2026',
    eyebrow: 'Case 02 · Product Management · Systems Thinking',
    title: b('WOTA Journey Rewards：\n把複雜規則變成可交付的規格', 'WOTA Journey Rewards:\nturning complex rules into a spec the team could build from'),
    cardTitle: b('WOTA Journey Rewards：把複雜規則變成可交付的規格', 'WOTA Journey Rewards: complex rules into a spec the team could build from'),
    lead: b(
      '會員等級、房晚入帳、升等積分、兌換與庫存規則彼此牽動。我把這些規則寫成產品需求文件（PRD）和資訊架構（IA），也做成可以實際點擊的原型，讓設計、工程和客服對每一條規則的理解都一樣。',
      'Tiers, room-night credits, upgrade points, redemptions, and inventory all depend on one another. I wrote the rules into a product requirements document (PRD) and information architecture (IA), and built clickable prototypes, so design, engineering, and support all work from the same understanding of every rule.',
    ),
    chips: ['Product Management', 'PRD', 'Edge Cases', 'Prototype'],
    meta: [
      [b('我的角色', 'My role'), b('PRD · IA · 互動原型 · 前台 UI', 'PRD · IA · interactive prototypes · customer-facing UI')],
      [b('規則架構', 'Rule framework'), b('由產品負責人定義', 'Defined by the product owner')],
      [b('期間', 'Period'), b('2025.01 — 2026', '2025.01 — 2026')],
      [b('狀態', 'Status'), b('Phase 1 於 2026 Q3 在官網與 LIFF 上線', 'Phase 1 launched on the website and LIFF in Q3 2026')],
    ],
    kpis: [
      ['18', b('種兌換狀態頁', 'redemption states'), b('兌換中心的 18 種狀態依優先級分成三批交付：最優先 6 種、第二批 7 種、第三批 5 種。', 'The 18 redemption-center states were split into three delivery batches by priority: 6 first, 7 second, and 5 third.')],
      ['28', b('題升等規則定案', 'upgrade rules settled'), b('升等積分的 28 個規則問題逐題列出選項讓團隊拍板，例如定案「效期結束時積分歸零，會籍一律降一級」。', 'I laid out 28 upgrade-point rule questions, each with options for the team to decide on, for example "points reset at the end of the term, and the tier always drops one level."')],
      ['4', b('處會員權益被誤改，上線前找出', 'benefit changes caught before launch'), b('用 Codex 比對 16 頁新版兌換流程概念稿與現行畫面後，我挑出 4 處改到會員權益的差異交給團隊，例如機場接送少了「禮賓」。', 'After Codex compared a 16-screen redemption concept with the current screens, I flagged 4 changes that altered member benefits, such as airport transfer losing "concierge."')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/redeem-center-elite.webp',
      alt: b('Journey Rewards 兌換中心（Elite 會員）：上方顯示會員資格與累計 32 晚，下方四個獎勵中兩個可兌換、兩個顯示房晚不足', 'Journey Rewards redemption center for an Elite member: tier and 32 nights at the top, two rewards redeemable and two showing not enough nights'),
      caption: b('兌換中心 · Elite（第二級會籍）會員畫面 · 擷取自 UI Spec 開發環境，資料為假資料', 'Redemption center, Elite (second-tier) member · captured from UI Spec in the dev environment, with fake data'),
    },
    card: { kind: 'image', src: ['img/real/redeem-center-elite.webp'], label: b('兌換中心 · Elite（第二級會籍）· 假資料', 'Redemption center · Elite · fake data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('一條規則改了，會牽動 UI、API、帳本和客服說法', 'Change one rule, and the UI, API, ledger, and support scripts all have to follow'),
        blocks: [
          { t: 'p', text: b('Journey Rewards 是會員獎勵計畫：會員入住後累積「房晚」（用來兌換禮遇，例如酒店早餐、機場接送等會員權益）與「升等積分」（決定會籍等級）。這些規則會互相影響：', 'Journey Rewards is WOTA\'s loyalty program. Members earn two things from stays: room nights, which they redeem for perks like hotel breakfast or airport transfers, and upgrade points, which set their tier. The rules feed into one another:') },
          { t: 'flow', items: [b('入住', 'Stay'), b('房晚入帳', 'Room-night credit'), b('升等積分', 'Upgrade points'), b('升級與保級（維持原等級）', 'Upgrades and tier retention'), b('兌換與庫存', 'Redemption and inventory')] },
          { t: 'p', text: b('同一套規則要同時出現在官網與 LIFF 的介面、後端 API 與記錄每筆房晚與積分的帳本、QA 測試案例，以及客服 FAQ。而且開發途中規則改版，產品負責人發布的新架構和原本的版本不相容。', 'The same rules appear in the web and LIFF UI, the backend API and points ledger, QA cases, and the support FAQ. On top of that, the rules changed mid-project: the product owner\'s new framework was incompatible with the earlier version.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('把規則整理成一份設計、工程、QA 和客服都能對照的規格，讓兌換失敗、房晚不足這類特殊狀況，在開發前就先討論清楚。', 'Write the rules into one spec that design, engineering, QA, and support can all check against, so special cases such as failed redemptions or too few nights are settled before development.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm'], tags: ['PM'], toc: b('關鍵決策', 'Decisions'),
        title: b('規則怎麼定', 'How the rules were settled'),
        blocks: [
          { t: 'decision', q: b('我的舊版本和產品負責人的新規則衝突，怎麼整合成一份？', 'My earlier version conflicted with the product owner\'s new rules. How do they become one spec?'), a: b('以新規則為唯一來源，把兩版整合成 PRD v2.2', 'Treat the new rules as the single source of truth and merge both into PRD v2.2'), text: b('先前的版本以「1 晚＝1 點、點數可換會籍」為主軸；整合成 PRD v2.2 時，點數拆成只決定等級的「升等積分」與逐筆 24 個月到期的「累計房晚」，移除點數換會籍，改成達標自動升級。', 'My earlier version was built on "1 night = 1 point, and points buy membership." In PRD v2.2, points were split into upgrade points, which only set the tier, and accumulated room nights, each expiring after 24 months. Buying membership with points gave way to automatic upgrades once members hit the threshold.') },
          { t: 'decision', q: b('房晚要算付費的晚數，還是實際入住的晚數？', 'Count paid nights or nights actually stayed?'), a: b('以有效入住晚數為基準', 'Count the nights actually stayed'), text: b('例如「住三付二」這類贈送的房晚也應該計入。這個決定要同步到 PRD、API、帳本、QA 與客服 FAQ，不能只改其中一處。', 'Free nights from offers like "stay 3, pay 2" count too. The decision had to land in the PRD, API, points ledger, QA, and FAQ at the same time, not in just one of them.') },
          { t: 'diagram', kind: 'rules', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'decision', q: b('兩種累積機制同時推進，要一次做完還是分段上線？', 'Two earning systems at once: ship together or in phases?'), a: b('分段上線，先定義 Phase 1 範圍', 'In phases, starting with a clearly scoped Phase 1'), text: b('我釐清房晚和積分同時上線時會互相影響的地方之後，把「舊積分停止累積」「新功能可分批開關」「舊資料轉移」拆成獨立任務，降低一次上線過多功能的風險。', 'After mapping where nights and points would collide if they launched together, I split freezing the old points, feature flags for a staged rollout, and data migration into separate tasks to reduce the risk of putting too much into a single release.') },
        ],
      },
      {
        id: 'states', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('房晚狀態', 'Night states'),
        title: b('房晚入帳前的各種狀態', 'The states a room night passes through'),
        blocks: [
          { t: 'p', text: b('房晚有 Pending、Upcoming、Processing、Active、Excluded 等狀態，名字很像，會員和營運都容易混淆。', 'Room nights move through states like Pending, Upcoming, Processing, Active, and Excluded. The names are similar enough that members and the ops team mix them up easily.') },
          { t: 'p', text: b('我把每個狀態對回訂單狀態，整理前台與後台需要的資料與文案，例如不計入的房晚，就直接寫「不計入」。', 'I mapped each state back to an order status and listed the data and copy each screen needed across the customer-facing UI and the admin. Excluded nights, for example, simply say "not counted."') },
          { t: 'p', text: b('「我的房晚紀錄」的列表與明細，讓每一筆都看得出來源、酒店、入住日期與入帳進度，也設計了沒有資料、載入中、出錯與分頁時的畫面。', 'The "My room nights" list and detail show each night\'s source, hotel, stay date, and credit progress, with empty, loading, error, and paging states designed too.') },
        ],
      },
      {
        id: 'redeem', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('兌換流程', 'Redemption'),
        title: b('兌換中心的四種情境', 'Four situations in the redemption center'),
        blocks: [
          { t: 'p', text: b('兌換中心要分清楚四種情境：可以兌換、會籍等級不足、房晚不足，以及沒有可兌換的品項。每一種都在高保真原型裡有自己的畫面、引導卡與資格提示，會員看得出自己差在哪裡。', 'The redemption center separates four situations: can redeem, tier too low, not enough nights, and no items available. Each has its own screen, guidance card, and eligibility hint in the high-fidelity prototype, so members can see what they still need to qualify.') },
          { t: 'p', text: b('兌換本身走「詳情 → 確認 → 成功或失敗」三步，失敗頁要能重試或找到後續入口。原型也加入修改規則：每筆兌換只能改一次，航空里程不開放修改；房晚快到期時，會顯示提醒與兌換引導。', 'Redemption takes three steps: detail, confirm, then success or failure, and failure pages offer a retry or a clear next step. The prototype also covers the change rules: each redemption can be changed once, airline miles can\'t be changed at all, and nights close to expiring trigger a reminder with redemption suggestions.') },
          { t: 'p', text: b('這部分目前做到原型，正式的品項、扣房晚和 API 會由工程團隊另外驗收。', 'This part is at the prototype stage; the engineering team will separately verify the live items, room-night deductions, and APIs.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('流程與原型', 'Design'),
        title: b('用可以操作的原型討論規則', 'Talking through rules with clickable prototypes'),
        blocks: [
          { t: 'p', text: b('只有 IA 時，失敗、暫停、連結失效這些狀態都沒有定義。我做了 4 支互相串接的互動原型，讓工程與客服可以直接操作。', 'An IA alone left states like failure, pause, and expired links undefined, so I built four linked, interactive prototypes that engineering and support could click through themselves.') },
          { t: 'p', text: b('兩支互相矛盾的規則原型也合併成一支，讓原型、IA、Figma、設計系統四處一致。', 'Two conflicting rule prototypes were merged into one, so the prototype, IA, Figma, and design system all agree.') },
          { t: 'h3', text: b('名詞統一', 'One set of terms') },
          { t: 'p', text: b('「可兌換房晚」改為「累計房晚」，並統一使用「房晚」而不是夜泊或點數。i18n、介面、PRD 與客服說法都改用同一組詞。', '"Redeemable nights" became "accumulated nights," and "room nights" replaced the mix of other terms. i18n, UI, PRD, and support now all use the same words.') },
        ],
      },
      {
        id: 'matrix', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('驗證矩陣', 'Coverage'),
        title: b('會籍、語言與結果的組合檢查', 'Checking tier, language, and outcome combinations'),
        blocks: [
          { t: 'p', text: b('測試四種會籍、兩種語言，以及成功和失敗兩種結果時，很容易只驗到「一般會員、中文、成功」這一種。所以把所有組合交叉攤開，用不同身分和語言逐一操作原型。', 'With four tiers, two languages, and two outcomes, it\'s easy to only ever test "basic member, Chinese, success." So I laid out every combination and walked through the prototypes as each identity, in each language.') },
          { t: 'p', text: b('四支原型也統一數字字型、加上亮暗模式切換，並用相關連結串起來，評審可以看完整段會員旅程。也試過讓四支原型在同一個分頁連續跳轉，測試後還原，改用連結。', 'The four prototypes share a number font, a light/dark switch, and links between them so reviewers can follow the whole member journey. I also tried chaining them so they jump from one to the next in a single tab, but went back to links after testing.') },
          { t: 'p', text: b('這些檢查限於原型，不代表正式系統的端到端測試已通過。', 'These checks cover the prototypes only, not end-to-end tests of the live system.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('前台實作與新稿比對', 'Frontend work and reviewing a new draft'),
        blocks: [
          { t: 'p', text: b('Phase 1 的工程任務由工程團隊開立，我負責追蹤進度。前台由我用 Claude Code 撰寫 Journey Rewards 頁面與 LIFF「我的房晚紀錄」的程式並串接 API，我負責審查與驗收，全端工程師也會 review 程式碼。', 'The engineering team created the Phase 1 tickets, and I tracked their progress. On the front end, I used Claude Code to write the code for the Journey Rewards pages and My Room Nights in LIFF, including the API integration; I reviewed and accepted the work, and a full-stack engineer also reviewed the code.') },
          { t: 'table', rows: [
            [b('規則', 'Rules'), b('整理規則、比對各版文件、探索流程分支', 'Organize rules, diff versions, explore branches'), b('判斷衝突、決定以哪份規則為準', 'Resolve conflicts and pick the source of truth')],
            [b('規格', 'Specs'), b('產生 PRD 與兌換規格初稿、例外情境檢查清單', 'Draft the PRD, redemption spec, and edge-case checklist'), b('確認使用者體驗與交付範圍', 'Confirm the experience and delivery scope')],
            [b('前台', 'Frontend'), b('以 Claude Code 調整頁面、文字與路由', 'Adjust pages, copy, and routes with Claude Code'), b('審查畫面與程式、跟著節點驗收', 'Review screens and code, sign off at each gate')],
          ] },
          { t: 'compare',
            title: b('過程證據：AI 比對，我判斷', 'Evidence: AI compares, I judge'),
            aiLabel: b('AI 負責', 'What AI did'), meLabel: b('我的判斷', 'My call'),
            ai: b('新版兌換流程概念稿有 16 頁。我用 Codex 把每一頁和 UI Spec（Case 03 開發中的工具）裡的現行畫面比對，列出所有文字與欄位的差異。', 'A new redemption-flow concept had 16 screens. I had Codex compare each one against the current screens in UI Spec, the in-development tool from Case 03, and list every text and field difference.'),
            me: b('我從差異裡挑出 4 處改到會員權益的地方：機場接送少了「禮賓」、機場通關服務刪掉「出境」、特定酒店的早餐禮遇消失、「Elite 可兌換」被改成「Elite 規格」：原意是 Elite 會員可以兌換，改成「規格」後像在描述品項，會員會搞不清楚自己能不能換。這 4 處標出來交給團隊，避免新稿在不知不覺中改掉已定案的權益。', 'From those differences I picked out 4 that changed member benefits: the airport transfer lost "concierge," the fast-track service dropped "departure," a hotel breakfast benefit disappeared, and "Elite can redeem" became "Elite spec," which reads like an item description, so members couldn\'t tell whether they qualify. I flagged all 4 for the team so a new draft wouldn\'t change already-settled benefits without anyone noticing.'),
            source: b('2026 年 11 月 · 審查新版兌換流程概念稿時', 'Nov 2026 · while reviewing a new redemption-flow concept') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('Phase 1 上線，各角色對著同一份規格工作', 'Phase 1 shipped, with everyone working from one spec'),
        blocks: [
          { t: 'p', text: b('Phase 1 已在正式站上線：官網 Journey Rewards（房晚紀錄、升等積分、兌換中心、我的禮品券）與 LIFF「我的房晚紀錄」。現在 PM、前後端工程師、QA 和客服，看的都是同一份可以點擊的原型和規格。', 'Phase 1 is live: Journey Rewards on the website (room nights, upgrade points, redemption center, my vouchers) and LIFF "My room nights." PM, frontend and backend engineers, QA, and support now all work from the same clickable prototype and spec.') },
          { t: 'versions', items: [
            ['2025-01', b('房晚累積獎勵表', 'Room-night rewards table')],
            ['v2.0', b('我的版本：1 晚＝1 點、點數可換會籍', 'My version: 1 night = 1 point, points buy membership')],
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
    no: '03',
    period: '2026 · BUILT WITH CLAUDE CODE',
    eyebrow: 'Case 03 · Frontend × AI · Built with Claude Code',
    title: b('UI Spec：設計師用 AI\n做出團隊的規格工具', 'UI Spec: a spec tool\nI designed and built with AI'),
    cardTitle: b('UI Spec：設計師用 AI 做出團隊的規格工具', 'UI Spec: a team spec tool I built with AI'),
    lead: b(
      '我做了一個規格工具，讓設計、PM 與 QA 不必換帳號、也不必等後端，就能看到每個會籍、每種狀態的真實畫面。',
      'I built a spec tool so design, PM, and QA can see the real screen for every tier and state without switching accounts or waiting for the backend.',
    ),
    chips: ['Frontend × AI', 'Claude Code', 'Vue / Quasar', 'Design Token'],
    meta: [
      [b('我的角色', 'My role'), b('發起、規劃、設計與實作', 'Initiated, planned, designed, and built it')],
      [b('產品', 'Product'), b('WOTA 官網會員中心', 'WOTA member center')],
      [b('期間', 'Period'), b('2026.08 — 11', '2026.08 — 11')],
      [b('狀態', 'Status'), b('開發環境，尚未上正式站', 'Dev environment, not yet in production')],
    ],
    kpis: [
      ['129', b('個狀態畫面', 'state screens'), b('11 月 6 日第一階段完成 18 個頁面、63 個狀態畫面，11 月 12 日擴充到 129 個。每個畫面都用正式頁面的程式，只把資料換成假的。', 'Phase 1 wrapped on Nov 6 with 18 pages and 63 state screens, growing to 129 by Nov 12. Every screen runs the production page code, with only the data swapped for fake data.')],
      ['5', b('層防線', 'safeguard layers'), b('從網址、網域、部署、打包到程式檢查各設一道關卡，任何一層發現工具要進正式環境就會擋下。', 'Separate checks at the URL, domain, deployment, build, and code level, any one of which stops the tool from reaching production.')],
      ['2', b('個影響正式站會員的 bug', 'bugs affecting live members, found in dev'), b('驗證過程中抓到 2 個已經在正式站影響會員的會員獎勵卡片顯示錯誤。', 'Verification surfaced 2 member rewards card display bugs already affecting members in production.')],
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
          { t: 'p', text: b('會員中心與 Journey Rewards 的畫面會隨會籍等級、點數餘額、庫存與日期規則變化。過去要確認某個狀態長什麼樣子，必須準備對應的帳號與資料，還要等 API 和登入功能正常。', 'Member center and Journey Rewards screens change with tier, balance, stock, and dates. Checking one state used to require matching accounts and data, plus a working API and login.') },
          { t: 'p', text: b('結果是驗收很費工，很多例外狀態要到很晚才被看見。', 'Reviews were slow, and many edge cases only came to light late in the process.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓團隊在不登入、不連後端的情況下，直接看到每一個會籍、每一種狀態的真實畫面，而且畫面跟正式頁面來自同一份程式。', 'Let the team see every tier and state without logging in or calling the backend, using the same code as the production pages.') },
        ],
      },
      {
        id: 'origin', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('起點', 'Origin'),
        title: b('這個工具從整理前端樣式開始', 'The tool began with a frontend style cleanup'),
        blocks: [
          { t: 'p', text: b('2026 年 9 月，我先整理前端的樣式。間距散落在各頁的寫法裡，數值也不一定落在 4px 網格上。這次整理包括：', 'In September 2026 I started by tidying the frontend styles. Spacing was written ad hoc across pages, not always on a 4px grid. The cleanup included:') },
          { t: 'list', items: [b('138 處間距改成共用寫法。', 'Moving 138 spacing rules onto shared classes.'), b('加上檢查：只要有人寫出不在網格上的數值，打包就直接失敗。', 'A check that fails the build whenever someone writes an off-grid value.'), b('80 處無效或重複的排版寫法，收斂成既有的共用樣式。', 'Folding 80 invalid or duplicate layout rules into existing shared styles.')] },
          { t: 'decision', q: b('改了這麼多樣式，怎麼確定畫面沒有跑掉？', 'After so many style changes, how do you know nothing moved?'), a: b('量每個元素的位置與尺寸，而不是比對截圖', 'Measure element positions and sizes, not screenshots'), text: b('圖片載入和骨架動畫（載入時的灰色占位畫面）會讓截圖比對誤判。改成在同一次載入下，切換新舊寫法量測每個元素的位置與尺寸：一組 1,901 個元素、另一組 2,204 個元素，差異都是 0。', 'Image loading and skeleton animations make screenshot diffs unreliable. Instead, in a single load, I switched between old and new code and measured every element\'s position and size: 1,901 elements in one set and 2,204 in another, all with zero difference.') },
          { t: 'p', text: b('整理過程中也修好一個看得到的問題：房價方案描述較長的酒店卡片，品牌 logo 被擠成約 7.9px，恢復成 20×20px。整理時也用副本（正式頁面的複製頁，只把資料換成假的）補上平常看不到的狀態，例如彈窗、登入後才出現的元件。UI Spec 延續了這個做法：把平常看不到的狀態全部攤開來看。', 'Along the way I fixed a visible bug: on hotel cards with long rate descriptions, the brand logo was squeezed to about 7.9px; it is back to 20×20px. I also used page copies (duplicates of production pages with fake data) to cover normally hidden states, such as dialogs and components that appear only after sign-in. UI Spec extends that idea: lay out every hidden state in one place.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('關鍵決策', 'Decisions'),
        title: b('工具的做法怎麼選', 'Choosing how the tool works'),
        blocks: [
          { t: 'decision', q: b('用截圖、Figma，還是真的元件？', 'Screenshots, Figma, or real components?'), a: b('選擇渲染正式頁面的真元件', 'Render the real production components'), text: b('截圖和設計稿會跟實際程式脫節。副本頁的畫面程式跟正式頁面完全相同，只把資料換成假的，看到的就是使用者會看到的。', 'Screenshots and mockups drift from code. Each preview uses the production page template with controlled fake data, so it shows what users see.') },
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
          { t: 'list', items: [b('在上方切換 4 種寬度，以及繁中、簡中、EN 三種語系', 'Switch between 4 widths and 3 languages at the top'), b('開啟輔助線、以游標為中心縮放，或直接搜尋', 'Turn on guides, zoom around the cursor, or search'), b('在格子裡操作，互動和真站一致，假 API 可以切換成功或失敗', 'Interact inside a cell just as on the live site, with fake APIs that switch between success and failure'), b('複製網址分享給同事，網址會記住目前的分組與卡片', 'Share the URL with a colleague; it keeps the current group and card')] },
          { t: 'figure', src: ['img/real/uispec-gallery.webp'], alt: b('UI Spec 分組導覽與 1440 寬的狀態畫廊', 'UI Spec grouped navigation and the 1440px state gallery'), caption: b('UI Spec 開發環境實際畫面 · 1440 寬下的 Journey Rewards 狀態畫廊，同步／TBD 標示每張卡片是否待確認', 'UI Spec in the dev environment · Journey Rewards gallery at 1440px, with sync and TBD labels on each card') },
        ],
      },
      {
        id: 'interaction', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('互動驗證', 'Interaction'),
        title: b('在格子裡操作互動', 'Interacting inside each cell'),
        blocks: [
          { t: 'p', text: b('靜態格子只能看「長什麼樣子」，看不到「點下去會怎樣」。評審要檢查的是完整流程，所以我加了三個能力：', 'Static cells show what a screen looks like, not what happens on click. Reviewers need to check whole flows, so I added three capabilities:') },
          { t: 'decision', q: b('在格子裡跳到別的頁面後，怎麼回來？', 'After jumping to another page inside a cell, how do you get back?'), a: b('加上返回軌跡', 'Add a back trail'), text: b('可以回上一步、回起點，也可以從下拉選單選任何一步，連畫面縮放與捲動位置都會還原。', 'Go back one step, return to the start, or pick any step from a dropdown, with zoom and scroll position restored.') },
          { t: 'decision', q: b('送出表單、彈窗這些互動，怎麼驗又不會寫到真資料？', 'How do you test submits and dialogs without touching real data?'), a: b('攔截 API，回傳可切換的成功或失敗', 'Intercept APIs and return switchable success or failure'), text: b('每一格都有自己的假回應，可以切換成功或失敗，看到兩種結果的畫面，不會寫進任何真資料。', 'Each cell has its own fake responses that can switch between success and failure, showing both outcomes without writing any real data.') },
          { t: 'decision', q: b('改了東西，怎麼讓大家知道改在哪裡？', 'After a change, how does everyone find what changed?'), a: b('逐格記錄最近修改', 'Track recent changes per cell'), text: b('原本「最近修改」會把同一頁的所有狀態都列出來。現在改成分格記錄修改時間，連引用到的副本也會追蹤，列出最新 25 格。', 'Recent changes used to list every state on a page. Now each cell records its own change time, including the copies it references, and the latest 25 cells are listed.') },
        ],
      },
      {
        id: 'safety', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('隔離與同步', 'Isolation'),
        title: b('怎麼避免假資料流進正式站', 'Keeping fake data out of production'),
        blocks: [
          { t: 'p', text: b('這個工具有兩個風險：副本畫面慢慢和正式頁面脫節，以及測試用的假資料被帶進正式站。前者用同步檢查處理，副本只要和正式頁不一致就會報錯，一個指令就能同步回來；後者用五道關卡處理。', 'The tool carries two risks: copies drifting from production pages, and fake test data leaking into the live site. A sync check handles the first, failing whenever a copy differs and restoring it with one command; five safeguards handle the second.') },
          { t: 'guard', items: [
            [b('網址', 'URLs'), '', b('正式版不會產生工具的網址', "Production builds leave out the tool's pages")],
            [b('網域', 'Domain'), '', b('只在開發網域打得開', 'Opens on development domains only')],
            [b('部署', 'Deploy'), '', b('部署設定不會把工具帶上正式站', 'Deployment config never ships the tool')],
            [b('打包', 'Build'), '', b('只要有殘留，打包就直接失敗', 'The build fails if anything is left behind')],
            [b('程式', 'Code'), '', b('檢查正式程式沒有引用工具', 'Checks that production code never imports the tool')],
          ] },
          { t: 'p', text: b('另外，單一格子出錯時只會影響那一格，不會讓整個畫廊掛掉。格子揭露的正式頁問題，則交回各自的頁面修正。', 'If one cell errors, only that cell is affected, not the whole gallery. Problems a cell reveals in a production page go back to that page to be fixed.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('用 Claude Code 實作，由我負責判斷與驗證', 'Built with Claude Code, judged and verified by me'),
        blocks: [
          { t: 'p', text: b('工具建在公司既有的 Vue / Quasar 專案裡，必須遵守原本的程式規範。', 'The tool lives in the existing Vue / Quasar codebase and follows its coding rules.') },
          { t: 'table', rows: [
            [b('規劃', 'Plan'), b('整理頁面清單、狀態組合與檔案結構草案', 'Draft page list, state combinations, and file structure'), b('決定要做真元件副本、範圍與分組方式', 'Choose real-component copies, scope, and grouping')],
            [b('實作', 'Build'), b('產生副本頁、假資料與寬度重排的程式', 'Generate copies, fake data, and width reflow code'), b('審查程式、要求符合既有規範與程式規範檢查（lint）', 'Review code, enforce standards and lint')],
            [b('驗證', 'Verify'), b('比對副本與正式頁面的差異', 'Diff copies against production'), b('逐一檢查畫面、判斷是否為真正的問題', 'Inspect each screen and judge real issues')],
          ] },
          { t: 'compare', ai: b('AI 一次處理的範圍太大，每批要跑很久，跑完我沒辦法逐項確認做對了沒有。', 'The AI took on too much per batch; each run took so long I couldn\'t verify what it had done.'), me: b('我要求重新切分任務粒度：每批 30 到 90 秒、最多寫入 5 個。每一批都小到我看得完、驗得了，才繼續下一批。', 'I had it re-slice the work: 30–90 seconds per batch, at most 5 writes. Every batch was small enough for me to review before the next one ran.'), source: b('這是 2026 年 8 月 Figma 四語系遷移時建立的做法，之後成為我與 AI 協作的固定方式', 'A practice I set during the Figma four-language migration in Aug 2026, which became my standard way of working with AI') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('工具還在開發中，就抓到正式站的 bug', 'Still in development, already catching production bugs'),
        blocks: [
          { t: 'p', text: b('11 月 6 日完成第一階段：18 個頁面、63 個狀態畫面。驗證過程中抓到 2 個已經在正式站影響會員的會員獎勵卡片顯示錯誤，以及前後端欄位命名不一致。到 11 月 12 日擴充為 129 個狀態畫面。', 'Phase 1 finished on November 6: 18 pages and 63 state screens. Along the way it caught 2 member rewards card display bugs already affecting live members, plus mismatched field names between frontend and backend. By November 12 it covered 129 state screens.') },
          { t: 'h3', text: b('驗證結果', 'Verification') },
          { t: 'stats', items: [['2', b('個影響正式站會員的 bug', 'bugs affecting live members')]] },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會先做驗收時最常卡關的那些狀態，讓工具更早被團隊用起來，再逐步擴充。', 'Next time I\'d start with the states that block reviews most often, get the tool into the team\'s hands sooner, and expand from there.') },
        ],
      },
    ],
  },
  {
    slug: 'analytics',
    no: '04',
    period: '2026.10 — NOW',
    eyebrow: 'Case 04 · UX Research · Data',
    title: b('網站行為分析：\n找出訂單卡在哪一步', 'Behavior analysis:\nfinding where bookings stall'),
    cardTitle: b('網站行為分析：找出訂單卡在哪一步', 'Behavior analysis: where bookings get stuck'),
    lead: b(
      '團隊只看得到流量和轉換的表面數字，不知道客人卡在哪裡。我對照使用者的操作錄影和網站數據，找出客人最常卡住的兩個地方：一是要先登入才能繼續訂房，二是從廣告點進來的酒店頁看不到價格。同時設定每週自動產出追蹤報告，之後改版就能比較前後的差異。',
      'The team could see top-line traffic and conversion, but not where guests got stuck. By comparing session recordings with site analytics, I pinned down the two biggest blockers: guests had to log in before they could keep booking, and hotel pages reached from ads showed no price. I also set up an automated weekly report, so every fix can be measured before and after.',
    ),
    chips: ['UX Research', 'Mixpanel', 'Clarity', 'GTM'],
    meta: [
      [b('我的角色', 'My role'), b('發起並主導', 'Initiated and led')],
      [b('產品', 'Product'), b('WOTA 官網', 'WOTA website')],
      [b('期間', 'Period'), b('2026.10 — 現在', '2026.10 — now')],
      [b('狀態', 'Status'), b('建議已交付，改版待開發', 'Recommendations delivered; fixes awaiting development')],
    ],
    kpis: [
      ['9% / 50%', b('未登入 vs 已登入走到訂單表單', 'of logged-out vs logged-in users reach the booking form'), b('點「選擇價格」後，訪客只有 9% 走到訂單表單，會員是 50%；走到表單後兩者完成率差不多（50% 對 46%），落差出在登入這一步。', 'After "Select rate," 9% of logged-out visitors and 50% of members reached the form. Once there, both converted at similar rates (50% vs 46%), so the gap is the login step.')],
      ['44%', b('登入後回到表單', 'return to form after login'), b('登入成功後只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'Only 44% returned to their form after logging in, and signing up does not log people in automatically.')],
      ['41', b('項附證據的發現與建議', 'evidence-backed findings'), b('每項都附證據強度、建議解法與優先等級；另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each comes with evidence strength, a proposed fix, and a priority; 16 ruled-out claims are logged too, so the team doesn\'t revisit them.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-hotel-no-dates.webp',
      alt: b('從外部連結進入的酒店頁：沒有日期，只顯示「缺少必要參數，請填寫入住條件」', 'Hotel page opened from an external link: no dates, only "Missing required parameters"'),
      caption: b('WOTA 官網正式站實際畫面 · 從廣告或 Google 進入、沒帶日期時看到的酒店頁', 'Live WOTA site · what a hotel page shows when opened from an ad or Google without dates'),
    },
    card: { kind: 'diagram', diagram: 'funnel', label: b('示意圖 · 依分析數據重繪', 'Diagram · redrawn from the analysis') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('只看得到數字，不知道原因', 'Numbers without reasons'),
        blocks: [
          { t: 'p', text: b('團隊在 Mixpanel（網站數據分析工具）看得到流量下滑、轉換偏低，但不知道原因、也不知道客人卡在哪一步。更麻煩的是，原始數據混了約 26% 的機器流量，部分事件定義也有錯，直接引用會得出錯誤結論。', 'The team could see traffic dropping and low conversion in Mixpanel, but not why or where guests got stuck. Worse, about 26% of raw traffic was bots and some events were misdefined, so taking the numbers at face value would lead to the wrong conclusions.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('交給產品團隊一份附證據、可以直接排進開發時程的改版清單，也讓每次改版上線後，都能量到它有沒有帶來改善。', 'Give the product team an evidence-backed fix list they can schedule straight into development, and make it possible to measure whether each fix actually helped once it ships.') },
          { t: 'h3', text: b('先釐清背景', 'Setting the baseline') },
          { t: 'p', text: b('台灣 4 到 9 月的流量下滑，98% 來自付費廣告縮減，不是網站變差。作為之後比較的基準，網站每月約有 3.2 萬次造訪，其中 72% 來自手機，每月訂房約 138 筆。', '98% of Taiwan\'s April–September traffic drop came from cutting back on paid ads, not from the site getting worse. As a baseline for later comparisons: about 32k sessions a month, 72% on mobile, and about 138 bookings a month.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('分析方法怎麼定', 'Choosing the analysis method'),
        blocks: [
          { t: 'decision', q: b('要相信數據，還是看使用者實際怎麼操作？', 'Trust the numbers or watch real behavior?'), a: b('以錄影為核心，數據只是背景', 'Recordings first, numbers as context'), text: b('我用 Mixpanel 數據、Clarity 的使用者操作錄影，以及 GTM（設定網站要記錄哪些行為的工具）裡的事件定義三方交叉驗證，任何結論都要在錄影裡看得到對應的行為。', 'Every conclusion had to match behavior visible in Clarity recordings, cross-checked against Mixpanel and the event definitions in GTM (the tool that sets what the site tracks).') },
          { t: 'decision', q: b('結論怎麼確定不是看錯？', 'How do we know a conclusion is right?'), a: b('換角度重新抽樣檢查 7 輪', 'Seven rounds of re-sampling and cross-checking'), text: b('我複查的 16 項主要結論中，4 項被推翻、6 項被修正。例如「登入有一半失敗」被推翻：實際送出帳密後有 85 到 90% 成功，問題在別處。', 'Of the 16 main conclusions I re-checked, 4 were overturned and 6 revised. "Half of logins fail" was wrong: 85–90% succeed once credentials are submitted. The problem was elsewhere.') },
          { t: 'decision', q: b('問題這麼多，先修哪個？', 'Many issues. Which first?'), a: b('依證據強度與影響排優先', 'Rank by evidence strength and impact'), text: b('41 項發現每項都附證據強度、建議解法與優先等級，另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each of the 41 findings has an evidence rating, proposed fix, and priority. 16 ruled-out claims are recorded so the team doesn\'t revisit them.') },
        ],
      },
      {
        id: 'measure', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('先修正量測', 'Measurement'),
        title: b('404 錯誤暴增，先檢查數字怎麼算', '404s spiked, so I checked how they were counted first'),
        blocks: [
          { t: 'p', text: b('週報偵測到 10 月 13 日起找不到頁面的錯誤暴增（35 → 131）。我先檢查數字怎麼算出來的，發現兩個量測問題：', 'The weekly report flagged a jump in page-not-found errors from October 13 (35 → 131). I first checked how the number was produced and found two measurement problems:') },
          { t: 'list', ordered: true, items: [b('網址裡的編號剛好含有「404」，被誤算成錯誤頁。', 'Page IDs that happened to contain "404" were counted as errors.'), b('「造訪」和「瀏覽」混在一起算，讓數字被放大。', 'Visits and page views were mixed together, inflating the count.')] },
          { t: 'p', text: b('篩選規則與計數方式更正後，在原報告留下修正註記，再交叉比對錄影、事件、工程資料庫與實際操作，查明真正的原因是兩篇文章下架與舊連結，不是程式出錯，並向主管匯報處置建議。後面所有結論都改用修正後的數字。', 'I corrected the filter and counting rules and left a correction note in the original report. Cross-checking recordings, events, the engineering database, and hands-on tests showed the real cause was two unpublished articles and old links, not a code bug, and I reported the recommended fix to my manager. Every later conclusion uses the corrected numbers.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('兩個轉換瓶頸', 'Two conversion bottlenecks'),
        blocks: [
          { t: 'h3', text: b('登入牆', 'The login wall') },
          { t: 'p', text: b('點「選擇價格」之後的數據：', 'What happened after "Select rate":') },
          { t: 'list', items: [b('未登入的訪客只有 9% 走到訂單表單，已登入的會員是 50%。', 'Only 9% of logged-out guests reached the booking form, versus 50% of logged-in members.'), b('訪客一旦走到表單，完成率和會員差不多（50% 對 46%），所以落差出在中間的登入這一步。', 'Once guests reached the form, they completed it at about the same rate as members (50% vs 46%), so the gap is the login step in between.'), b('登入成功後只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'Only 44% returned to their form after logging in, and sign-up did not log people in automatically.')] },
          { t: 'diagram', kind: 'funnel', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('看不到價格的落地頁', 'Landing pages with no prices') },
          { t: 'p', text: b('從廣告與 Google 進來的酒店頁沒有帶日期，看不到價格。', 'Hotel pages reached from ads and Google carried no dates, so they showed no prices.') },
          { t: 'list', items: [b('90 天內有約 2.5 萬名使用者落在這類頁面。', 'About 25,000 users landed on these pages in 90 days.'), b('其中約 64% 帶有廣告來源標記，代表付費帶進來的客人一進站就看不到價格。', 'About 64% carried ad tracking tags, so visitors we paid to bring in landed on a page with no price.'), b('四週觀察的抽樣中，活動落地頁的 48 段錄影，沒有一段進到訂單表單。', 'In a four-week sample, none of 48 recorded campaign landing sessions reached the booking form.')] },
          { t: 'figure', src: ['img/real/official-hotel-no-dates.webp'], alt: b('沒有日期的酒店頁，只顯示缺少必要參數', 'Hotel page without dates showing a missing-parameters message'), caption: b('WOTA 官網正式站實際畫面 · 2026-11-16 擷取', 'Live WOTA site · captured 2026-11-16') },
          { t: 'h3', text: b('不是問題的地方', 'What turned out fine') },
          { t: 'p', text: b('訂單表單沒送出的多是看完總價後離開的比價行為，不是表單出錯；送出後成功率約 98%。', 'Most abandoned booking forms were people comparing prices after seeing the total, not form errors; about 98% of submitted forms go through.') },
        ],
      },
      {
        id: 'loop', caps: ['ui', 'fe'], tags: ['UI / UX', 'FE'], toc: b('載入逾時', 'Timeouts'),
        title: b('網路一慢，頁面就說「查無酒店」', 'On a slow network, the page says "no hotel found"'),
        blocks: [
          { t: 'p', text: b('看錄影時還發現另一個發生在看價格階段的阻礙：酒店頁載入逾時的時候，畫面直接顯示「查無酒店」，客人以為酒店不存在；按上一頁又會被帶回同一頁，繞成迴圈。', 'Recordings revealed another blocker at the price-checking stage: when a hotel page timed out, it showed "no hotel found," so guests assumed the hotel didn\'t exist, and hitting back brought them right back to the same page, in a loop.') },
          { t: 'diagram', kind: 'loop', caption: b('示意圖 · 依診斷紀錄重繪', 'Diagram · redrawn from the diagnosis notes') },
          { t: 'p', text: b('和工程一起查程式，並在 Chrome 與 Safari 實際重現後，提出三個解法：', 'Working with engineering, I traced the code, reproduced the issue in Chrome and Safari, and proposed three fixes:') },
          { t: 'list', ordered: true, items: [b('載入失敗時讓客人可以重試', 'Let guests retry when loading fails'), b('換頁方式改成不會留下返回迴圈', 'Change navigation so it leaves no back-button loop'), b('舊酒店編號自動轉成新編號', 'Redirect old hotel IDs to new ones')] },
          { t: 'p', text: b('這個問題已經找到原因並排入待辦，正在等待開發。', 'The cause has been found and the fix is in the backlog, waiting for development.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('量測與自動化', 'Tracking'),
        title: b('修正追蹤設定，並每週自動產出週報', 'Fixing the tracking and automating a weekly report'),
        blocks: [
          { t: 'p', text: b('我先找出追蹤設定本身的問題：手機版「選擇價格」與「立即預訂」不會觸發事件，原因是追蹤程式只認得桌機版的按鈕；站內換頁也不會記錄頁面瀏覽。', 'First I found tracking bugs: on mobile, "Select rate" and "Book now" never fired, because the tracking code only recognized desktop buttons, and in-app navigation didn\'t record page views.') },
          { t: 'table', rows: [
            [b('擷取', 'Collect'), b('擷取 Mixpanel 數據與錄影、整理統計', 'Pull Mixpanel data and recordings, run counts'), b('發起分析、定義要回答的問題', 'Initiate and define the questions')],
            [b('分析', 'Analyze'), b('產出結論與文件初稿', 'Draft findings and documents'), b('看錄影驗證，推翻或修正結論', 'Verify against recordings, overturn or revise')],
            [b('追蹤', 'Track'), b('每週一自動產出週報', 'Generate the weekly report every Monday'), b('判讀趨勢、決定要提給產品的項目', 'Read trends and choose what goes to product')],
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
          { t: 'p', text: b('我交付了兩樣東西：一份附證據、可以直接排期的改版清單，以及每週自動產出的追蹤報告，改版上線後可以直接比較前後的變化。', 'I delivered two things: an evidence-backed fix list that can be scheduled directly, and an automatic weekly tracking report that compares before and after each release.') },
          { t: 'h3', text: b('預期效益', 'Expected impact') },
          { t: 'p', text: b('依問題清單估算，只修「登入後接續訂單」一項，每月最多可多約 20 筆訂房（目前每月約 138 筆）；改版上線後，會用既有的每週追蹤驗證。', 'Based on the backlog estimate, fixing "resume booking after login" alone could add up to about 20 bookings a month, on top of about 138 today. Once it ships, the weekly tracking will show whether that holds.') },
          { t: 'h3', text: b('下一步', 'Next') },
          { t: 'p', text: b('推動「登入後接續訂單」與「落地頁顯示日期與價格」兩項改版，上線後用既有的每週追蹤量測成效。', 'Ship "resume booking after login" and "show dates and prices on landing pages," then measure with the existing weekly tracking.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會在分析進行中，就先挑一項改版推上線，用每週追蹤量到成效，再用結果爭取後續改版。', 'Next time I\'d ship one change while the analysis is still running, measure it with the weekly tracking, and use that result to win the next fixes.') },
        ],
      },
    ],
  },
  {
    slug: 'research',
    no: '05',
    period: '2022.10 — 2023.02',
    eyebrow: 'Case 05 · UX Research',
    title: b('研究「析心事務所」社群用戶減少，\n為什麼有人留下、有人離開', 'Researching a shrinking self-growth community:\nwhy some stay and others leave'),
    cardTitle: b('研究「析心事務所」社群用戶減少，為什麼有人留下、有人離開', 'Researching a shrinking community: why some stay and others leave'),
    lead: b(
      '一個自我成長社群的成員越來越少，課程也賣不動，業主從沒做過使用者研究。我和 UX 工作坊的 11 位成員分成三組，訪談 18 位活躍、流失與潛在用戶，找出有人留下、有人離開的原因。最後我們根據這些發現，向業主提出具體做法，例如讓資深成員帶新成員，以及把 Discord 頻道分層開放，幫助新成員更快融入社群。',
      "A self-growth community was losing members, its courses weren't selling, and the founders had never done user research. Eleven other UX workshop members and I split into three teams and interviewed 18 active, lapsed, and prospective members to learn why people stayed or left. From there, we gave the client concrete next steps, such as having experienced members mentor newcomers and opening Discord channels in stages, so new members could settle in faster.",
    ),
    chips: ['UX Research', 'Interviews', 'Survey', 'Affinity mapping'],
    meta: [
      [b('我的角色', 'My role'), b('第一組研究員（活躍用戶）· 主訪 · 問卷與訪綱設計 · 參與整合簡報', 'Researcher, active-member team · lead interviewer · survey and guide design · contributed to the final readout')],
      [b('業主', 'Client'), b('原子實踐 × 析心事務所', 'A Taiwanese self-growth community')],
      [b('期間', 'Period'), b('2022.10 — 2023.02 · UX 工作坊業主委託專案', '2022.10 — 2023.02 · client project in a UX workshop')],
      [b('狀態', 'Status'), b('2022 年 12 月向業主簡報', 'Presented to the client in Dec 2022')],
    ],
    kpis: [
      ['3', b('群用戶分開研究', 'user groups studied separately'), b('活躍、流失或觀望、從沒接觸過的潛在用戶，各由一組 4 人負責。', 'Active, lapsed or undecided, and never-joined prospective members, each covered by its own team of four.')],
      ['18', b('位受訪者', 'interviews'), b('三組各 6 位，每場約 1.5 小時線上訪談，2022 年 11 月 7 到 13 日完成。', 'Six per team, each a roughly 90-minute online interview, completed November 7–13, 2022.')],
      ['43', b('份招募問卷回覆', 'screener responses'), b('用來篩選三群受訪者，也用來對照業主原本的客群假設。', "Used to recruit the three groups and to check the client's original assumptions about its audience.")],
    ],
    hero: { kind: 'diagram', diagram: 'groups', caption: b('示意圖 · 依研究紀錄重繪', 'Diagram · redrawn from the research notes') },
    card: { kind: 'diagram', diagram: 'groups', label: b('示意圖 · 依研究紀錄重繪', 'Diagram · redrawn from the research notes') },
    webOnly: true,
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('業主只知道人在變少，不知道為什麼', 'The client knew people were leaving, not why'),
        blocks: [
          { t: 'p', text: b('社群初期迴響很好，後來參與人數下滑；新講師上任後課程也賣得不理想。團隊之前沒做過任何使用者研究，判斷都來自經營者自己的觀察。業主原本鎖定「習慣用理性邏輯處理人生問題」的人，認為服務感性族群的成本太高。', "The community started strong, then participation dropped, and courses sold poorly after a new instructor joined. The team had never done user research; decisions came from the founders' own observations. They targeted \"people who handle life problems with logic,\" believing emotionally driven members would cost too much to serve.") },
          { t: 'callout', title: b('目標', 'Goal'), text: b('找出原本參與的人為什麼漸漸離開、另一部分的人為什麼留下，並確認業主原本設定的目標客群對不對。', "Find out why some members drifted away while others stayed, and check whether the client had chosen the right target audience.") },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我在負責「活躍用戶」的第一組，參與的工作包括：', 'I was on the active-member team, and my work included:') },
          { t: 'list', items: [b('分析業主原本的想法和假設', 'Analyzing the client\'s original ideas and assumptions'), b('設計招募問卷與訪綱', 'Designing the screener and interview guide'), b('擔任主訪，並用 ORID（依序記下事實、感受、詮釋與決定的整理方法）整理訪談紀錄', 'Leading interviews and coding notes with ORID (recording facts, feelings, interpretations, and decisions in that order)'), b('參與把三組的發現整合起來，並向業主簡報', 'Helping merge the three teams\' findings and present them to the client')] },
        ],
      },
      {
        id: 'method', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('研究設計', 'Method'),
        title: b('三群用戶由三組分開研究', 'Three user groups, three research teams'),
        blocks: [
          { t: 'flow', items: [
            b('需求訪談與商業假設拆解（10 月中）', 'Client interview and assumption mapping (mid-Oct)'),
            b('社群觀察：LINE、Facebook、Discord（10 月）', 'Community observation on LINE, Facebook, Discord (Oct)'),
            b('招募問卷篩選三群受訪者', 'Screener survey to recruit three groups'),
            b('18 場訪談，ORID 紀錄（11 月）', '18 interviews, ORID notes (Nov)'),
            b('親合圖、同理心地圖、三組整合，向業主簡報（12 月）', 'Affinity mapping, empathy maps, cross-team synthesis, client readout (Dec)'),
          ] },
          { t: 'p', text: b('三群各由一組負責，因為同一個問題在三群人身上的答案不同：留下的人說得出「為什麼留」，流失的人說得出「為什麼走」，沒接觸過的人才看得到「為什麼一開始沒進來」。', "Each group had its own team because the same question gets different answers: people who stayed can say why they stayed, people who left can say why they left, and people who never joined show why they didn't come in at all.") },
        ],
      },
      {
        id: 'goals', caps: ['pm'], tags: ['PM'], toc: b('研究目標', 'Goals'),
        title: b('研究目標改了三次', 'The research goals, rewritten three times'),
        blocks: [
          { t: 'p', text: b('第一版研究目標是照著業主的假設寫的。小組討論時我們發現，這樣的目標是在找證據支持業主，訪談還沒開始就預設了答案，所以前後修改了三次。', "Our first research goals were written around the client's assumptions. In team discussions we realized they were hunting for evidence to support the client and assumed the answer before any interview, so we revised them three times.") },
          { t: 'compare', title: b('過程證據：把研究目標從「驗證」改成「探索」', 'Evidence: turning "prove it" goals into "explore it" goals'), aiLabel: b('第一版目標', 'First draft'), meLabel: b('第三次修改後', 'Third revision'),
            ai: b('確認「越多的互動」是否真的可以提升「購課率」。', 'Confirm whether more interaction actually raises course purchases.'),
            me: b('研究「社群互動」與用戶活躍程度之間的關聯。我們發現第一版是在找證據支持業主的假設；改成探索關聯，才不會在訪談前就預設答案。', "Study how community interaction relates to how active members are. We realized the first draft was hunting for evidence to support the client's assumption; reframing it as exploring a relationship stopped us from deciding the answer before the interviews."),
            source: b('2022 年 10 月 27 日 · 第三次修改研究目標時', '27 Oct 2022 · third revision of the research goals') },
        ],
      },
      {
        id: 'fieldwork', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('招募與訪談', 'Fieldwork'),
        title: b('招募受訪者與訪談紀錄方式', 'Recruiting participants and recording interviews'),
        blocks: [
          { t: 'p', text: b('招募問卷收到 43 份回覆，用來篩選三群受訪者，也拿來對照業主原本的客群假設。訪談在 2022 年 11 月 7 到 13 日完成，三組各訪 6 位，每場約 1.5 小時，全部線上進行。', "The screener received 43 responses, used to recruit the three groups and to check the client's audience assumptions. Interviews ran November 7–13, 2022: six per team, about 90 minutes each, all online.") },
          { t: 'p', text: b('我在活躍用戶組擔任主訪，用 ORID 整理每場紀錄：先記客觀發生的事，再記受訪者的感受、詮釋與決定。三組用同樣的方法記錄，12 月才能用親合圖和同理心地圖把三組的發現放在一起比對。', 'I led interviews for the active-member team and coded every session with ORID: first what objectively happened, then the participant\'s feelings, interpretations, and decisions. Because all three teams recorded the same way, in December we could compare their findings together on affinity and empathy maps.') },
        ],
      },
      {
        id: 'findings', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('三群人各自的發現', 'What each group told us'),
        blocks: [
          { t: 'callout', title: b('質化發現', 'Qualitative findings'), text: b('以下來自 18 場訪談與社群觀察，是方向性的發現，不是比例或因果。', 'These come from 18 interviews and community observation. They show direction, not proportions or cause and effect.') },
          { t: 'h3', text: b('留下的人：三人小組是最被肯定的活動', 'Why people stay: the three-person practice group') },
          { t: 'p', text: b('三人一組輪流擔任引導者、被引導者與旁觀者練習對話。每種個性的人都能在裡面找到自己的位置；人少，每個人都會被回應，陪伴感最強。', 'Groups of three rotate as guide, speaker, and observer to practice conversations. Every personality finds a place, and in a group that small everyone gets a response, so it\'s where members felt most supported.') },
          { t: 'diagram', kind: 'triad', caption: b('示意圖 · 依研究簡報重繪', 'Diagram · redrawn from the research deck') },
          { t: 'p', text: b('但社群從 LINE 搬到 Discord 後，三人小組從固定成員改成隨機配對，累積起來的熟悉感和連結跟著變弱。', 'After the community moved from LINE to Discord, practice groups switched from fixed members to random matching, and the familiarity people had built up weakened.') },
          { t: 'h3', text: b('離開的人：卡在新手期', 'Why people leave: stuck as newcomers') },
          { t: 'table', head: [b('原因', 'Reason'), b('受訪者的狀況', 'What we heard'), b('對應建議', 'Recommendation')], rows: [
            [b('找不到自己的角色', "Can't find a role"), b('不知道讀書會要做什麼，旁聽也有壓力', 'Unsure what to do in reading groups; even listening feels like pressure'), b('活動前先說明角色與要做的事', 'Explain roles and tasks before each session')],
            [b('頻道太多太難懂', 'Too many unclear channels'), b('二、三十個頻道，名稱遊戲化，看不出用途', 'Twenty to thirty channels with playful names that hide their purpose'), b('先選興趣，再開啟相關頻道', 'Pick interests first, then unlock related channels')],
            [b('回饋不夠深', 'Shallow feedback'), b('目的性強的人覺得得不到有深度的知識回饋', 'Goal-driven members found too little depth'), b('活動後整理知識重點', 'Summarize key takeaways after sessions')],
            [b('沒有被回應', 'No one responds'), b('發言沒人接，感受不到陪伴', 'Posts go unanswered, so no one feels accompanied'), b('安排熱心成員主動關心新人', 'Assign welcoming members to check on newcomers')],
          ], note: b('依流失組研究整理', "From the lapsed-member team's findings") },
          { t: 'h3', text: b('沒進來的人：先信任，才會加入', 'Why people never join: trust comes first') },
          { t: 'p', text: b('潛在用戶是透過信任的朋友、網紅（KOL）或平台認識新社群；他們用自己的問題去搜尋（例如「想改善親子關係」），不會用「原子習慣」（一本暢銷書提出的習慣養成方法）這類專有名詞。所以對外溝通時，要用他們會搜尋的問題來描述，例如親子關係，少用方法的名稱。', 'Prospective members find communities through trusted friends, creators, or platforms, and they search using their own problems (like "improve my relationship with my kids"), not terms like "atomic habits." So messaging should describe the problems they search for, such as family relationships, and rely less on the method\'s name.') },
        ],
      },
      {
        id: 'recommendations', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('建議', 'Recommendations'),
        title: b('把三人小組的力量放大到整個社群', 'Scale what works in the three-person groups'),
        blocks: [
          { t: 'decision', q: b('講師顧不到每個人，怎麼讓新人不掉隊？', "The instructor can't reach everyone. How do newcomers keep up?"), a: b('培養學長姊帶學弟妹', 'Train experienced members to guide newcomers'), text: b('先由講師帶三人小組，把練習得好的學員培養成引導者，再由引導者帶新進成員，講師逐步退到旁邊觀察。', 'The instructor leads early groups, trains strong members as guides, and guides then lead newcomers while the instructor steps back to observe.') },
          { t: 'diagram', kind: 'mentor', caption: b('示意圖 · 依研究建議重繪', 'Diagram · redrawn from the recommendations') },
          { t: 'decision', q: b('新人看不懂 Discord 怎麼辦？', "Newcomers can't navigate Discord. What then?"), a: b('頻道分層開啟', 'Unlock channels in layers'), text: b('第一層只給大分類，選了感興趣的主題（例如讀書會）才開啟相關子頻道。', 'Show only top categories first; related sub-channels open once someone picks a topic, such as reading groups.') },
          { t: 'decision', q: b('兩種新手要的不一樣？', 'Do two kinds of newcomers want different things?'), a: b('分開設計支持方式', 'Support them differently'), text: b('目的性強的人給清楚的指引和重點整理；想慢慢探索的人給陪伴和固定小組。', 'Goal-driven newcomers get clear guides and summaries; explorers get companionship and a fixed small group.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('第一次做研究學到的四件事', 'Four lessons from my first research project'),
        blocks: [
          { t: 'p', text: b('2022 年 12 月，我們向業主簡報研究結果。三組的發現整理成三類建議：怎麼幫新成員融入社群、社群裡要提供哪些內容，以及平常怎麼經營社群。這是我第一次完整走過使用者研究，現在回頭看，有四件事會做得不一樣。', "We presented our research to the client in December 2022. We synthesized the three teams' findings into three areas of recommendations: how to help newcomers settle into the community, what content the community should offer, and how to run it day to day. It was my first full research project, and looking back there are four things I'd do differently.") },
          { t: 'h3', text: b('1. 用實際行為分群，不用「聽過什麼」分群', '1. Segment by behavior, not by what people have heard of') },
          { t: 'p', text: b('招募問卷用「有沒有聽過原子習慣」分流，結果把一些參加過社群、但沒聽過這個詞的人篩掉了。下次我會用最後一次參加活動的時間、互動頻率、有沒有付費來分群。', "Our screener routed people by whether they'd heard of \"atomic habits,\" which filtered out some who had joined the community but didn't know the term. Next time I'd segment by last activity, interaction frequency, and payment.") },
          { t: 'figure', src: ['img/case5/survey-routing-draft.webp'], alt: b('招募問卷分流草稿', 'Draft screener routing'), caption: b('當時的問卷分流草稿 · 以「是否聽過原子習慣」作為分流條件', 'Our original screener routing draft, branching on "heard of atomic habits"') },
          { t: 'h3', text: b('2. 每個結論都標出樣本與證據強度', '2. Label every conclusion with sample and strength') },
          { t: 'p', text: b('2026 年用 AI 協助重新檢視這份研究時，回頭重看當年的問卷資料。認為「做決定時邏輯比心情重要」的比例如下：', 'Revisiting the study with AI in 2026, I reread our survey data. The share who said logic matters more than feelings in big decisions:') },
          { t: 'list', items: [b('聽過原子習慣但沒實踐的人：70%（14/20）', 'People who\'d heard of atomic habits but didn\'t practice them: 70% (14/20)'), b('真正在實踐的人：25%（3/12）', 'Active practitioners: 25% (3/12)')] },
          { t: 'p', text: b('這比我們當年引用的圖更能檢驗業主的客群假設，但它量的是「有沒有實踐原子習慣」，不是「有沒有留在社群」，樣本也小。下次每個結論都會寫出樣本數和證據強度。', 'That tests the client\'s audience assumption better than the chart we used, but it measures practicing the method, not staying in the community, and the sample sizes are small. Next time every conclusion gets a sample size and an evidence rating.') },
          { t: 'diagram', kind: 'bars', caption: b('示意圖 · 2026 年回頭重看問卷資料重繪，非當年研究結論', 'Diagram · redrawn in 2026 from the survey data, not a 2022 finding') },
          { t: 'h3', text: b('3. 建立信任，但不引導答案', '3. Build rapport without leading') },
          { t: 'p', text: b('同事回饋我在訪談中能很快讓受訪者放鬆（評語在「關於我」頁），但這次也學到寒暄和引導的界線：開場稱讚受訪者、分享自己的看法，都可能讓對方順著訪談者的方向回答。下次會從「最近一次發生的具體事件」問起。', "Colleagues have said I put participants at ease quickly (see the About page), but I learned where small talk ends and leading begins: praising a participant or sharing my own view at the start can steer their answers. Next time I'd open with the most recent concrete event.") },
          { t: 'h3', text: b('4. 研究同意和公開展示是兩件事', '4. Consent to participate is not consent to publish') },
          { t: 'p', text: b('受訪者同意的是參與研究，不代表同意公開展示。下次我會把錄音、引用、公開展示分開取得同意；對外分享研究過程時，只放去識別化的整理結果。', "Agreeing to take part in research isn't agreeing to be published. Next time I'd get separate consent for recording, quoting, and publishing, and share the process externally only as de-identified summaries.") },
        ],
      },
    ],
  },
  {
    slug: 'memory',
    no: '06',
    period: '2026.11 — NOW',
    eyebrow: 'Case 06 · Product Design · AI Tool',
    title: b('工作記憶助理：\n會議中記得準，會議後查得到', 'Work Memory Agent:\naccurate during meetings, searchable afterward'),
    cardTitle: b('工作記憶助理：記錄會議、提示任務、整理成可備查的摘要', 'Work Memory Agent: record meetings, surface tasks, keep searchable summaries'),
    lead: b(
      '開完會，常記不清誰說了什麼、決定了什麼。我用 AI 開發了一個會議助理：三個本機模型一起辨識中英夾雜的會議，提到相關專案時跳出任務提示，會議後整理成附原句的摘要與待辦；介面也重新設計過，讓不懂技術的同事也看得懂。',
      'After meetings, I often couldn\'t remember who said what, or what we\'d actually decided. So I built a meeting assistant with AI: three on-device models transcribe meetings with mixed Chinese and English, related tasks pop up when a project is mentioned, and each meeting turns into a summary and to-do list backed by source quotes. I also redesigned the interface so colleagues without a technical background can use it.',
    ),
    chips: ['Product Design', 'AI Tool', 'Speech-to-text', 'Design System'],
    meta: [
      [b('我的角色', 'My role'), b('需求定義、架構構想、介面與視覺決策、驗收；程式由 AI 實作', 'Defined needs, proposed the architecture, made the UI and visual calls, and signed off on the work; AI wrote the code')],
      [b('產品', 'Product'), b('個人用 macOS 桌面 App', 'Personal macOS desktop app')],
      [b('期間', 'Period'), b('2026.11 — 現在', '2026.11 — now')],
      [b('狀態', 'Status'), b('開發中 · 分辨講者規劃中 · 尚未在真實會議完整驗收', 'In development · speaker identification planned · not yet fully tested in live meetings')],
    ],
    kpis: [
      ['3', b('個本機模型一起辨識', 'on-device models transcribing together'), b('Whisper large-v3-turbo、Breeze-ASR-25、TEA-ASR-1.1 都在電腦本機執行。三個模型錯的地方各不相同，AI 只能從三個版本和公司字典裡挑，不能自己改寫。', 'Whisper large-v3-turbo, Breeze-ASR-25, and TEA-ASR-1.1 all run on the computer. They make different mistakes, and AI may only select from the three versions and the company glossary; it can\'t rewrite the text.')],
      ['3.2 秒', b('內出現 95% 的即時字幕', 'for 95% of live captions to appear'), b('同一場 9 分鐘會議重播量測：修正前 6.7 秒、最慢 17 秒；修正後 3.2 秒、最慢 5.9 秒。', 'Measured by replaying the same 9-minute meeting: 6.7 s before (slowest 17 s), 3.2 s after (slowest 5.9 s).')],
      ['~20', b('個設計變數取代約 90 種寫死顏色', 'design tokens replacing ~90 hard-coded colors'), b('設計變數是統一管理顏色、字級的設定。墨綠單一色系加灰階，字級收斂成 4 種，淺深兩色的文字對比都達 4.5:1。', 'Design tokens are shared settings for color and type. One deep-green hue plus grays, four type sizes, and 4.5:1 text contrast in both light and dark modes.')],
    ],
    hero: { kind: 'diagram', diagram: 'memflow', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    card: { kind: 'diagram', diagram: 'memflow', label: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    webOnly: true,
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('開完會，記不清誰說了什麼、決定了什麼', 'After meetings, I couldn\'t remember who said or decided what'),
        blocks: [
          { t: 'p', text: b('最常遇到的狀況是，被追問「那時候為什麼這樣決定」卻答不出來。為了理清需求，請 AI 用單選題「拷問」自己，兩輪共 8 題，把一長串想做的功能排出先後，定出工具的核心任務：', 'What kept happening was being asked "why did we decide that?" and having no answer. I had AI grill me with single-choice questions, eight across two rounds, to rank a long wish list and set the tool\'s core tasks:') },
          { t: 'table', head: [b('時機', 'When'), b('核心任務', 'Core task'), b('目前狀態', 'Status')], rows: [
            [b('會議中', 'During'), b('分辨角色，準確記錄會議內容', 'Identify speakers and record accurately'), b('準確記錄已完成；分辨講者規劃中', 'Accurate recording done; speaker identification planned')],
            [b('會議中', 'During'), b('提到相關專案或任務時，顯示多個相關任務提示', 'Show several related tasks when a project or task comes up'), b('已完成，還沒在真實會議完整驗收', 'Done; not yet fully tested in live meetings')],
            [b('會議後', 'After'), b('整理內容，做成摘要與任務，備查', 'Organize the content into a summary and tasks for later lookup'), b('已完成：重點、待辦、未決與決策，都附原句', 'Done: highlights, to-dos, open questions, and decisions, each with a source quote')],
          ] },
          { t: 'callout', title: b('目標', 'Goal'), text: b('先讓逐字稿正確，之後的任務提示和會議摘要才有可靠的依據。', 'Get the transcript right first, so task hints and meeting summaries are built on reliable text.') },
          { t: 'p', text: b('但第一版的逐字稿「十分不正確」，中英夾雜尤其差。逐字稿不可信，上層功能都沒有意義，所以我先處理辨識。', 'But the first transcripts were badly wrong, especially with mixed Chinese and English. Without a trustworthy transcript nothing built on top would matter, so I tackled recognition first.') },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我定義需求、提出架構構想、決定介面與視覺，並用自己的會議驗收；程式由 Claude 實作，計劃另外請 Codex 審閱。', 'I defined the need, proposed the architecture, made the interface and visual decisions, and tested with my own meetings. Claude wrote the code, and Codex reviewed the plan.') },
        ],
      },
      {
        id: 'recognition', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('辨識架構', 'Recognition'),
        title: b('用三個模型和公司字典提高辨識準確度', 'Three models and a company glossary for accuracy'),
        blocks: [
          { t: 'decision', q: b('辨識不準怎麼辦？', 'Recognition is wrong. Now what?'), a: b('多個模型一起辨識，再由 AI 對照公司字典整理', 'Run several models, then let AI reconcile them with a glossary'), text: b('這是我提出的構想。用自己的會議錄音比較後，三個新模型都遠勝原本的小模型，Breeze 和 TEA 對中英夾雜最好；而且三個模型錯的地方各不相同，正好互補。', 'This was my idea. Tested on my own meeting recordings, all three new models far outperformed the original smaller model, with Breeze and TEA best on mixed Chinese and English, and each made different mistakes, so they cover for each other.') },
          { t: 'decision', q: b('會議中要快、會議後要準，怎麼兼顧？', 'Fast during, accurate after. How?'), a: b('分成兩層處理', 'Split it into two layers'), text: b('會議中只做粗略快速的修正，讓字幕先出來；會議後再由三個模型整場重轉，先通讀全場，再對照字典逐批精修。', 'During the meeting, only quick fixes so captions appear fast; afterward, all three models re-transcribe the whole meeting, which is reviewed in full and then refined batch by batch against the glossary.') },
          { t: 'decision', q: b('AI 會不會把句子改得很通順但是錯的？', 'Could AI make sentences fluent but wrong?'), a: b('限制 AI 只能挑，不能改寫', 'Let AI choose, never rewrite'), text: b('AI 只能從三個模型的版本和字典裡挑出組合；沒把握的地方就列為「待確認詞」，不自己猜。', 'AI may only combine what the three models heard and what the glossary contains; anything uncertain is flagged for review instead of guessed.') },
          { t: 'diagram', kind: 'correction', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'h3', text: b('公司字典', 'The company glossary') },
          { t: 'p', text: b('我指定從工作資料和官網的酒店資料整理字典，共 774 個詞，另有 3,800 間酒店的參考清單。實測時，被聽成「力力子、萬號、卡賠、香港回禮、波西蛇」的詞，被認回立鼎世、萬豪、Capella、Rosewood、Four Seasons 這幾個酒店品牌。', 'I had the glossary built from work material and hotel data on our website: 774 terms plus a reference list of 3,800 hotels. In testing, words misheard as nonsense were correctly recognized as the hotel brands Leading Hotels of the World, Marriott, Capella, Rosewood, and Four Seasons.') },
        ],
      },
      {
        id: 'hints', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('任務提示', 'Task hints'),
        title: b('提到相關專案時，旁邊就跳出相關任務', 'Mention a project, and related tasks appear'),
        blocks: [
          { t: 'p', text: b('原本的計劃是從會議裡慢慢累積任務資料。我直接提供團隊每週更新的任務表和自己的工作日誌當來源，任務庫因此當天就建好，不必從零開始。', 'The plan was to build up task data from meetings over time. Instead I pointed it at the team\'s weekly-updated task sheet and my own work log, so the task library was ready the same day.') },
          { t: 'decision', q: b('開會時怎麼知道該提示哪些任務？', 'How does it know which tasks to show?'), a: b('比對最近一分鐘的談話，在本機完成', 'Match the last minute of talk, entirely on the computer'), text: b('每段字幕都和最近一分鐘的談話一起比對任務庫，最多顯示 5 張相關任務卡，可以釘選；比對全程在本機，不呼叫 AI。沒在開會時，同一個區塊可以手動查詢。', 'Each caption segment, together with the last minute of talk, is matched against the task library, showing up to 5 related task cards that can be pinned; matching runs locally without calling AI. Outside meetings, the same panel works as manual search.') },
          { t: 'p', text: b('第一次用錄好的會議檢查時，提示欄在閒聊中也跳出無關的卡片，雜訊比幫助多。我把這個修正提前處理，細節見「實作與驗證」。', 'The first check with recorded meetings showed irrelevant cards popping up during small talk, more noise than help. I moved that fix forward; details are under Build.') },
        ],
      },
      {
        id: 'plan', caps: ['pm'], tags: ['PM'], toc: b('計劃與挑戰', 'Planning'),
        title: b('計劃越寫越大時，主動找人挑戰', 'When the plan grew, I asked to be challenged'),
        blocks: [
          { t: 'p', text: b('下一步要把工具改成辦公室同事也能用的版本，計劃從 v1 一路改到 v5。計劃變大後，我先要 AI 自省整個計劃，再請另一個 AI（Codex）當挑戰者審閱。', 'The next step was turning the tool into something office staff could use, and the plan went from v1 to v5. As it grew, I first asked AI to review its own plan, then asked another AI, Codex, to review it as a challenger.') },
          { t: 'diagram', kind: 'plan', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'p', text: b('兩次挑戰改變了順序：核心需求「決策擷取」從計劃的後段提前到前段，錄音保護也提前到最前面。', 'Both reviews changed the order: the core need, decision extraction, moved from late in the plan to near the start, and recording safety moved to the front.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面收斂', 'Design'),
        title: b('讓辦公室同事也看得懂的介面', 'An interface office colleagues can understand'),
        blocks: [
          { t: 'p', text: b('第一版是用工程角度做的。我要求用介面設計師的方法重新盤點：情境走查、內容盤點、使用性原則，看過 7 個頁面，找出 7 個跨頁問題。', 'The first version was built from an engineering angle. I had it re-audited the way an interface designer would, with scenario walkthroughs, a content inventory, and usability heuristics. It reviewed 7 pages and found 7 issues that span multiple pages.') },
          { t: 'h3', text: b('首頁：只留開會時用得到的東西', 'Home: only what a meeting needs') },
          { t: 'p', text: b('原本首頁有寫死的日期、8 張示意資料卡和整排工程說明。改版後拿掉這些，依狀態切換：會議前是查詢、準備開會、我的未完成；會議中是錄音列、字幕與相關任務。', 'The old home page had a hard-coded date, 8 placeholder cards, and rows of engineering notes. They\'re gone; the page now switches by state. Before a meeting: search, meeting prep, and my open items. During a meeting: the recording bar, captions, and related tasks.') },
          { t: 'figure', src: ['img/case6/home-before.webp'], alt: b('改版前的首頁：寫死日期與多張說明卡', 'Old home page with a fixed date and many info cards'), caption: b('工作記憶助理實際畫面 · 改版前的首頁 · 卡片是 App 內建的示意資料', 'Work Memory Agent screenshot · old home page · cards are built-in sample data') },
          { t: 'figure', src: ['img/case6/home-after.webp'], alt: b('改版後的首頁（會議前）：查詢、準備開會、我的未完成、最近的會議', 'New home page before a meeting: search, prepare, open items, recent meetings'), caption: b('工作記憶助理實際畫面 · 改版後的首頁（會議前）· 清單含同事與客戶資訊，已遮蔽', 'Work Memory Agent screenshot · new home page, before a meeting · lists hidden for privacy') },
          { t: 'h3', text: b('字幕：糾正後原地覆蓋', 'Captions: corrections replace the draft') },
          { t: 'p', text: b('原本三個模型的字幕並排顯示。當時的想法是「我還是需要及時看到有東西出來」，參考 Notion 會議記錄，提出單欄字幕：先出草稿，AI 糾正後原地替換，行尾標示草稿、已糾錯或有疑點；三個模型的原文收進可展開區。', 'Captions from the three models used to sit side by side. I needed to see text right away, so, taking Notion\'s meeting notes as a reference, I proposed a single column: a draft first, replaced in place once AI corrects it, with each line marked as a draft, corrected, or uncertain. The raw model output moved into an expandable area.') },
          { t: 'figure', src: ['img/case6/captions-before.webp'], alt: b('改版前：三個模型的逐字稿並排顯示，右側是相關任務', 'Before: three model transcripts side by side, related tasks on the right'), caption: b('工作記憶助理實際畫面 · 改版前：三個模型並排的即時逐字稿與相關任務 · 以系統語音模擬會議', 'Work Memory Agent screenshot · before: three transcripts side by side with related tasks · simulated meeting audio') },
          { t: 'figure', src: ['img/case6/captions-after.webp'], alt: b('改版後：單欄字幕，行尾標示草稿、已糾錯或有疑點，右側是相關任務與決策', 'After: one caption column with status per line, related tasks and decisions on the right'), caption: b('工作記憶助理實際畫面 · 改版後：單欄字幕與相關任務 · 會議內容已遮蔽', 'Work Memory Agent screenshot · after: single caption column and related tasks · meeting content hidden') },
          { t: 'h3', text: b('設定：工程欄位收進進階', 'Settings: engineering fields tucked away') },
          { t: 'p', text: b('我決定工程欄位「全部收進進階，不刪」，所以這些欄位都移進「進階」區塊；設定頁也重新分成幾個區塊，並寫明逐字稿會送到哪裡。', 'Engineering fields were moved into an Advanced section rather than deleted, settings were grouped, and the page now states where transcripts are sent.') },
          { t: 'figure', src: ['img/case6/settings-before.webp'], alt: b('改版前的設定頁：Provider、Local command 等工程欄位直接攤開', 'Old settings page with engineering fields such as Provider and Local command'), caption: b('工作記憶助理實際畫面 · 設定頁改版前', 'Work Memory Agent screenshot · settings before') },
          { t: 'figure', src: ['img/case6/settings-after.webp'], alt: b('改版後的設定頁：工程欄位收進進階，並寫明逐字稿會送到哪裡', 'New settings page: engineering fields under Advanced, with where transcripts are sent'), caption: b('工作記憶助理實際畫面 · 設定頁改版後', 'Work Memory Agent screenshot · settings after') },
          { t: 'h3', text: b('視覺：單一色系、少粗體', 'Visuals: one hue, fewer bold weights') },
          { t: 'compare', title: b('過程證據：第一版樣張 vs 我的修改原則', 'Evidence: first specimen vs my revision'), aiLabel: b('第一版樣張', 'First specimen'), meLabel: b('我的修改原則', 'My direction'),
            ai: b('macOS 藍色當強調色；「未確認」「附條件」「資訊」各用不同顏色；粗體很多。', 'macOS blue as the accent; "unconfirmed," "conditional," and "info" each in a different color; lots of bold.'),
            me: b('「顏色不要太多種，用單一色系深淺變化」「字體不要太多粗體字，感覺整個很厚重，又不知道畫面重點」。保留原本的墨綠，標籤改成灰階，粗體只留標題。第二版一次通過，直接套用。', '"Not too many colors, use shades of one hue." "Not so much bold; it feels heavy and hides what matters." I kept the original deep green, turned tags gray, and limited bold to headings. The second version passed on the first try.'),
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
          { t: 'p', text: b('確認後會保存前後 15 秒的原音，被追問時可以直接回聽；沒確認的候選 30 天後自動封存。', 'Once confirmed, 15 seconds of audio on each side are kept for replay; unconfirmed candidates are archived after 30 days.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('沒有會議，也先用錄好的會議驗收', 'No meeting? Test with recorded ones'),
        blocks: [
          { t: 'p', text: b('檢查點原本要等真實會議。當下沒有會議，我請 AI 用錄好的會議重播代跑，結果發現會議中提示欄「雜訊多於幫助」：閒聊 3 分鐘就跳出 4 張無關的任務卡。這個修正因此從計劃的後段提前處理，修完後雜訊降到 0 張。', 'The checkpoint was originally planned for live meetings. With none scheduled, I had AI replay recorded ones instead, and it showed the in-meeting hint panel did more harm than good: 4 irrelevant task cards in 3 minutes of small talk. The fix moved up from late in the plan and brought the noise down to zero.') },
          { t: 'diagram', kind: 'latency', caption: b('示意圖 · 依重播量測數據重繪', 'Diagram · redrawn from replay measurements') },
          { t: 'p', text: b('字幕延遲也是用同一種方法量：重播同一場 9 分鐘會議，95% 段落的草稿延遲從 6.7 秒降到 3.2 秒。另外，錄音每 2 秒寫進硬碟，當機或關掉視窗都不會遺失。', 'Caption delay was measured the same way, replaying one 9-minute meeting: the 95th-percentile draft delay fell from 6.7 to 3.2 seconds. Recordings are also written to disk every 2 seconds, so a crash or closed window loses nothing.') },
          { t: 'table', rows: [
            [b('需求', 'Needs'), b('用單選題拷問、整理功能排序', 'Quiz me with single-choice questions, rank features'), b('作答、定出核心需求', 'Answer and set the core need')],
            [b('實作', 'Build'), b('寫程式、跑測試、打包', 'Write code, run tests, package'), b('提出架構構想、決定介面與視覺', 'Propose the architecture, decide UI and visuals')],
            [b('驗收', 'Verify'), b('重播錄音代跑檢查點、量延遲', 'Replay recordings, measure delay'), b('用自己的會議回饋、決定下一步順序', 'Test in my own meetings, choose what comes next')],
          ] },
          { t: 'callout', title: b('這些數字的限制', 'Limits of these numbers'), text: b('代跑時，決策的標註和擷取都由 AI 做，延遲也是在同一段錄音上調整與量測，所以只代表方向對了；真實會議的效果還要再驗證。', 'In the replays, AI both labeled and extracted the decisions, and delay was tuned and measured on the same recording, so they suggest the approach is working, but live meetings still need to confirm it.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('目前完成的部分', 'What is done so far'),
        blocks: [
          { t: 'p', text: b('目前已完成的項目：', 'Done so far:') },
          { t: 'list', items: [b('三模型辨識與兩段式糾錯', 'Three-model recognition with two-layer correction'), b('會議後的決策擷取', 'Post-meeting decision extraction'), b('會議前與會議中兩種首頁', 'Before- and during-meeting home states'), b('單一色系的視覺系統', 'A one-hue visual system')] },
          { t: 'p', text: b('這些都已打包安裝在自己的電腦上。和第一版相比，在自己的會議裡感受到辨識正確率大幅提升，但還沒有量化。', 'All of this is packaged and installed on my computer. In my own meetings, recognition seems much better than in the first version, though it hasn\'t been quantified yet.') },
          { t: 'h3', text: b('下一步', 'Next') },
          { t: 'p', text: b('接下來會用真實會議驗收任務提示和會議後整理，並補上核心任務中還沒做的分辨講者：先分出「我」和「別人」，再做單場的講者分群。之後再收斂導覽、加入統一搜尋。', 'Next, I\'ll validate task hints and post-meeting summaries in real meetings and add the missing core task, speaker identification: first distinguishing me from other speakers, then grouping speakers within a meeting. After that come simpler navigation and unified search.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次會一開始就固定一段錄音和人工校對稿當基準，量出辨識正確率；也會把驗收用和調整用的句子分開，並照和 AI 協作的實際速度來估工時。', 'Next time I\'d set a baseline from day one, a fixed recording with a hand-checked transcript, to measure accuracy. I\'d also keep test sentences separate from tuning sentences, and plan time around the real pace of working with AI.') },
        ],
      },
    ],
  },
];

/** PDF 作品集摘要用：排除只放網站的案例 */
export const printCases = cases.filter((c) => !c.webOnly);

export function neighbors(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return {
    prev: cases[(i - 1 + cases.length) % cases.length],
    next: cases[(i + 1) % cases.length],
  };
}
