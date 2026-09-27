# tsaopaofenghsiung2025

草包鋒兄 2025 → 2038 全紀錄。Next.js 16（App Router）+ Tailwind CSS 4。

## 內容儲存：Vercel Blob

所有頁面內容（首頁相簿、經歷、團隊成員、第8屆回顧、畢業紀念冊、關於）存放在 Vercel Blob 的
`content/site.json`。

- 讀取：`lib/content/store.ts` 的 `getContent()`；頁面每 60 秒重新產生，儲存時也會立即 revalidate。
- 尚未寫入 Blob、或未設定 token 時，自動使用 `lib/content/defaults.ts` 的預設內容，網站不會壞。
- 寫入前以預設資料結構驗證（`lib/content/validate.ts`），格式錯誤會被拒絕。

### 設定

1. 在 Vercel 專案 → Storage 建立 / 連結一個 **Blob store**（會自動注入 `BLOB_READ_WRITE_TOKEN`）。
2. 在 Environment Variables 新增 `ADMIN_TOKEN`（長隨機字串）。
3. 部署後打開 `/admin`，輸入 `ADMIN_TOKEN` 登入 → 「儲存到 Vercel Blob」即完成第一次寫入。

本機開發：`vercel env pull .env.local` 或參考 `.env.example`。

### 後台 `/admin`

- 依區塊以 JSON 編輯內容，即時驗證格式。
- 媒體庫：上傳圖片 / 影片 / PDF 到 Blob 的 `uploads/`（瀏覽器直傳，最大 200MB），可複製網址或一鍵加入首頁相簿。

### API

| 路徑 | 說明 |
| --- | --- |
| `GET /api/content` | 目前的網站內容 |
| `PUT /api/content` | 寫入內容（`Authorization: Bearer <ADMIN_TOKEN>`） |
| `GET /api/member` | 成員列表 |
| `GET /api/member/[name]` | 查詢成員職位 |

## 開發

```bash
npm install
npm run dev
```
