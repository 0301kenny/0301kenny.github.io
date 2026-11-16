import sys, os
OUT = sys.argv[1]
FONT = "'Noto Sans TC','PingFang TC','Helvetica Neue',Arial,sans-serif"
SERIF = "'Noto Serif TC','Songti TC',Georgia,serif"
INK = "#2E2E2D"; SUB = "#8A8A86"; LINE = "#E4E3DF"; BG = "#F4F4F2"; NAVY = "#1C2230"; GOLD = "#B08D57"; BAR = "#D9D8D3"

def t(x, y, s, size=13, fill=INK, weight=400, anchor="start", font=FONT):
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" font-weight="{weight}" text-anchor="{anchor}">{s}</text>'

def r(x, y, w, h, fill, rx=0, stroke=None):
    st = f' stroke="{stroke}"' if stroke else ''
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{st}/>'

def photo(x, y, w, h, rx=0, gid="g1"):
    return r(x, y, w, h, f"url(#{gid})", rx)

GRADS = '''<defs>
<linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9CFD3"/><stop offset="1" stop-color="#8E9AA3"/></linearGradient>
<linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B7C3C9"/><stop offset=".6" stop-color="#7D8F86"/><stop offset="1" stop-color="#F4F4F2"/></linearGradient>
<linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D8CDBD"/><stop offset="1" stop-color="#A89880"/></linearGradient>
</defs>'''

def svg(w, h, body, title):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{title}"><title>{title}</title>{GRADS}{body}</svg>'

# ---------- UI Spec overview ----------
def mini_phone(x, y, w, h, label, dark=False, tbd=False):
    s = [r(x, y, w, h, NAVY if dark else "#FFFFFF", 4, LINE)]
    lx = x + 6
    if dark:
        s.append(r(x + w/2 - 10, y + h*0.42, 20, 20, "none", 10, GOLD))
        s.append(r(lx + 6, y + h*0.62, w - 24, 4, "#4A5163", 2))
        s.append(r(lx + 14, y + h*0.62 + 10, w - 40, 4, "#4A5163", 2))
    else:
        s.append(r(lx, y + 8, w*0.45, 5, BAR, 2))
        s.append(r(lx, y + 20, w - 12, 22, BG, 3))
        s.append(t(lx + 6, y + 36, "00", 11, INK, 600, font=SERIF))
        s.append(photo(lx, y + 50, w - 12, 34, 2, "g1" if len(label) % 2 else "g3"))
        for k in range(4):
            s.append(r(lx, y + 92 + k*9, (w - 12) * (0.9 - 0.15*(k % 2)), 4, BAR, 2))
        s.append(photo(lx, y + 132, w - 12, 30, 2, "g3"))
        s.append(r(lx, y + h - 18, w - 12, 10, NAVY, 2))
    s.append(t(x, y - 8, label, 10.5, SUB))
    if tbd:
        s.append(r(x + w - 30, y - 19, 30, 14, "#E7C873", 3))
        s.append(t(x + w - 15, y - 9, "TBD", 9, INK, 600, "middle"))
    return "".join(s)

