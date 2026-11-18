import type { T } from '../i18n';

const b = (zh: string, en: string): T => ({ 'zh-tw': zh, en });

export type Cap = 'pm' | 'ui' | 'fe';

export type DiagramKind = 'channels' | 'rules' | 'funnel' | 'groups' | 'triad' | 'mentor' | 'bars' | 'memflow' | 'correction' | 'plan' | 'latency';

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

const realShot = b('WOTA 正式站實際畫面 · 本人參與設計與規格，非獨立完成', 'Live WOTA product · I contributed design and specs, not built solo');
const realShotShort = b('WOTA 正式站實際畫面', 'Live WOTA product');

export const cases: Case[] = [
  {
    slug: 'booking',
    no: '01',
    period: '2023 — NOW',
    eyebrow: 'Case 01 · Product Design · Multi-platform',
    title: b('WOTA 跨平台旅宿訂房：\n三個前台，一套一致的體驗', 'WOTA cross-platform booking:\nthree channels, one consistent experience'),
    cardTitle: b('WOTA 跨平台旅宿訂房體驗', 'WOTA cross-platform hotel booking'),
    lead: b(
      '從主導官網 3.0 改版，到推出 LINE LIFF 訂房。官網、LIFF、白牌三個前台共用同一個後端；我負責定義流程、元件規則與語系檢查，讓訂房與會員在不同平台上保持一致。',
      'From leading the website redesign (v3.0) to launching hotel booking inside LINE (a LIFF mini-app). Three customer-facing channels share one backend; I set the flows, component rules, and language checks that keep booking and membership consistent across them.',
    ),
    chips: ['Product Design', 'UX Flow', 'i18n', 'Frontend'],
    meta: [
      [b('我的角色', 'My role'), b('官網 3.0 產品規劃與 UI/UX 主導 · LIFF UI、前端協作與驗收', 'Led website v3.0 planning and UI/UX · LIFF UI, frontend, and QA')],
      [b('產品', 'Product'), b('高端旅宿訂房平台', 'Luxury hotel booking')],
      [b('期間', 'Period'), b('2023.03 — 現在', '2023.03 — now')],
      [b('平台', 'Platforms'), b('官網 · LIFF · 白牌，共用後端與後台', 'Web · LIFF · white label, one shared backend and admin')],
    ],
    kpis: [
      ['13', b('個前台模組完成 UI 設計', 'storefront modules designed'), b('官網 3.0 的 13 個前台模組，UI 設計全部完成，每頁都附給工程的行為說明。', 'All 13 storefront modules of website v3.0 have finished UI design, each page with behavior notes for engineering.')],
      ['11', b('個共用元件庫', 'shared component libraries'), b('官網 3.0 元件頁共 735 個元件與變體，拆成 VI、字級、色彩、圖示、Email、元件等 11 個元件庫，官網、LIFF 與通知信都用同一套。', 'The v3.0 component page holds 735 components and variants, organized into 11 libraries such as VI, typography, color, icons, email, and components, shared by the website, LIFF, and notification emails.')],
      ['3,548', b('個字串四語同步', 'strings synced in 4 languages'), b('官網的 3,548 個文案字串同步成 Figma 四語系變數；2,615 個 Figma 文字全部綁定，已綁定文字的四語不一致為 0。', 'The site\'s 3,548 copy strings were synced into four-language Figma variables; all 2,615 Figma text layers are bound, with zero mismatches.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-home.jpg',
      alt: b('WOTA 官網首頁：全版旅宿照片與搜尋列', 'WOTA homepage with full-bleed hotel photo and search bar'),
      caption: realShot,
    },
    card: { kind: 'phones', src: ['img/real/liff-home.jpg', 'img/real/liff-room-list.jpg'], label: b('LINE LIFF 正式站畫面', 'Live LINE LIFF screens') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('訂房和會籍要人工處理，三個前台說法又不一致', 'Manual bookings and memberships, and three storefronts out of sync'),
        blocks: [
          { t: 'p', text: b('舊官網以內容和文章為主，訂房與會員流程分散，很多客製需求要靠人工處理。公司希望引導客人加入會員後自行訂房。', 'The old site was content-first. Booking and membership flows were scattered and many requests were handled manually. The company wanted members to book without manual help.') },
          { t: 'p', text: b('之後 LINE LIFF（在 LINE 裡打開的訂房網頁）和銀行白牌（掛銀行品牌的訂房站）陸續加入。三個前台共用同一個後端，但各有不同的使用情境與技術限制，只要流程、文案或規則對不上，客人就會在不同入口看到不同說法。', 'Then a LINE mini-app (LIFF) and bank white-label sites joined. All three share one backend but have different contexts and limits, so any drift in flow, copy, or rules shows guests conflicting answers.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓客人不論從哪個入口進來，都能用一致的流程完成搜尋、訂房與會員操作，並且支援繁中、簡中、英文、日文 4 種語系。', 'Whichever door guests use, they search, book, and manage membership through the same flow, in Traditional Chinese, Simplified Chinese, English, and Japanese.') },
          { t: 'diagram', kind: 'channels', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('時間軸', 'Timeline') },
          { t: 'versions', items: [
            ['2023', b('主導官網 3.0 產品規劃與全站 UI/UX：研究競品、建立參考庫、自建進度表逐頁控管', 'Led website v3.0 planning and UI/UX: competitive research, reference library, page-by-page tracking')],
            ['2024', b('主持 UAT（上線前驗收）收斂 30 項問題，官網 3.0 上線', 'Ran UAT on 30 issues; website v3.0 launched')],
            ['2025', b('整理四語系文案檔與多語系（i18n）作業流程；LIFF 登入註冊開發', 'Four-language copy files and an i18n process; LIFF sign-in work')],
            ['2026', b('LINE LIFF 5 月上線、7 月加入信用卡購買會籍與英文版；Figma 四語系整理', 'LINE LIFF launched in May, adding card membership purchase and English in July; Figma four-language cleanup')],
          ] },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('改版要怎麼控管 79 個頁面？', 'How do you track a 79-page redesign?'), a: b('自建進度表，每頁走同一條流程', 'One tracker, one path for every page'), text: b('每頁都依「UI 初版 → 定稿 → Jira → 桌機與手機切版 → 串 API → 驗收」推進，2023 年 10 月時 79 頁中 70 頁完成初版、49 頁定稿。', 'Every page moved through first draft → final → Jira → desktop and mobile build → API → QA. By October 2023, 70 of 79 pages had drafts and 49 were final.') },
          { t: 'decision', q: b('LIFF 的文案要自己寫，還是跟官網一致？', 'Should LIFF have its own copy or match the website?'), a: b('以官網用語為準，只有 LIFF 專屬功能才自訂', 'Website wording is the source of truth; LIFF-only features get custom copy'), text: b('比對兩邊 774 個 i18n key，標出一致、有差異、無法配對三種狀態，再系統化修正。', 'I compared 774 i18n keys on both sides, marked each as matched, different, or unmatched, then fixed them systematically.') },
          { t: 'decision', q: b('客人習慣用官網，怎麼讓他們改用 LINE？', 'Guests prefer the website. How do we move them to LINE?'), a: b('不強迫切換，在既有接觸點加入 LINE 入口', 'No forced switch; add LINE entry points where guests already are'), text: b('在訂單完成頁與入住提醒信加上「加入 LINE，隨時查看訂單」的引導，並與行銷、銷售團隊協同素材與追蹤方式。', 'Added "Join LINE to track your booking" prompts on the confirmation page and check-in reminder emails, aligned with marketing and sales on assets and tracking.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面設計', 'Design'),
        title: b('一套元件，撐起官網、LIFF 與通知信', 'One component system across web, LIFF, and email'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的 Figma 檔共 28 頁。光是其中 12 個模組頁，就有約 310 個桌機與手機畫面，每頁都附給工程的行為說明。735 個元件與變體整理成 11 個共用元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma file has 28 pages. Just 12 of its module pages hold about 310 desktop and mobile screens, each with behavior notes for engineering. 735 components and variants are organized into 11 shared libraries used by the website, LIFF, and notification emails.') },
          { t: 'figure', src: ['img/real/official-room-list.jpg'], alt: b('WOTA 官網房型列表', 'WOTA website room list'), caption: realShotShort },
          { t: 'p', text: b('LIFF 是在 LINE 裡打開的網頁，畫面更窄、操作更依賴大拇指。設計延續官網的高端調性，Figma 共 24 頁、約 238 個手機畫面、259 個元件，並寫成設計系統手冊 v1.3。', 'LIFF runs inside LINE: narrower and thumb-first. The design carries the website\'s luxury tone across 24 Figma pages, about 238 mobile screens, and 259 components, documented in design system v1.3.') },
          { t: 'figure', phone: true, src: ['img/real/liff-home.jpg', 'img/real/liff-hotel-detail.jpg', 'img/real/liff-room-list.jpg'], alt: b('LINE LIFF 首頁、酒店詳情與房型列表', 'LINE LIFF home, hotel detail, and room list'), caption: realShotShort },
          { t: 'h3', text: b('可及性與數據', 'Accessibility and data') },
          { t: 'p', text: b('依 WCAG 檢查對比度與可讀性。上線後訂房流程卡在哪一步，我在 2026 年用 Clarity 錄影與熱點圖做了完整分析，詳見 Case 04。', 'Checked contrast and legibility against WCAG. Where the live booking flow gets stuck, I later analyzed with Clarity recordings and heatmaps in 2026; see Case 04.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('從 UAT 到四語同步，把設計和程式對齊', 'From UAT to four-language sync, keeping design and code aligned'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的切版由工程師完成，我負責逐頁比對設計還原度：2023 年 8 月到 2024 年 3 月留下 54 張修正截圖，UAT 回報 30 項並收斂。2026 年起，我搭配 AI 參與 LIFF 前端，清掉 250 多處不一致的樣式，也整理出 Figma、程式、文件三方衝突 42 項。', 'Engineers built website v3.0; I checked it against the design page by page, logging 54 correction screenshots from Aug 2023 to Mar 2024 and closing 30 UAT issues. From 2026 I worked on the LIFF frontend with AI, cleaning up 250+ inconsistent styles and listing 42 conflicts between Figma, code, and docs.') },
          { t: 'table', rows: [
            [b('規格', 'Specs'), b('整理跨平台需求、比對官網與 LIFF 文件差異', 'Summarize cross-platform needs, diff website and LIFF docs'), b('決定哪些流程要一致、哪些保留平台差異', 'Decide which flows must match and which stay platform-specific')],
            [b('文案', 'Copy'), b('產出 774 個 i18n key 的比對表與建議對照', 'Generate the 774-key comparison and suggested matches'), b('判斷差異是否合理、親自審核 138 筆判定', 'Judge each difference; personally reviewed 138 decisions')],
            [b('驗收', 'QA'), b('整理測試案例與 Slack 回報的問題', 'Compile test cases and issues reported in Slack'), b('實際操作驗收、判斷優先順序與是否上線', 'Hands-on QA, prioritize, and decide go or no-go')],
          ] },
          { t: 'h3', text: b('四語系文案整理', 'Four-language copy cleanup') },
          { t: 'stats', items: [['3,548', b('個官網字串同步成 Figma 四語變數', 'site strings synced to Figma variables')], ['2,615', b('個 Figma 文字全部綁定變數', 'Figma text layers bound, 100%')], ['0', b('個已綁定文字四語不一致', 'mismatches in bound text')], ['774', b('個 LIFF 文案項目與官網比對', 'LIFF copy keys compared with the website')]] },
          { t: 'callout', title: b('用真實資料型的案例做測試', 'Testing with realistic data'), text: b('上線後我們發現，護照英文姓名的格式只有在真實客人資料下才會出錯。之後測試一律改用中文姓名、英文護照名等真實資料型案例，不再隨意填寫。', 'After launch we found that passport-name formats only broke with real guest data. Since then, testing uses realistic cases such as Chinese names and English passport names instead of random filler.') },
          { t: 'compare', ai: b('Figma 裡還有 36 個舊變數被畫面引用，AI 判斷「有引用就不能刪」，建議全部保留。', 'Figma still had 36 legacy variables in use. The AI concluded "in use means keep" and proposed keeping them all.'), me: b('我指出「改套用到正式變數不就可以刪了」。流程改成先改綁、再檢查、最後刪除：這 36 個舊變數在畫面上共 122 處引用，全部改綁。整體清理後，變數從 271 個降到 219 個，壞掉的引用 0 個。', 'I pointed out they could be rebound to the official variables and then removed. The flow became rebind, check, then delete: the 36 variables were used in 122 places, all rebound. After the full cleanup, variables went from 271 to 219 with zero broken references.'), source: b('2026 年 7～8 月 · Figma 四語系遷移時', 'Jul–Aug 2026 · during the Figma four-language migration') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('訂房與會籍改為線上自助，LINE 成為新通路', 'Self-service booking and membership, plus a new LINE channel'),
        blocks: [
          { t: 'p', text: b('官網 3.0 上線後，訂房、會籍購買、續約與信用卡付款都能在線上自助完成；這是團隊一起交付的成果，我負責產品規劃、UI/UX 與驗收。LINE LIFF 在 2026 年 5 月上線，7 月加入信用卡購買會籍、英文版與 LINE 訂房通知。', 'After website v3.0, booking, membership purchase, renewal, and card payment became self-service. This was a team release; I owned planning, UI/UX, and QA. LINE LIFF launched in May 2026, adding card-based membership purchase, English, and LINE booking notifications in July.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次改版前，我會先定義要看的指標和事件，讓上線前後可以直接比較成效。', 'Before the next release, I will define the metrics and events up front so results can be compared before and after launch.') },
        ],
      },
    ],
  },
  {
    slug: 'rewards',
    no: '02',
    period: '2025 — 2026',
    eyebrow: 'Case 02 · Product Management · Systems Thinking',
    title: b('WOTA Journey Rewards：\n把複雜規則變成可交付的規格', 'WOTA Journey Rewards:\nturning complex rules into shippable specs'),
    cardTitle: b('WOTA Journey Rewards：把複雜規則變成可交付的規格', 'WOTA Journey Rewards: complex rules into shippable specs'),
    lead: b(
      '會員等級、房晚入帳、升等積分、兌換與庫存規則彼此牽動。我把規則落成 PRD、IA 與可操作的原型，讓設計、工程、客服用同一套說法。',
      'Tiers, room-night credit, upgrade points, redemption, and inventory all affect each other. I turned the rules into a PRD, IA, and working prototypes so design, engineering, and support speak the same language.',
    ),
    chips: ['Product Management', 'PRD', 'Edge Cases', 'Prototype'],
    meta: [
      [b('我的角色', 'My role'), b('PRD · IA · 互動原型 · 前台 UI', 'PRD · IA · prototypes · frontend UI')],
      [b('規則架構', 'Rule framework'), b('由產品負責人定義', 'Defined by the product owner')],
      [b('期間', 'Period'), b('2025.01 — 2026', '2025.01 — 2026')],
      [b('狀態', 'Status'), b('Phase 1 於 2026 Q3 在官網與 LIFF 上線', 'Phase 1 live on web and LIFF since Q3 2026')],
    ],
    kpis: [
      ['18', b('種兌換狀態頁', 'redemption states'), b('兌換中心的 18 種狀態依優先級分成三批：P0 6 種、P1 7 種、P2 5 種。', 'The 18 redemption-center states were split into three priority batches: 6 P0, 7 P1, and 5 P2.')],
      ['28', b('題升等規則定案', 'upgrade rules settled'), b('升等積分的 28 個規則問題逐題列出選項讓團隊拍板，例如定案「效期結束時積分歸零，會籍一律降一級」。', 'Each of 28 upgrade-point rule questions was laid out with options for the team to decide, such as "points reset at term end and tier drops one level."')],
      ['4', b('處權益改寫被攔下', 'benefit changes caught'), b('用 Codex 比對 16 頁新版兌換流程概念稿與現行畫面後，我挑出 4 處改到會員權益的差異交給團隊，例如機場接送少了「禮賓」。', 'After Codex compared a 16-screen redemption concept with the current screens, I flagged 4 changes that altered member benefits, such as airport transfer losing "concierge."')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/redeem-center-elite.jpg',
      alt: b('Journey Rewards 兌換中心（Elite 會員）：上方顯示會員資格與累計 32 晚，下方四個獎勵中兩個可兌換、兩個顯示房晚不足', 'Journey Rewards redemption center for an Elite member: tier and 32 nights at the top, two rewards redeemable and two marked not enough nights'),
      caption: b('兌換中心 · Elite 會員畫面 · 擷取自 UI Spec 開發環境，資料為假資料', 'Redemption center, Elite member · captured from UI Spec in the dev environment, fake data'),
    },
    card: { kind: 'image', src: ['img/real/redeem-center-elite.jpg'], label: b('兌換中心 · Elite 會員 · 假資料', 'Redemption center · Elite · fake data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('一條規則改了，會牽動 UI、API、帳本和客服說法', 'Change one rule and the UI, API, ledger, and support script all move'),
        blocks: [
          { t: 'p', text: b('Journey Rewards 是會員獎勵計畫：會員入住後累積「房晚」（用來兌換禮遇）與「升等積分」（決定會籍等級）。規則本身不難懂，難的是它們互相影響：', 'Journey Rewards is a loyalty program: stays earn room nights, used for rewards, and upgrade points, which set the member tier. Each rule is simple; the hard part is how they interact:') },
          { t: 'flow', items: [b('入住', 'Stay'), b('房晚入帳', 'Room-night credit'), b('升等積分', 'Upgrade points'), b('升級與保級', 'Upgrade and retention'), b('兌換與庫存', 'Redemption and inventory')] },
          { t: 'p', text: b('同一套規則要同時出現在官網與 LIFF 的介面、後端 API 與帳本、QA 測試案例，以及客服 FAQ。而且我先前的版本和產品負責人發布的新規則互相衝突。', 'The same rules appear in the web and LIFF UI, the backend API and points ledger, QA cases, and the support FAQ. On top of that, my earlier version conflicted with the product owner\'s new rules.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('把規則整理成一份所有角色都能對照的規格，並讓例外情境在開發前就被看見，而不是上線後才被客人發現。', 'One spec every role can check against, with edge cases surfaced before development instead of after launch.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm'], tags: ['PM'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('我的舊版本和產品負責人的新規則衝突，怎麼整合成一份？', 'My earlier version conflicted with the product owner\'s new rules. How do they become one spec?'), a: b('以新規則為唯一來源，把兩版整合成 PRD v2.2', 'Treat the new rules as the single source of truth and merge both into PRD v2.2'), text: b('我先前的版本以「1 晚＝1 點、點數可換會籍」為主軸。整合成 PRD v2.2 時，點數拆成只決定等級的「升等積分」與逐筆 24 個月到期的「累計房晚」，移除點數換會籍，改成達標自動升級。', 'My earlier version used "1 night = 1 point, points buy membership." In PRD v2.2, points split into upgrade points that set the tier and room nights that each expire after 24 months; buying membership with points was replaced by automatic upgrades.') },
          { t: 'decision', q: b('房晚要算付費的晚數，還是實際入住的晚數？', 'Count paid nights or nights actually stayed?'), a: b('以有效入住晚數為基準', 'Count effective nights stayed'), text: b('例如「住三付二」這類贈送的房晚也應該計入。這個決定要同步到 PRD、API、帳本、QA 與客服 FAQ，不能只改其中一處。', 'Complimentary nights, such as stay-three-pay-two, also count. The decision had to reach the PRD, API, points ledger, QA, and FAQ together.') },
          { t: 'diagram', kind: 'rules', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'decision', q: b('兩種累積機制同時推進，要一次做完還是分段上線？', 'Two earning systems at once: ship together or in phases?'), a: b('分段上線，先定義 Phase 1 範圍', 'Phased, starting with a defined Phase 1'), text: b('釐清房晚與積分並行的依賴，把「舊積分停止累積」「新功能可分批開關」「舊資料轉移」拆成獨立任務，降低一次上線過多功能的風險。', 'I mapped the dependencies between nights and points and split freezing the old points, feature switches for staged release, and data migration into separate tasks to reduce release risk.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('流程與原型', 'Design'),
        title: b('用可操作的原型，取代口頭說明', 'Working prototypes instead of verbal explanations'),
        blocks: [
          { t: 'p', text: b('只有 IA 時，失敗、暫停、連結失效這些狀態都沒有定義。我做了 4 支互相串接的互動原型，讓工程與客服可以直接操作。', 'With only an IA, states like failure, pause, and expired links were undefined. I built four linked interactive prototypes that engineering and support could click through.') },
          { t: 'stats', items: [['4', b('支互相串接的原型', 'linked prototypes')], ['18', b('種兌換狀態頁', 'redemption state pages')], ['28', b('題升等規則逐題定案', 'upgrade rules decided')], ['5', b('份 IA', 'IA documents')]] },
          { t: 'p', text: b('兌換中心的 18 種狀態依優先級分成三批：P0 6 種、P1 7 種、P2 5 種。升等積分原型把 28 個規則問題逐題列出選項，讓團隊逐題拍板，最後定案「效期結束時積分歸零，會籍一律降一級」。兩支互相矛盾的規則原型也合併成一支，讓原型、IA、Figma、設計系統四處一致。', 'The 18 redemption states are prioritized in three batches: 6 P0, 7 P1, and 5 P2. The upgrade-points prototype laid out 28 rule questions with options so the team could decide each one, ending with "points reset at the end of the qualifying period, and members drop one tier." Two conflicting rule prototypes were merged so prototype, IA, Figma, and design system all agree.') },
          { t: 'h3', text: b('名詞統一', 'One set of terms') },
          { t: 'p', text: b('「可兌換房晚」改為「累計房晚」，並統一使用「房晚」而不是夜泊或點數。i18n、介面、PRD 與客服說法都改用同一組詞。', '"Redeemable nights" became "accumulated nights," and "room nights" replaced mixed terms. i18n, UI, PRD, and support all use the same words.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('規格要能直接被實作，也要能被驗證', 'Specs that can be built and verified'),
        blocks: [
          { t: 'p', text: b('Phase 1 的工程任務由工程團隊開立，我負責追蹤進度。前台部分，我用 Claude Code 參與 Journey Rewards 頁面與 LIFF「我的房晚紀錄」的實作並串接 API。', 'Engineering created the Phase 1 tickets and I tracked progress. On the frontend, I used Claude Code to help build the Journey Rewards pages and LIFF "My room nights," wired to the API.') },
          { t: 'table', rows: [
            [b('規則', 'Rules'), b('整理規則、比對各版文件、探索流程分支', 'Organize rules, diff versions, explore branches'), b('判斷衝突、決定以哪份規則為準', 'Resolve conflicts and pick the source of truth')],
            [b('規格', 'Specs'), b('產生 PRD 與兌換規格初稿、例外情境檢查清單', 'Draft the PRD, redemption spec, and edge-case checklist'), b('確認使用者體驗與交付範圍', 'Confirm the experience and delivery scope')],
            [b('前台', 'Frontend'), b('以 Claude Code 調整頁面、文字與路由', 'Adjust pages, copy, and routes with Claude Code'), b('審查畫面與程式、跟著節點驗收', 'Review screens and code, sign off at each gate')],
          ] },
          { t: 'compare',
            title: b('過程證據：AI 比對，我判斷', 'Evidence: AI compares, I judge'),
            aiLabel: b('AI 負責', 'AI did'), meLabel: b('我的判斷', 'My judgment'),
            ai: b('新版兌換流程概念稿有 16 頁。我用 Codex 把每一頁和 UI Spec（Case 03 開發中的工具）裡的現行畫面比對，列出所有文字與欄位的差異。', 'A new redemption-flow concept had 16 screens. I had Codex compare each one against the current screens in UI Spec, the in-development tool from Case 03, and list every text and field difference.'),
            me: b('我從差異裡挑出 4 處改到會員權益的地方：機場接送少了「禮賓」、通關服務刪掉「出境」、特定酒店的早餐禮遇消失、「Elite 可兌換」被改成「Elite 規格」，兌換資格的意思跟著變了。這 4 處標出來交給團隊，避免新稿在不知不覺中改掉已定案的權益。', 'From those differences I picked out 4 that changed member benefits: the airport transfer lost "concierge," the fast-track service dropped "departure," a hotel breakfast benefit disappeared, and "Elite can redeem" became "Elite spec." I flagged them for the team so a new draft could not quietly rewrite settled benefits.'),
            source: b('2026 年 11 月 · 審查新版兌換流程概念稿時', 'Nov 2026 · while reviewing a new redemption-flow concept') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('Phase 1 上線，各角色對著同一份規格工作', 'Phase 1 shipped with one shared spec'),
        blocks: [
          { t: 'p', text: b('Phase 1 已在正式站上線：官網 Journey Rewards（房晚紀錄、升等積分、兌換中心、我的禮品券）與 LIFF「我的房晚紀錄」。PM、前後端、QA 與客服對著同一份可操作的規格工作。', 'Phase 1 is live: Journey Rewards on the website (room nights, upgrade points, redemption center, my vouchers) and LIFF "My room nights." PM, engineering, QA, and support work from one clickable spec.') },
          { t: 'versions', items: [
            ['2025-01', b('房晚累積獎勵表', 'Room-night rewards table')],
            ['v2.0', b('我的版本：1 晚＝1 點、點數可換會籍', 'My version: 1 night = 1 point, points buy membership')],
            ['v2.1', b('產品負責人發布新版規則架構', 'Product owner publishes the new rule framework')],
            ['v2.2', b('2026-05-22 整合成 PRD v2.2 與 5 份 IA', 'Merged into PRD v2.2 and 5 IA documents (2026-05-22)')],
            ['2026 Q3', b('分段上線：官網 Journey Rewards 與 LIFF「我的房晚紀錄」', 'Phased launch: website Journey Rewards and LIFF "My room nights"')],
            ['2026-10', b('4 支串接原型與 Figma、設計系統 v1.3 完成同步', 'Four linked prototypes synced with Figma and design system v1.3')],
          ] },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會在 PRD 階段就做可操作的原型，讓工程、客服和產品負責人一開始就對著同一個畫面，討論失敗、暫停這些狀態。', 'Next time I will build a clickable prototype at the PRD stage, so engineering, support, and the product owner discuss states like failure and pause on the same screen from day one.') },
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
      '讓設計、PM 與 QA 不必換帳號、不必等後端，就能看到每個會籍、每種狀態的真實畫面。',
      'Design, PM, and QA can see the real screen for every tier and state without switching accounts or waiting for backend.',
    ),
    chips: ['Frontend × AI', 'Claude Code', 'Vue / Quasar', 'Design Token'],
    meta: [
      [b('我的角色', 'My role'), b('發起、規劃、設計與實作', 'Initiated, planned, designed, built')],
      [b('產品', 'Product'), b('WOTA 官網會員中心', 'WOTA member center')],
      [b('期間', 'Period'), b('2026.08 — 11', '2026.08 — 11')],
      [b('狀態', 'Status'), b('開發環境，尚未上正式站', 'Dev environment, not yet in production')],
    ],
    kpis: [
      ['129', b('個狀態畫面', 'state screens'), b('11 月 6 日第一階段完成 18 個頁面、63 個狀態畫面，11 月 12 日擴充到 129 個。每個畫面都用正式頁面的程式，只把資料換成假的。', 'Phase 1 on Nov 6 covered 18 pages and 63 state screens, expanded to 129 by Nov 12. Every screen uses the production page code with fake data.')],
      ['5', b('層防線', 'safeguard layers'), b('從網址、網域、部署、打包到程式檢查各設一道關卡，任何一層發現工具要進正式環境就會擋下。', 'Checks at the URL, domain, deployment, build, and code level each stop the tool from reaching production.')],
      ['2', b('個影響正式站會員的 bug', 'bugs affecting live members, found in dev'), b('驗證過程中抓到 2 個已經在正式站影響會員的 Rewards 卡片 bug。', 'Verification surfaced 2 Rewards card bugs already affecting members in production.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/uispec-gallery.jpg',
      alt: b('UI Spec 工具畫面：左側分組導覽，上方寬度與語系切換，右側並排 Journey Rewards 兌換中心四個會籍與兌換詳情各狀態', 'UI Spec screen: grouped navigation, width and language switches, and Journey Rewards redemption pages for four tiers and detail states side by side'),
      caption: b('UI Spec 開發環境實際畫面 · 畫面中的會員資料皆為假資料', 'UI Spec in the dev environment · all member data shown is fake'),
    },
    card: { kind: 'image', src: ['img/real/uispec-gallery.jpg'], label: b('UI Spec 開發環境實際畫面 · 假資料', 'UI Spec dev environment · fake data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('要看一個狀態，得先換帳號、重現情境', 'Seeing one state meant switching accounts and recreating the scenario'),
        blocks: [
          { t: 'p', text: b('會員中心與 Journey Rewards 的畫面會隨會籍等級、點數餘額、庫存與日期規則變化。過去要確認某個狀態長什麼樣子，必須準備對應的帳號與資料，還要等 API 和登入功能正常。', 'Member center and Journey Rewards screens change with tier, balance, stock, and dates. Checking one state used to require matching accounts and data, plus a working API and login.') },
          { t: 'p', text: b('結果是驗收很費工，很多例外狀態要到很晚才被看見。', 'Reviews were slow, and many edge states surfaced late.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓團隊在不登入、不連後端的情況下，直接看到每一個會籍、每一種狀態的真實畫面，而且畫面跟正式頁面來自同一份程式。', 'Let the team see every tier and state without logging in or calling the backend, using the same code as the production pages.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('用截圖、Figma，還是真的元件？', 'Screenshots, Figma, or real components?'), a: b('選擇渲染正式頁面的真元件', 'Render the real production components'), text: b('截圖和設計稿會跟實際程式脫節。副本頁的 template 跟正式頁面一字不差，只把資料換成假的，看到的就是使用者會看到的。', 'Screenshots and mockups drift from code. Each preview uses the production page template with controlled fake data, so it shows what users see.') },
          { t: 'decision', q: b('手機版要用縮小的桌機畫面，還是真的重排？', 'Shrink the desktop view, or truly reflow?'), a: b('依選定寬度重新判斷版面', 'Recompute the layout for the chosen width'), text: b('把樣式裡跟寬度有關的判斷依選定寬度重新計算，1440、1280、1024、375 四種寬度都是真的重排，手機寬度會換成手機版元件。', 'The tool renders real responsive behavior at 1440, 1280, 1024, and 375px instead of shrinking one desktop screen, and mobile widths switch to mobile components.') },
          { t: 'decision', q: b('假資料工具最怕流進正式站，怎麼防？', 'A fake-data tool must never reach production. How?'), a: b('五層防線，不靠人記得', 'Five automated safeguards, not memory'), text: b('從網址、網域、部署、打包到程式檢查各設一道關卡，任何一層發現工具要進正式環境就會擋下。', 'Five automatic checks, from URLs and domains to deployment, build, and code checks, each stop the tool from reaching production.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('工具設計', 'Design'),
        title: b('讓不同角色都能快速找到要看的狀態', 'Helping every role find the state they need fast'),
        blocks: [
          { t: 'p', text: b('工具本身也是一個要設計的產品。使用者是設計師、PM 與 QA，他們要的不是程式碼，而是「我想看的那個狀態在哪裡」。', 'The tool is a product too. Its users are designers, PMs, and QA, and what they want is not code but where the state they care about lives.') },
          { t: 'h3', text: b('資訊架構', 'Information architecture') },
          { t: 'p', text: b('左側分成總覽、最近修改、頁面副本、設計 Token（顏色、字級等共用設定）四區。頁面副本依產品分成 5 組，每張卡片標示狀態名稱與是否待確認。', 'Four areas on the left: overview, recent changes, page previews, and design tokens. Previews split into 5 product groups, each card labeled with its state and whether it still needs a decision.') },
          { t: 'h3', text: b('瀏覽方式', 'Browsing') },
          { t: 'p', text: b('上方可切換 4 種寬度與繁中、簡中、EN 三種語系，搭配輔助線、以游標為中心縮放與搜尋。格子內的互動和真站一致，假 API 可以切換成功或失敗，網址會記住目前的分組與卡片，可以直接貼給同事。', 'Switch between 4 widths and 3 languages, with guides, cursor-centered zoom, and search. Interactions inside each cell match the live site, fake APIs can toggle success or failure, and the URL keeps the current group and card for sharing.') },
          { t: 'figure', src: ['img/real/uispec-gallery.jpg'], alt: b('UI Spec 分組導覽與 1440 寬的狀態畫廊', 'UI Spec grouped navigation and the 1440px state gallery'), caption: b('UI Spec 開發環境實際畫面 · 1440 寬下的 Journey Rewards 狀態畫廊，同步／TBD 標示每張卡片是否待確認', 'UI Spec in the dev environment · Journey Rewards gallery at 1440px, with sync and TBD labels on each card') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('用 Claude Code 實作，由我負責判斷與驗證', 'Built with Claude Code, judged and verified by me'),
        blocks: [
          { t: 'p', text: b('工具建在公司既有的 Vue / Quasar 專案裡，必須遵守原本的程式規範。副本只要和正式頁面不一致，程式檢查就會報錯，再用一個指令就能同步回來。', 'The tool lives in the existing Vue / Quasar codebase and follows its coding rules. If a preview drifts from its production page, the code check fails, and one command brings it back in sync.') },
          { t: 'table', rows: [
            [b('規劃', 'Plan'), b('整理頁面清單、狀態組合與檔案結構草案', 'Draft page list, state combinations, and file structure'), b('決定要做真元件副本、範圍與分組方式', 'Choose real-component copies, scope, and grouping')],
            [b('實作', 'Build'), b('產生副本頁、假資料與寬度重排的程式', 'Generate copies, fake data, and width reflow code'), b('審查程式、要求符合既有規範與 lint', 'Review code, enforce standards and lint')],
            [b('驗證', 'Verify'), b('比對副本與正式頁面的差異', 'Diff copies against production'), b('逐一檢查畫面、判斷是否為真正的問題', 'Inspect each screen and judge real issues')],
          ] },
          { t: 'h3', text: b('五層防線', 'Five safeguards') },
          { t: 'guard', items: [
            [b('網址', 'URLs'), '', b('正式版不會產生工具的網址', 'Production builds leave out the tool\'s pages')],
            [b('網域', 'Domain'), '', b('只在開發網域打得開', 'Opens on development domains only')],
            [b('部署', 'Deploy'), '', b('部署設定不會把工具帶上正式站', 'Deployment config never ships the tool')],
            [b('打包', 'Build'), '', b('只要有殘留，打包就直接失敗', 'The build fails if anything is left behind')],
            [b('程式', 'Code'), '', b('檢查正式程式沒有引用工具', 'Checks that production code never imports the tool')],
          ] },
          { t: 'compare', ai: b('AI 一次處理的範圍太大，每批要跑很久，跑完我沒辦法逐項確認做對了沒有。', 'The AI took on too much per batch; each run took so long I couldn\'t verify what it had done.'), me: b('我要求重新切分任務粒度：每批 30 到 90 秒、最多寫入 5 個。每一批都小到我看得完、驗得了，才繼續下一批。', 'I had it re-slice the work: 30–90 seconds per batch, at most 5 writes. Every batch was small enough for me to review before the next one ran.'), source: b('這是 2026 年 8 月 Figma 四語系遷移時建立的做法，之後成為我與 AI 協作的固定方式', 'A practice I set during the Figma four-language migration in Aug 2026, which became my standard way of working with AI') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('工具還在開發中，就抓到正式站的 bug', 'Still in development, already catching production bugs'),
        blocks: [
          { t: 'p', text: b('11 月 6 日完成第一階段：18 個頁面、63 個狀態畫面，8 項驗證全過。驗證過程中抓到 2 個已經在正式站影響會員的 Rewards 卡片 bug，以及前後端欄位命名不一致。到 11 月 12 日擴充為 129 個狀態畫面。', 'Phase 1 finished on November 6: 18 pages and 63 state screens, all 8 checks passed. Along the way it caught 2 Rewards card bugs already affecting live members, plus mismatched field names between frontend and backend. By November 12 it covered 129 state screens.') },
          { t: 'h3', text: b('驗證結果', 'Verification') },
          { t: 'stats', items: [['8', b('項驗證全過', 'checks passed')], ['2', b('個影響正式站會員的 bug', 'bugs affecting live members')]] },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會先做驗收時最常卡關的那些狀態，讓工具更早被團隊用起來，再逐步擴充。', 'Next time I will start with the states that block reviews most often, get the tool into the team\'s hands sooner, and expand from there.') },
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
      '團隊只看得到流量和轉換的表面數字，不知道客人卡在哪裡。我用錄影、數據與事件定義交叉驗證，找出登入牆與落地頁兩個瓶頸，並建立每週自動追蹤。',
      'The team saw only top-line traffic and conversion. I cross-checked session recordings, analytics, and event definitions to find two bottlenecks, the login wall and landing pages, and set up weekly tracking.',
    ),
    chips: ['UX Research', 'Mixpanel', 'Clarity', 'GTM'],
    meta: [
      [b('我的角色', 'My role'), b('發起並主導', 'Initiated and led')],
      [b('產品', 'Product'), b('WOTA 官網', 'WOTA website')],
      [b('期間', 'Period'), b('2026.10 — 現在', '2026.10 — now')],
      [b('狀態', 'Status'), b('建議已交付，改版待開發', 'Recommendations delivered, fixes pending')],
    ],
    kpis: [
      ['9% / 50%', b('訪客與會員走到訂單表單', 'guests vs members reach the booking form'), b('點「選擇價格」後，訪客只有 9% 走到訂單表單，會員是 50%；走到表單後兩者完成率差不多（50% 對 46%），落差出在登入這一步。', 'After "Select rate," 9% of guests and 50% of members reached the form; once there, both converted similarly (50% vs 46%), so the gap is the login step.')],
      ['44%', b('登入後回到表單', 'return to form after login'), b('登入成功後只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'Only 44% returned to their form after logging in, and signing up does not log people in automatically.')],
      ['41', b('項附證據的發現與建議', 'evidence-backed findings'), b('每項都附證據強度、建議解法與優先等級；另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each comes with evidence strength, a proposed fix, and a priority; 16 ruled-out claims are logged too, so the team doesn\'t revisit them.')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-hotel-no-dates.jpg',
      alt: b('從外部連結進入的酒店頁：沒有日期，只顯示「缺少必要參數，請填寫入住條件」', 'Hotel page opened from an external link: no dates, only "Missing required parameters"'),
      caption: b('WOTA 官網正式站實際畫面 · 從廣告或 Google 進入、沒帶日期時看到的酒店頁', 'Live WOTA site · what a hotel page shows when opened from an ad or Google without dates'),
    },
    card: { kind: 'diagram', diagram: 'funnel', label: b('示意圖 · 依分析數據重繪', 'Diagram · redrawn from the analysis') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('只看得到數字，不知道原因', 'Numbers without reasons'),
        blocks: [
          { t: 'p', text: b('團隊在 Mixpanel 看得到流量下滑、轉換偏低，但不知道原因、也不知道客人卡在哪一步。更麻煩的是，原始數據混了約 26% 的機器流量，部分事件定義也有錯，直接引用會得出錯誤結論。', 'The team could see traffic dropping and low conversion in Mixpanel, but not why or where guests got stuck. Worse, about 26% of raw traffic was bots and some events were defined wrong, so taking numbers at face value led to wrong conclusions.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('給產品一份有證據、可以排期的改版清單，並建立改版後能量測成效的機制。', 'Give product an evidence-backed, schedulable fix list, and a way to measure impact after each change.') },
          { t: 'h3', text: b('先釐清背景', 'Setting the baseline') },
          { t: 'p', text: b('台灣 4 到 9 月的流量下滑，98% 來自付費廣告縮減，不是網站變差。基準是每月約 3.2 萬次造訪、手機佔 72%、每月訂房約 138 筆。', '98% of the April–September traffic drop in Taiwan came from reduced paid ads, not a worse site. Baseline: about 32k sessions a month, 72% on mobile, about 138 bookings a month.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('要相信數據，還是看使用者實際怎麼操作？', 'Trust the numbers or watch real behavior?'), a: b('以錄影為核心，數據只是背景', 'Recordings first, numbers as context'), text: b('用 Mixpanel、Clarity 錄影和 GTM 事件定義三方交叉驗證，任何結論都要在錄影裡看得到對應的行為。', 'Every conclusion had to match behavior visible in Clarity recordings, cross-checked with Mixpanel and GTM event definitions.') },
          { t: 'decision', q: b('結論怎麼確定不是看錯？', 'How do we know a conclusion is right?'), a: b('換角度重新抽樣檢查 7 輪', 'Seven rounds of re-sampling and cross-checking'), text: b('16 項結論中，4 項被推翻、6 項被修正。例如「登入有一半失敗」被推翻：實際送出帳密後有 85 到 90% 成功，問題在別處。', 'Of 16 conclusions, 4 were overturned and 6 revised. "Half of logins fail" was wrong: 85–90% succeed once credentials are submitted. The problem was elsewhere.') },
          { t: 'decision', q: b('問題這麼多，先修哪個？', 'Many issues. Which first?'), a: b('依證據強度與影響排優先', 'Rank by evidence strength and impact'), text: b('41 項發現每項都附證據強度、建議解法與優先等級，另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each of the 41 findings has an evidence rating, proposed fix, and priority. 16 ruled-out claims are recorded so the team doesn\'t revisit them.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('兩個轉換瓶頸', 'Two conversion bottlenecks'),
        blocks: [
          { t: 'h3', text: b('登入牆', 'The login wall') },
          { t: 'p', text: b('點「選擇價格」後，未登入的訪客只有 9% 走到訂單表單，已登入的會員是 50%。而訪客一旦走到表單，完成率和會員差不多（50% 對 46%），所以落差出在中間的登入這一步。登入成功後只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'After clicking "Select rate," only 9% of logged-out guests reached the booking form, versus 50% of logged-in members. Once guests did reach the form, they completed it at about the same rate as members (50% vs 46%), so the gap sits at the login step in between. Only 44% returned to the form after logging in, and sign-up didn\'t log people in automatically.') },
          { t: 'diagram', kind: 'funnel', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('看不到價格的落地頁', 'Landing pages with no prices') },
          { t: 'p', text: b('從廣告與 Google 進來的酒店頁沒有帶日期，看不到價格。90 天內有約 2.5 萬名使用者落在這類頁面，其中約 64% 帶有廣告來源標記，代表付費帶進來的客人一進站就看不到價格。', 'Hotel pages reached through ads and search had no dates, so they showed no prices. About 25,000 users landed on them in 90 days, and about 64% carried ad tracking tags, meaning paid visitors arrived to a page with no price.') },
          { t: 'figure', src: ['img/real/official-hotel-no-dates.jpg'], alt: b('沒有日期的酒店頁，只顯示缺少必要參數', 'Hotel page without dates showing a missing-parameters message'), caption: b('WOTA 官網正式站實際畫面 · 2026-11-16 擷取', 'Live WOTA site · captured 2026-11-16') },
          { t: 'h3', text: b('不是問題的地方', 'What turned out fine') },
          { t: 'p', text: b('訂單表單沒送出的多是看完總價後離開的比價行為，不是表單出錯；送出後成功率約 98%。', 'Most unsent booking forms were price comparison after seeing the total, not form errors; about 98% of submissions succeed.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('量測與自動化', 'Tracking'),
        title: b('修好追蹤，再讓它每週自動跑', 'Fix the tracking, then automate it weekly'),
        blocks: [
          { t: 'p', text: b('先找出追蹤本身的缺陷：手機版「選擇價格」與「立即預訂」不會觸發事件，原因是追蹤選擇器依賴桌機才有的元素；站內換頁也不會記錄頁面瀏覽。', 'First I found tracking bugs: on mobile, "Select rate" and "Book now" never fired, because the selectors relied on desktop-only elements, and in-app navigation didn\'t record page views.') },
          { t: 'table', rows: [
            [b('擷取', 'Collect'), b('擷取 Mixpanel 數據與錄影、整理統計', 'Pull Mixpanel data and recordings, run counts'), b('發起分析、定義要回答的問題', 'Initiate and define the questions')],
            [b('分析', 'Analyze'), b('產出結論與文件初稿', 'Draft findings and documents'), b('看錄影驗證，推翻或修正結論', 'Verify against recordings, overturn or revise')],
            [b('追蹤', 'Track'), b('每週一自動產出週報', 'Generate the weekly report every Monday'), b('判讀趨勢、決定要提給產品的項目', 'Read trends and choose what goes to product')],
          ] },
          { t: 'stats', items: [['300', b('段已分類標註的錄影', 'tagged session recordings')], ['85', b('週 Mixpanel 數據', 'weeks of Mixpanel data')], ['5', b('期自動產出的週報', 'weekly reports generated automatically')], ['2', b('個每週一自動執行的排程', 'jobs running every Monday')]] },
          { t: 'callout', title: b('週報實際派上用場的一次', 'When the weekly report paid off'), text: b('週報偵測到 10 月 13 日起找不到頁面的錯誤暴增（35 → 131）。和工程一起查明是兩篇文章下架，不是程式出錯。', 'The weekly report flagged a spike in page-not-found errors from October 13 (35 → 131). With engineering I traced it to two unpublished articles, not a code bug.') },
          { t: 'compare', ai: b('數據初步顯示：登入流程大約有一半失敗，看起來是登入功能有問題。', 'The first read of the data: about half of logins fail, so login looked broken.'), me: b('我要求換角度、用更多樣本重新驗證。看錄影後發現，真正送出帳密的人有 85 到 90% 登入成功；流失發生在「被要求登入」那一刻，以及登入後沒有回到原本的表單。問題從「修登入」變成「重新設計登入牆」。', 'I asked for a fresh angle and more samples. Recordings showed 85–90% of people who actually submitted credentials succeeded; the drop-off happened when they were asked to log in, and when they weren\'t returned to their form. The fix changed from "repair login" to "redesign the login wall."'), source: b('2026 年 10 月 · 複查行為分析結論時', 'Oct 2026 · while re-checking the behavior findings') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('從「看數字」變成「知道要修什麼」', 'From watching numbers to knowing what to fix'),
        blocks: [
          { t: 'p', text: b('交付的是一份有證據、可以排期的產品待辦，以及改版後可以自動做前後比較的每週追蹤機制。', 'The deliverable is an evidence-backed, schedulable product backlog and weekly tracking that compares before and after each change.') },
          { t: 'h3', text: b('預期效益', 'Expected impact') },
          { t: 'p', text: b('依問題清單估算，只修「登入後接續訂單」一項，每月最多可多約 20 筆訂房（目前每月約 138 筆）；改版上線後，會用既有的每週追蹤驗證。', 'The backlog estimate for fixing only "resume booking after login" is up to about 20 more bookings a month, against about 138 today; once it ships, the existing weekly tracking will verify it.') },
          { t: 'h3', text: b('下一步', 'Next') },
          { t: 'p', text: b('推動「登入後接續訂單」與「落地頁顯示日期與價格」兩項改版，上線後用既有的每週追蹤量測成效。', 'Ship "resume booking after login" and "show dates and prices on landing pages," then measure with the existing weekly tracking.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('下次我會在分析進行中，就先挑一項改版推上線，用每週追蹤量到成效，再用結果爭取後續改版。', 'Next time I will ship one change while the analysis is still running, measure it with the weekly tracking, and use that result to win the next fixes.') },
        ],
      },
    ],
  },
  {
    slug: 'research',
    no: '05',
    period: '2022.10 — 2023.02',
    eyebrow: 'Case 05 · UX Research',
    title: b('自我成長社群研究：\n為什麼有人留下、有人離開', 'Self-growth community research:\nwhy some stay and others leave'),
    cardTitle: b('自我成長社群研究：為什麼有人留下、有人離開', 'Community research: why some stay and others leave'),
    lead: b(
      '一個自我成長社群的成員越來越少，課程也賣不動，業主從沒做過使用者研究。我們 12 人分三組，訪談 18 位活躍、流失與潛在用戶，找出留下與離開的原因，並轉成新手融入與社群經營的建議。',
      "A self-growth community was shrinking and its courses weren't selling, and the founders had never done user research. Twelve of us split into three teams, interviewed 18 active, lapsed, and prospective members, found why people stay or leave, and turned it into recommendations for onboarding and community design.",
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
          { t: 'callout', title: b('目標', 'Goal'), text: b('找出原本參與的人為什麼漸漸離開、另一部分的人為什麼留下，並檢查業主的客群假設是否成立。', "Find out why some members drifted away while others stayed, and test whether the client's assumptions about its audience held up.") },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我在負責「活躍用戶」的第一組，參與拆解業主的商業假設、設計招募問卷與訪綱，擔任主訪並用 ORID 整理訪談紀錄，最後參與三組整合與業主簡報。', "I was on the active-member team. I helped break down the client's business assumptions, designed the screener and interview guide, led interviews and coded notes with ORID, and helped merge the three teams' findings into the client readout.") },
        ],
      },
      {
        id: 'method', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('研究設計', 'Method'),
        title: b('三群用戶分開研究，再合起來比對', 'Three groups studied apart, then compared'),
        blocks: [
          { t: 'flow', items: [
            b('需求訪談與商業假設拆解（10 月中）', 'Client interview and assumption mapping (mid-Oct)'),
            b('社群觀察：LINE、Facebook、Discord（10 月）', 'Community observation on LINE, Facebook, Discord (Oct)'),
            b('招募問卷篩選三群受訪者', 'Screener survey to recruit three groups'),
            b('18 場訪談，ORID 紀錄（11 月）', '18 interviews, ORID notes (Nov)'),
            b('親合圖、同理心地圖、三組整合，向業主簡報（12 月）', 'Affinity mapping, empathy maps, cross-team synthesis, client readout (Dec)'),
          ] },
          { t: 'p', text: b('三群各由一組負責，因為同一個問題在三群人身上的答案不同：留下的人說得出「為什麼留」，流失的人說得出「為什麼走」，沒接觸過的人才看得到「為什麼一開始沒進來」。', "Each group had its own team because the same question gets different answers: people who stayed can say why they stayed, people who left can say why they left, and people who never joined show why they didn't come in at all.") },
          { t: 'compare', title: b('過程證據：把研究目標從「驗證」改成「探索」', 'Evidence: turning "prove it" goals into "explore it" goals'), aiLabel: b('第一版目標', 'First draft'), meLabel: b('第三次修改後', 'Third revision'),
            ai: b('確認「越多的互動」是否真的可以提升「購課率」。', 'Confirm whether more interaction actually raises course purchases.'),
            me: b('研究「社群互動」與用戶活躍程度之間的關聯。我們發現第一版是在找證據支持業主的假設；改成探索關聯，才不會在訪談前就預設答案。', "Study how community interaction relates to how active members are. We realized the first draft was hunting for evidence to support the client's assumption; reframing it as exploring a relationship stopped us from deciding the answer before the interviews."),
            source: b('2022 年 10 月 27 日 · 第三次修改研究目標時', '27 Oct 2022 · third revision of the research goals') },
        ],
      },
      {
        id: 'findings', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('留下靠小而深的互動，離開多半卡在新手期', 'People stay for small, deep interactions and leave during the newcomer phase'),
        blocks: [
          { t: 'callout', title: b('質化發現', 'Qualitative findings'), text: b('以下來自 18 場訪談與社群觀察，是方向性的發現，不是比例或因果。', 'These come from 18 interviews and community observation. They show direction, not proportions or cause and effect.') },
          { t: 'h3', text: b('留下的人：三人小組是最被肯定的活動', 'Why people stay: the three-person practice group') },
          { t: 'p', text: b('三人一組輪流擔任引導者、被引導者與旁觀者練習對話。每種個性的人都能在裡面找到自己的位置；人少，每個人都會被回應，陪伴感最強。', 'Groups of three rotate as guide, speaker, and observer to practice conversations. Every personality finds a place, and with so few people everyone gets a response, so members feel accompanied.') },
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
          { t: 'p', text: b('潛在用戶是透過信任的朋友、KOL 或平台認識新社群；他們用自己的問題去搜尋（例如「想改善親子關係」），不會用「原子習慣」這類專有名詞。所以溝通要從他們的問題切入，而不是從方法名稱切入。', 'Prospective members find communities through trusted friends, creators, or platforms, and they search using their own problems (like "improve my relationship with my kids"), not terms like "atomic habits." Messaging has to start from their problem, not the method\'s name.') },
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
          { t: 'p', text: b('研究在 2022 年 12 月向業主簡報，三組的發現整合成新手融入、社群內容、社群經營三類建議。這是我第一次完整走過使用者研究，現在回頭看，有四件事我會做得不一樣。', "We presented to the client in December 2022, with the three teams' findings merged into recommendations on onboarding, content, and community operations. It was my first full research project, and looking back there are four things I'd do differently.") },
          { t: 'h3', text: b('1. 用實際行為分群，不用「聽過什麼」分群', '1. Segment by behavior, not by what people have heard of') },
          { t: 'p', text: b('招募問卷用「有沒有聽過原子習慣」分流，結果把一些參加過社群、但沒聽過這個詞的人篩掉了。下次我會用最後一次參加活動的時間、互動頻率、有沒有付費來分群。', "Our screener routed people by whether they'd heard of \"atomic habits,\" which filtered out some who had joined the community but didn't know the term. Next time I'd segment by last activity, interaction frequency, and payment.") },
          { t: 'figure', src: ['img/case5/survey-routing-draft.jpg'], alt: b('招募問卷分流草稿', 'Draft screener routing'), caption: b('當時的問卷分流草稿 · 以「是否聽過原子習慣」作為分流條件', 'Our original screener routing draft, branching on "heard of atomic habits"') },
          { t: 'h3', text: b('2. 每個結論都標出樣本與證據強度', '2. Label every conclusion with sample and strength') },
          { t: 'p', text: b('2026 年我用 AI 協助重新檢視這份研究時，回頭重看當年的問卷資料：認為「做決定時邏輯比心情重要」的比例，聽過原子習慣但沒實踐的人是 70%（14/20），真正在實踐的人只有 25%（3/12）。這比我們當年引用的圖更能檢驗業主的客群假設，但它量的是「有沒有實踐原子習慣」，不是「有沒有留在社群」，樣本也小。下次每個結論我都會寫出樣本數和證據強度。', "Revisiting the study with AI in 2026, I reread our survey data: 70% (14/20) of people who'd heard of atomic habits but didn't practice them said logic matters more than feelings in big decisions, versus 25% (3/12) of active practitioners. That tests the client's audience assumption better than the chart we used, but it measures practicing the method, not staying in the community, and the samples are small. Next time every conclusion gets a sample size and an evidence rating.") },
          { t: 'diagram', kind: 'bars', caption: b('示意圖 · 2026 年回頭重看問卷資料重繪，非當年研究結論', 'Diagram · redrawn in 2026 from the survey data, not a 2022 finding') },
          { t: 'h3', text: b('3. 建立信任，但不引導答案', '3. Build rapport without leading') },
          { t: 'p', text: b('快速和受訪者建立信任是我的強項，但我也學到寒暄和引導的界線：開場稱讚受訪者、分享自己的看法，都可能讓對方順著我的方向回答。下次我會從「最近一次發生的具體事件」問起。', "Building rapport quickly is one of my strengths, but I learned where small talk ends and leading begins: praising a participant or sharing my own view at the start can steer their answers. Next time I'd open with the most recent concrete event.") },
          { t: 'h3', text: b('4. 研究同意和公開展示是兩件事', '4. Research consent is not publishing consent') },
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
    title: b('工作記憶助理：\n會中記得準，會後查得到', 'Work Memory Agent:\naccurate in the meeting, findable after'),
    cardTitle: b('工作記憶助理：記錄會議、提示任務、整理成可備查的摘要', 'Work Memory Agent: record meetings, surface tasks, keep searchable summaries'),
    lead: b(
      '開完會，常記不清誰說了什麼、決定了什麼。我用 AI 開發了一個會議助理：三個本機模型一起辨識中英夾雜的會議，提到相關專案時跳出任務提示，會後整理成附原句的摘要與待辦；介面也從工程師版收斂成辦公室人員的工具。',
      'After meetings, I often couldn\'t recall who said what or what we decided. With AI, I built a meeting assistant: three local models transcribe mixed Chinese-English meetings, related tasks appear when a project comes up, and each meeting becomes a summary and to-dos with source quotes. I also refocused the interface from an engineer\'s tool into one for office staff.',
    ),
    chips: ['Product Design', 'AI Tool', 'Speech-to-text', 'Design System'],
    meta: [
      [b('我的角色', 'My role'), b('需求定義、架構構想、介面與視覺決策、驗收；程式由 AI 實作', 'Defined needs, proposed the architecture, made UI and visual calls, and accepted the work; AI wrote the code')],
      [b('產品', 'Product'), b('個人用 macOS 桌面 App', 'Personal macOS desktop app')],
      [b('期間', 'Period'), b('2026.11 — 現在', '2026.11 — now')],
      [b('狀態', 'Status'), b('開發中 · 分辨講者規劃中 · 尚未在真實會議完整驗收', 'In development · speaker identification planned · not yet fully tested in live meetings')],
    ],
    kpis: [
      ['3', b('個本機模型一起辨識', 'local models listening together'), b('Whisper large-v3-turbo、Breeze-ASR-25、TEA-ASR-1.1 都在電腦本機執行。三個模型錯的地方各不相同，AI 只能從三個版本和公司字典裡挑，不能自己改寫。', 'Whisper large-v3-turbo, Breeze-ASR-25, and TEA-ASR-1.1 all run on the computer. They make different mistakes, and AI may only choose among their versions and the company glossary, never rewrite.')],
      ['3.2 秒', b('內出現即時字幕（95% 段落）', 'to show live captions (95% of segments)'), b('同一場 9 分鐘會議重播量測：修正前 6.7 秒、最慢 17 秒；修正後 3.2 秒、最慢 5.9 秒。', 'Measured by replaying the same 9-minute meeting: 6.7 s before (slowest 17 s), 3.2 s after (slowest 5.9 s).')],
      ['~20', b('個設計變數取代約 90 種寫死顏色', 'design tokens replacing ~90 hard-coded colors'), b('墨綠單一色系加灰階，字級收斂成 4 種，淺深兩色的文字對比都達 4.5:1。', 'One deep-green hue plus grays, four type sizes, and 4.5:1 text contrast in both light and dark modes.')],
    ],
    hero: { kind: 'diagram', diagram: 'memflow', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    card: { kind: 'diagram', diagram: 'memflow', label: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
    webOnly: true,
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('開完會，記不清誰說了什麼、決定了什麼', 'After meetings, I lost track of who said and decided what'),
        blocks: [
          { t: 'p', text: b('最痛的時刻是被追問「那時候為什麼這樣決定」卻接不上。我請 AI 用單選題「拷問」我，兩輪共 8 題，把一長串想做的功能排出先後，定出工具的核心任務：', 'The worst moment was being asked "why did we decide that?" and having no answer. I had AI grill me with single-choice questions, eight across two rounds, to rank a long wish list and set the tool\'s core tasks:') },
          { t: 'table', head: [b('時機', 'When'), b('核心任務', 'Core task'), b('目前狀態', 'Status')], rows: [
            [b('會中', 'During'), b('分辨角色，準確記錄會議內容', 'Identify speakers and record accurately'), b('準確記錄已完成；分辨講者規劃中', 'Accurate recording done; speaker identification planned')],
            [b('會中', 'During'), b('提到相關專案或任務時，顯示多個相關任務提示', 'Show several related tasks when a project or task comes up'), b('已完成，還沒在真實會議完整驗收', 'Done; not yet fully tested in live meetings')],
            [b('會後', 'After'), b('整理內容，做成摘要與任務，備查', 'Organize the content into a summary and tasks for later lookup'), b('已完成：重點、待辦、未決與決策，都附原句', 'Done: highlights, to-dos, open questions, and decisions, each with a source quote')],
          ] },
          { t: 'callout', title: b('目標', 'Goal'), text: b('先讓逐字稿可信，再讓任務提示和會後摘要建立在可信的逐字稿上。', 'Make the transcript trustworthy first, then build task hints and summaries on top of it.') },
          { t: 'p', text: b('但第一版的逐字稿「十分不正確」，中英夾雜尤其差。逐字稿不可信，上層功能都沒有意義，所以我先處理辨識。', 'But the first transcripts were badly wrong, especially with mixed Chinese and English. Without a trustworthy transcript nothing built on top would matter, so I tackled recognition first.') },
          { t: 'h3', text: b('我負責的部分', 'What I did') },
          { t: 'p', text: b('我定義需求、提出架構構想、決定介面與視覺，並用自己的會議驗收；程式由 Claude 實作，計劃另外請 Codex 審閱。', 'I defined the need, proposed the architecture, made the interface and visual decisions, and tested with my own meetings. Claude wrote the code, and Codex reviewed the plan.') },
        ],
      },
      {
        id: 'recognition', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('辨識架構', 'Recognition'),
        title: b('多個模型一起聽，再對照公司字典修正', 'Several models listen, a company glossary corrects'),
        blocks: [
          { t: 'decision', q: b('辨識不準怎麼辦？', 'Recognition is wrong. Now what?'), a: b('多個模型一起辨識，再由 AI 對照公司字典整理', 'Run several models, then let AI reconcile them with a glossary'), text: b('這是我提出的構想。用自己的會議錄音比較後，三個新模型都遠勝原本的小模型，Breeze 和 TEA 對中英夾雜最好；而且三個模型錯的地方各不相同，正好互補。', 'This was my idea. Tested on my own meeting recordings, all three new models far outperformed the original small one, with Breeze and TEA best on mixed Chinese and English, and each made different mistakes, so they cover for each other.') },
          { t: 'decision', q: b('會中要快、會後要準，怎麼兼顧？', 'Fast during, accurate after. How?'), a: b('分成兩層處理', 'Split it into two layers'), text: b('會中只做粗略快速的修正，讓字幕先出來；會後再由三個模型整場重轉，先通讀全場，再對照字典逐批精修。', 'During the meeting, only quick fixes so captions appear fast; afterward, all three models re-transcribe the whole meeting, which is read in full and then refined batch by batch against the glossary.') },
          { t: 'decision', q: b('AI 會不會把句子改得很通順但是錯的？', 'Could AI make sentences fluent but wrong?'), a: b('限制 AI 只能挑，不能改寫', 'Let AI choose, never rewrite'), text: b('AI 只能從三個模型的版本和字典裡挑出組合；沒把握的地方就列為「待確認詞」，不自己猜。', 'AI may only combine what the three models heard and what the glossary contains; anything uncertain is flagged for review instead of guessed.') },
          { t: 'diagram', kind: 'correction', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'h3', text: b('公司字典', 'The company glossary') },
          { t: 'p', text: b('我指定從工作資料和官網的酒店資料整理字典，共 774 個詞，另有 3,800 間酒店的參考清單。實測時，被聽成「力力子、萬號、卡賠、香港回禮、波西蛇」的詞，被認回立鼎世、萬豪、Capella、Rosewood、Four Seasons。', 'I had the glossary built from work material and hotel data on our website: 774 terms plus a reference list of 3,800 hotels. In testing, words misheard as nonsense were restored to Leading Hotels of the World, Marriott, Capella, Rosewood, and Four Seasons.') },
        ],
      },
      {
        id: 'hints', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('任務提示', 'Task hints'),
        title: b('提到相關專案時，旁邊就跳出相關任務', 'Mention a project, and related tasks appear'),
        blocks: [
          { t: 'p', text: b('原本的計劃是從會議裡慢慢累積任務資料。我直接提供團隊每週更新的任務表和自己的工作日誌當來源，任務庫因此當天就建好，不必從零開始。', 'The plan was to build up task data from meetings over time. Instead I pointed it at the team\'s weekly-updated task sheet and my own work log, so the task library was ready the same day.') },
          { t: 'decision', q: b('開會時怎麼知道該提示哪些任務？', 'How does it know which tasks to show?'), a: b('比對最近一分鐘的談話，在本機完成', 'Match the last minute of talk, entirely on the computer'), text: b('每段字幕都和最近一分鐘的談話一起比對任務庫，最多顯示 5 張相關任務卡，可以釘選；比對全程在本機，不呼叫 AI。沒在開會時，同一個區塊可以手動查詢。', 'Each caption segment, together with the last minute of talk, is matched against the task library, showing up to 5 related task cards that can be pinned; matching runs locally with no AI call. Outside meetings, the same panel works as manual search.') },
          { t: 'p', text: b('第一次用錄好的會議檢查時，提示欄在閒聊中也跳出無關的卡片，雜訊比幫助多。我把這個修正提前處理，細節見「實作與驗證」。', 'The first check with recorded meetings showed irrelevant cards popping up during small talk, more noise than help. I moved that fix forward; details are under Build.') },
        ],
      },
      {
        id: 'plan', caps: ['pm'], tags: ['PM'], toc: b('計劃與挑戰', 'Planning'),
        title: b('計劃越寫越大時，主動找人挑戰', 'When the plan grew, I asked to be challenged'),
        blocks: [
          { t: 'p', text: b('下一步要把工具收斂成辦公室人員也能用的版本，計劃從 v1 一路改到 v5。計劃變大後，我先要 AI 自省整個計劃，再請另一個 AI（Codex）當挑戰者審閱。', 'The next step was turning the tool into something office staff could use, and the plan went from v1 to v5. As it grew, I first asked AI to review its own plan, then had another AI, Codex, review it as a challenger.') },
          { t: 'diagram', kind: 'plan', caption: b('示意圖 · 依開發紀錄重繪', 'Diagram · redrawn from the development notes') },
          { t: 'p', text: b('兩次挑戰改變了順序：核心需求「決策擷取」從第 6 階段提前到第 2 階段，錄音保護也提前到最前面。', 'Both reviews changed the order: the core need, decision extraction, moved from phase 6 to phase 2, and recording safety moved to the front.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面收斂', 'Design'),
        title: b('從工程師的工具，收斂成辦公室人員的工具', 'From an engineer\'s tool to an office tool'),
        blocks: [
          { t: 'p', text: b('第一版是用工程角度做的。我要求用介面設計師的方法重新盤點：情境走查、內容盤點、使用性原則，看過 7 個頁面，找出 7 個跨頁問題。', 'The first version was built from an engineering angle. I had it re-audited the way an interface designer would, with scenario walkthroughs, a content inventory, and usability heuristics: 7 pages reviewed, 7 cross-page problems found.') },
          { t: 'h3', text: b('首頁：只留開會時用得到的東西', 'Home: only what a meeting needs') },
          { t: 'p', text: b('原本首頁有寫死的日期、8 張示意資料卡和整排工程說明。改版後拿掉這些，依狀態切換：會前是查詢、準備開會、我的未完成；會中是錄音列、字幕與相關任務。', 'The old home page had a hard-coded date, 8 placeholder cards, and rows of engineering notes. They\'re gone; the page now switches by state: before a meeting, search, prepare, and my open items; during one, the recording bar, captions, and related tasks.') },
          { t: 'figure', src: ['img/case6/home-before.jpg'], alt: b('改版前的首頁：寫死日期與多張說明卡', 'Old home page with a fixed date and many info cards'), caption: b('工作記憶助理實際畫面 · 改版前的首頁 · 卡片是 App 內建的示意資料', 'Work Memory Agent screenshot · old home page · cards are built-in sample data') },
          { t: 'figure', src: ['img/case6/home-after.png'], alt: b('改版後的首頁（會前）：查詢、準備開會、我的未完成、最近的會議', 'New home page before a meeting: search, prepare, open items, recent meetings'), caption: b('工作記憶助理實際畫面 · 改版後的首頁（會前）· 清單含同事與客戶資訊，已遮蔽', 'Work Memory Agent screenshot · new home page, before a meeting · lists hidden for privacy') },
          { t: 'h3', text: b('字幕：糾正後原地覆蓋', 'Captions: corrections replace the draft') },
          { t: 'p', text: b('原本三個模型的字幕並排顯示。我說「我還是需要及時看到有東西出來」，參考 Notion 會議記錄，提出單欄字幕：先出草稿，AI 糾正後原地替換，行尾標示草稿、已糾錯或有疑點；三個模型的原文收進可展開區。', 'Captions from the three models used to sit side by side. I needed to see text right away, so, taking Notion\'s meeting notes as a reference, I proposed a single column: a draft first, replaced in place once AI corrects it, with each line marked draft, corrected, or uncertain. The raw model output moved into an expandable area.') },
          { t: 'figure', src: ['img/case6/captions-before.jpg'], alt: b('改版前：三個模型的逐字稿並排顯示，右側是相關任務', 'Before: three model transcripts side by side, related tasks on the right'), caption: b('工作記憶助理實際畫面 · 改版前：三個模型並排的即時逐字稿與相關任務 · 以系統語音模擬會議', 'Work Memory Agent screenshot · before: three transcripts side by side with related tasks · simulated meeting audio') },
          { t: 'figure', src: ['img/case6/captions-after.png'], alt: b('改版後：單欄字幕，行尾標示草稿、已糾錯或有疑點，右側是相關任務與決策', 'After: one caption column with status per line, related tasks and decisions on the right'), caption: b('工作記憶助理實際畫面 · 改版後：單欄字幕與相關任務 · 會議內容已遮蔽', 'Work Memory Agent screenshot · after: single caption column and related tasks · meeting content hidden') },
          { t: 'h3', text: b('設定：工程欄位收進進階', 'Settings: engineering fields tucked away') },
          { t: 'p', text: b('工程欄位「全部收進進階，不刪」，設定頁分成幾個區塊，並寫明逐字稿會送到哪裡。', 'Engineering fields went into an Advanced section rather than being deleted, settings were grouped, and the page now states where transcripts are sent.') },
          { t: 'figure', src: ['img/case6/settings-before.jpg'], alt: b('改版前的設定頁：Provider、Local command 等工程欄位直接攤開', 'Old settings page with engineering fields such as Provider and Local command'), caption: b('工作記憶助理實際畫面 · 設定頁改版前', 'Work Memory Agent screenshot · settings before') },
          { t: 'figure', src: ['img/case6/settings-after.png'], alt: b('改版後的設定頁：工程欄位收進進階，並寫明逐字稿會送到哪裡', 'New settings page: engineering fields under Advanced, with where transcripts are sent'), caption: b('工作記憶助理實際畫面 · 設定頁改版後', 'Work Memory Agent screenshot · settings after') },
          { t: 'h3', text: b('視覺：單一色系、少粗體', 'Visuals: one hue, fewer bold weights') },
          { t: 'compare', title: b('過程證據：第一版樣張 vs 我的修改原則', 'Evidence: first specimen vs my revision'), aiLabel: b('第一版樣張', 'First specimen'), meLabel: b('我的修改原則', 'My direction'),
            ai: b('macOS 藍色當強調色；「未確認」「附條件」「資訊」各用不同顏色；粗體很多。', 'macOS blue as the accent; "unconfirmed," "conditional," and "info" each in a different color; lots of bold.'),
            me: b('「顏色不要太多種，用單一色系深淺變化」「字體不要太多粗體字，感覺整個很厚重，又不知道畫面重點」。保留原本的墨綠，標籤改成灰階，粗體只留標題。第二版一次通過，直接套用。', '"Not too many colors, use shades of one hue." "Not so much bold; it feels heavy and hides what matters." I kept the original deep green, turned tags gray, and limited bold to headings. The second version passed on the first try.'),
            source: b('2026 年 11 月 18 日 · 確認視覺樣張時', '18 Nov 2026 · reviewing the visual specimen') },
          { t: 'figure', src: ['img/case6/specimen-v1.jpg'], alt: b('第一版視覺樣張：藍色強調色、多色標籤', 'First visual specimen: blue accent and multicolor tags'), caption: b('第一版視覺樣張 · 淺色與深色模式 · 示意資料', 'First visual specimen · light and dark · sample data') },
          { t: 'figure', src: ['img/case6/specimen-v2.jpg'], alt: b('第二版視覺樣張：墨綠單一色系、灰色標籤', 'Second visual specimen: one deep-green hue and gray tags'), caption: b('依我的回饋修改的第二版 · 已套用到整個 App · 示意資料', 'Second specimen, revised from my feedback · applied across the app · sample data') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('會後整理', 'After the meeting'),
        title: b('會後整理成摘要與任務，每一條都找得到原句', 'Summaries and tasks after each meeting, all traceable to a quote'),
        blocks: [
          { t: 'p', text: b('會議結束後，工具自動擷取重點、待辦、未決事項與決策候選。這些整理好的內容留著備查：被追問時，要能找到當初的決定。', 'After each meeting, the tool extracts highlights, to-dos, open questions, and decision candidates, kept for later lookup: when someone asks, I can find the original decision.') },
          { t: 'decision', q: b('怎麼避免 AI 編出不存在的決定？', 'How do we stop AI inventing decisions?'), a: b('每條都要附逐字稿原句，找不到就清空', 'Each needs a transcript quote, or it\'s cleared'), text: b('每個欄位都要對得回逐字稿裡的原句；對不回來的欄位直接清空，不讓 AI 補。', 'Every field must match a sentence in the transcript; fields that don\'t are cleared rather than filled in by AI.') },
          { t: 'decision', q: b('還分不出誰在說話，人物怎麼填？', 'Speakers aren\'t identified yet. Who said it?'), a: b('讓 AI 推測，但標出信心度', 'Let AI guess, with a confidence label'), text: b('分辨講者排在之後的階段；在那之前，提出人由 AI 推測並標示信心度，確認前都只是候選。', 'Speaker identification comes in a later phase; until then, AI guesses who proposed it and labels its confidence, and everything stays a candidate until confirmed.') },
          { t: 'figure', src: ['img/case6/decision.png'], alt: b('會後擷取的決策卡：附依據原句，可以修改或回聽原音', 'Extracted decision card with its source quote, edit and replay buttons'), caption: b('工作記憶助理實際畫面 · 會後擷取的決策 · 附依據原句，可修改或回聽原音', 'Work Memory Agent screenshot · an extracted decision · source quote, edit, and replay') },
          { t: 'p', text: b('確認後會保存前後 15 秒的原音，被追問時可以直接回聽；沒確認的候選 30 天後自動封存。', 'Once confirmed, 15 seconds of audio on each side are kept for replay; unconfirmed candidates are archived after 30 days.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('沒有會議，也先用錄好的會議驗收', 'No meeting? Test with recorded ones'),
        blocks: [
          { t: 'p', text: b('檢查點原本要等真實會議。當下沒有會議，我請 AI 用錄好的會議重播代跑，結果發現會中提示欄「雜訊多於幫助」：閒聊 3 分鐘就跳出 4 張無關的任務卡。這個修正因此從第 9 階段提前到第 4 階段，修完後雜訊降到 0 張。', 'The checkpoint was meant to wait for live meetings. With none scheduled, I had AI replay recorded ones instead, and it showed the in-meeting hint panel did more harm than good: 4 irrelevant task cards in 3 minutes of small talk. The fix moved from phase 9 to phase 4 and brought the noise down to zero.') },
          { t: 'diagram', kind: 'latency', caption: b('示意圖 · 依重播量測數據重繪', 'Diagram · redrawn from replay measurements') },
          { t: 'p', text: b('字幕延遲也是用同一種方法量：重播同一場 9 分鐘會議，95% 段落的草稿延遲從 6.7 秒降到 3.2 秒。另外，錄音每 2 秒寫進硬碟，當機或關掉視窗都不會遺失。', 'Caption delay was measured the same way, replaying one 9-minute meeting: the 95th-percentile draft delay fell from 6.7 to 3.2 seconds. Recordings are also written to disk every 2 seconds, so a crash or closed window loses nothing.') },
          { t: 'table', rows: [
            [b('需求', 'Needs'), b('用單選題拷問、整理功能排序', 'Grill me with questions, rank features'), b('作答、定出核心需求', 'Answer and set the core need')],
            [b('實作', 'Build'), b('寫程式、跑測試、打包', 'Write code, run tests, package'), b('提出架構構想、決定介面與視覺', 'Propose the architecture, decide UI and visuals')],
            [b('驗收', 'Verify'), b('重播錄音代跑檢查點、量延遲', 'Replay recordings, measure delay'), b('用自己的會議回饋、決定下一步順序', 'Test in my own meetings, choose what comes next')],
          ] },
          { t: 'callout', title: b('這些數字的限制', 'Limits of these numbers'), text: b('代跑時，決策的標註和擷取都由 AI 做，延遲也是在同一段錄音上調整與量測，所以只代表方向對了；真實會議的效果還要再驗證。', 'In the replays, AI both labeled and extracted the decisions, and delay was tuned and measured on the same recording, so these show direction, not proof; live meetings still need to confirm them.') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('先讓逐字稿可信，再讓決策找得到', 'First a trustworthy transcript, then findable decisions'),
        blocks: [
          { t: 'p', text: b('目前已完成三模型辨識與兩段式糾錯、會後決策擷取、會前與會中兩種首頁、單一色系的視覺系統，並打包安裝在自己的電腦上。和第一版相比，我在自己的會議裡感受到辨識正確率大幅提升，但還沒有量化。', 'Done so far: three-model recognition with two-layer correction, post-meeting decision extraction, before- and during-meeting home states, and a one-hue visual system, packaged and installed on my computer. In my own meetings recognition feels far better than the first version, but it isn\'t quantified yet.') },
          { t: 'h3', text: b('下一步', 'Next') },
          { t: 'p', text: b('用真實會議驗收任務提示和會後整理；補上核心任務中還沒做的分辨講者，先分出「我」和「別人」，再做單場的講者分群；接著收斂導覽、做統一搜尋。', 'Validate task hints and post-meeting summaries in live meetings; add the missing core task, speaker identification, first telling me apart from others, then grouping speakers within a meeting; then simplify navigation and add unified search.') },
          { t: 'h3', text: b('下次會怎麼做', 'What I\'d do next time') },
          { t: 'p', text: b('一開始就固定一段錄音加人工校對稿當基準，量出辨識正確率；驗收用的句子和調整用的句子分開；工時也照和 AI 協作的實際速度來估。', 'Set a baseline from day one, a fixed recording with a hand-checked transcript, to measure accuracy; keep test sentences separate from tuning sentences; and estimate time at the real pace of working with AI.') },
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