def uispec():
    W, H = 1200, 720
    s = [r(0, 0, W, H, BG)]
    # top bar
    s += [r(0, 0, W, 56, "#FFFFFF"), r(0, 56, W, 1, LINE)]
    for k in range(3): s.append(r(20, 20 + k*6, 18, 2, INK))
    s.append(t(56, 34, "Product_UI_SPEC", 17, INK, 500, font=SERIF))
    s += [r(214, 21, 40, 18, "none", 3, "#C0392B"), t(234, 34, "DEV", 10, "#C0392B", 500, "middle")]
    x = 610
    s += [r(x, 16, 228, 26, BG, 3), t(x + 10, 34, "視窗寬", 12, SUB)]
    for i, wv in enumerate(["1440", "1280", "1024", "375"]):
        bx = x + 56 + i*43
        if wv == "375": s.append(r(bx - 4, 16, 44, 26, NAVY, 3))
        s.append(t(bx + 18, 34, wv, 12, "#FFFFFF" if wv == "375" else INK, 500, "middle"))
    x = 860
    s.append(r(x, 16, 132, 26, BG, 3))
    for i, lg in enumerate(["繁中", "簡中", "EN"]):
        bx = x + i*44
        if i == 0: s.append(r(bx, 16, 44, 26, NAVY, 3))
        s.append(t(bx + 22, 34, lg, 12, "#FFFFFF" if i == 0 else INK, 500, "middle"))
    s += [r(1010, 16, 92, 26, BG, 3), t(1022, 34, "輔助線 ▾", 12, INK)]
    s += [r(1114, 16, 66, 26, BG, 3), t(1147, 34, "14%", 12, INK, 500, "middle")]
    # sidebar
    s += [r(0, 57, 300, H - 57, "#FFFFFF"), r(300, 57, 1, H - 57, LINE)]
    s += [r(14, 72, 272, 34, "#FFFFFF", 4, "#C9C8C3"), t(30, 94, "⌕  搜尋頁面 / 檔名", 13, SUB)]
    items = [("總覽", "用法、同步狀態、TBD 清單", None), ("最近修改頁面", "每張卡片各自記修改時間", "25"),
             ("頁面副本", "真元件 + 假資料", "129")]
    y = 124
    for name, sub, n in items:
        s += [t(28, y + 18, name, 14, INK, 500), t(28, y + 36, sub, 11, SUB)]
        if n: s += [r(232, y + 14, 30, 18, BG, 9), t(247, y + 27, n, 11, SUB, 500, "middle")]
        s.append(r(0, y + 52, 300, 1, LINE)); y += 56
    groups = [("Journey Rewards", 35, True), ("禮券", 43, False), ("通知信", 21, False), ("會員中心", 18, False), ("訂單", 12, False)]
    for g, n, act in groups:
        if act: s += [r(0, y, 300, 38, "#EEEDE9"), r(0, y, 3, 38, NAVY)]
        s += [t(36, y + 24, g, 13, INK, 500 if act else 400), t(262, y + 24, str(n), 12, SUB, 400, "end")]
        y += 40
    s.append(r(0, y + 4, 300, 1, LINE))
    s += [t(28, y + 32, "設計 Token", 14, INK, 500), t(28, y + 50, "色票 / 字級 / 間距", 11, SUB)]
    # main
    s += [r(324, 76, 852, 60, "#FFFFFF", 4), t(344, 104, "頁面副本 · Journey Rewards", 17, INK, 500, font=SERIF),
          t(344, 124, "35 個狀態 · 375 寬實際重排 · 滾輪平移 · Cmd / Ctrl + 滾輪縮放 · 雙擊格子放大", 11, SUB)]
    labels = [("等級 A", 0, 0), ("等級 B", 0, 0), ("等級 C", 0, 0), ("等級 D", 0, 1), ("餘額不足", 0, 0), ("兌換確認", 1, 0), ("兌換成功", 0, 0), ("空狀態", 0, 0),
              ("已過期", 0, 0), ("庫存不足", 0, 1), ("載入中", 0, 0), ("錯誤", 1, 0), ("明細", 0, 0), ("規則說明", 0, 0), ("紀錄", 0, 0), ("升級引導", 1, 0)]
    pw, ph, gx, gy = 88, 200, 18, 42
    for i, (lb, dk, tb) in enumerate(labels):
        c, rr = i % 8, i // 8
        s.append(mini_phone(344 + c*(pw + gx) + 6, 172 + rr*(ph + gy), pw, ph, lb, bool(dk), bool(tb)))
    s.append(t(1176, 708, "示意圖 · 資料與名稱皆為虛構", 11, SUB, 400, "end"))
    return svg(W, H, "".join(s), "UI Spec 規格瀏覽工具示意圖")

# ---------- phone frame ----------
def phone_shell(body, W=390, H=844):
    return [r(0, 0, W, H, BG)] + body

def tabbar(W, H, active=0):
    s = [r(0, H - 64, W, 64, "#FFFFFF"), r(0, H - 64, W, 1, LINE)]
    for i, lb in enumerate(["酒店預訂", "訂單", "帳戶"]):
        cx = W/6 + i*W/3; col = GOLD if i == active else SUB
        s += [r(cx - 9, H - 50, 18, 16, col, 4), t(cx, H - 18, lb, 11, col, 400, "middle")]
    return s

def liff_home():
    W, H = 390, 844
    s = [photo(0, 0, W, 300, 0, "g2"),
         t(22, 94, "匠心訂製 · 尊榮啟程", 22, "#FFFFFF", 600, font=SERIF),
         t(22, 118, "精選酒店 · 專屬禮遇 · 尊榮入住", 12, "#FFFFFF")]
    cy = 150
    s += [r(16, cy, W - 32, 236, "#FFFFFF", 10)]
    s += [t(W/2 - 82, cy + 32, "酒店預訂", 15, INK, 500, "middle"), t(W/2 + 82, cy + 32, "通關禮遇", 15, SUB, 400, "middle"),
          r(32, cy + 46, (W - 64)/2, 2, INK), r(32 + (W - 64)/2, cy + 47, (W - 64)/2, 1, LINE)]
    s += [r(32, cy + 66, W - 64, 44, BG, 6), t(52, cy + 94, "⌕", 16, SUB), t(78, cy + 93, "尋找酒店或目的地", 14, SUB)]
    s += [r(32, cy + 122, W - 64, 44, BG, 6), t(56, cy + 150, "12/03", 15, INK, 500), t(100, cy + 150, "三", 10, SUB),
          r(140, cy + 134, 42, 20, "#E6E5E0", 10), t(161, cy + 148, "1 晚", 11, INK, 500, "middle"),
          t(196, cy + 150, "12/04", 15, INK, 500), t(240, cy + 150, "四", 10, SUB), r(268, cy + 132, 1, 24, LINE),
          t(290, cy + 150, "2", 15, INK, 500), t(304, cy + 150, "成人", 10, SUB)]
    s += [r(32, cy + 180, W - 64, 42, NAVY, 4), t(W/2, cy + 206, "搜尋", 15, "#FFFFFF", 500, "middle")]
    by = cy + 256
    s += [r(16, by, W - 32, 176, "#FFFFFF", 10), r(32, by + 20, 22, 22, NAVY, 11),
          t(62, by + 36, "會員尊享禮遇", 14, INK), t(W - 32, by + 36, "更多權益 ›", 12, GOLD, 400, "end"),
          r(32, by + 56, W - 64, 104, BG, 6)]
    perks = [("免費早餐", "每日兩客"), ("房型升等", "依現場安排"), ("提早入住 / 延遲退房", "依現場安排"), ("酒店消費折抵", "依方案提供")]
    for i, (a, b) in enumerate(perks):
        px = 46 + (i % 2)*162; py = by + 72 + (i // 2)*46
        s += [r(px, py, 26, 26, "#E6E5E0", 13), t(px + 36, py + 12, a, 13, INK, 500), t(px + 36, py + 28, b, 10, SUB)]
    ny = by + 200
    s.append(t(16, ny, "新開幕酒店", 14, INK, 500))
    for i in range(2):
        x = 16 + i*186
        s += [photo(x, ny + 14, 172, 110, 8, "g1" if i == 0 else "g3"),
              r(x + 8, ny + 22, 58, 18, "#FFFFFF", 3), t(x + 37, ny + 35, "住三付二", 10, INK, 500, "middle"),
              r(x, ny + 132, 120, 8, BAR, 3), r(x, ny + 148, 80, 6, BAR, 3)]
    s += tabbar(W, H, 0)
    s.append(t(W - 14, 24, "示意圖 · 資料皆為虛構", 10, "#FFFFFF", 400, "end"))
    return svg(W, H, "".join(phone_shell(s)), "LINE LIFF 訂房首頁示意圖")

def liff_rooms():
    W, H = 390, 844
    s = [photo(0, 0, W, 200, 0, "g1"), r(16, 172, W - 32, 1, "none")]
    s += [r(0, 200, W, H - 200, BG)]
    s += [t(20, 236, "Hotel Example", 20, INK, 500, font=SERIF), r(20, 248, 180, 6, BAR, 3)]
    s += [r(20, 270, 300, 40, "#FFFFFF", 20, LINE), t(42, 295, "12/03", 14, INK, 500), r(94, 281, 40, 18, "#E6E5E0", 9),
          t(114, 294, "1 晚", 10, INK, 500, "middle"), t(146, 295, "12/04", 14, INK, 500), r(200, 280, 1, 20, LINE),
          t(214, 295, "2 成人", 13, INK), r(334, 276, 28, 28, "none", 14, INK)]
    s += [t(20, 344, "禮遇方案", 14, SUB), t(108, 344, "全部方案", 14, INK, 500), r(100, 354, 78, 2, INK),
          r(20, 356, W - 40, 1, LINE), t(W - 20, 344, "卡片檢視", 12, SUB, 400, "end")]
    rooms = [("市景客房", "King Room City"), ("市景雙床房", "Twin Room City"), ("海灣景客房", "King Bay View")]
    y = 372
    for i, (zh, en) in enumerate(rooms):
        s += [r(20, y, W - 40, 168, "#FFFFFF", 6), photo(20, y, 104, 168, 0, "g3" if i % 2 else "g1")]
        x = 136
        s += [t(x, y + 26, zh, 15, INK, 500), t(x, y + 44, en, 11, SUB)]
        feats = ["城市景", "特大床", "1 間臥室", "00 平方米"]
        for k, f in enumerate(feats):
            fx = x + (k % 2)*104; fy = y + 66 + (k // 2)*18
            s += [r(fx, fy - 9, 10, 10, BAR, 2), t(fx + 16, fy, f, 11, SUB)]
        s += [r(x, y + 104, W - 40 - 128, 1, LINE), r(x, y + 114, 58, 18, "none", 3, "#C9C8C3"), t(x + 29, y + 127, "會員優惠", 10, INK, 400, "middle")]
        s += [r(x, y + 140, 22, 22, NAVY, 11), t(W - 72, y + 138, "1 晚含稅", 10, GOLD, 400, "end"),
              t(W - 168, y + 157, "TWD", 10, SUB), r(W - 136, y + 146, 64, 14, BAR, 3), r(W - 62, y + 142, 20, 20, BG, 10)]
        y += 182
    s += tabbar(W, H, 0)
    s.append(t(W - 14, 24, "示意圖 · 資料皆為虛構", 10, "#FFFFFF", 400, "end"))
    return svg(W, H, "".join(s), "LINE LIFF 房型列表示意圖")

for name, fn in [("uispec-overview.svg", uispec), ("liff-home.svg", liff_home), ("liff-room-list.svg", liff_rooms)]:
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(fn())
print("ok")
