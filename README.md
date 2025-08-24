# 圖書館座位查詢系統

## 專案簡介

本專案是一個使用 Next.js + TypeScript 開發的單頁應用（SPA），用於即時顯示臺北市立圖書館各分館的座位剩餘與總數資訊。資料來自[臺北市政府公開 API](https://data.taipei/dataset/detail?id=83f98c41-a8be-4a64-94ad-1aebb516c367)，專注於易用美觀的使用者介面與現代化前端開發型態。

## 專案特色

- 🚀 **即時自動更新** - 每 60 秒自動刷新座位資料，並顯示倒數計時器
- 📱 **響應式設計** - 使用 [shadcn UI](https://ui.shadcn.com/) 搭配 Tailwind CSS 架構現代且美觀的介面
- 🎨 **主題切換** - 支援亮/暗主題切換，並跟隨系統主題設定
- 📊 **分館分類** - 以分頁方式呈現各分館，包含統計資訊和視覺化進度條
- 🔄 **手動刷新** - 除了自動更新，使用者還能隨時手動刷新資料
- ⏰ **更新時間顯示** - 顯示最後更新時間，確保資料透明度
- 🎯 **組件化架構** - 模組化設計，易於維護和擴展
- 💻 **現代技術棧** - 使用 Next.js、TypeScript、Zustand 等現代前端技術

## 技術架構

| 技術名稱     | 版本/說明                       |
| ------------ | ------------------------------- |
| Next.js      | React 框架，實現 SSR 與 SPA     |
| TypeScript   | 提供靜態型別                    |
| shadcn UI    | React 組件庫，基於 Tailwind CSS |
| Tailwind CSS | 實用程式 CSS                    |
| Zustand      | 輕量化 React 狀態管理           |
| Axios        | HTTP 請求工具                   |

## 功能說明

### 📊 即時座位資訊
- 即時取得臺北市立圖書館座位資訊（API來自：https://seat.tpml.edu.tw/sm/service/getAllArea）
- API 每 1-10 分鐘更新一次，確保資料即時性

### 🔄 自動更新機制
- **60 秒自動刷新** - 背景自動更新座位資訊
- **倒數計時器** - 顯示下次自動更新剩餘時間
- **手動刷新** - 使用者可隨時手動觸發更新
- **更新時間戳** - 顯示最後更新的確切時間

### 🎯 用戶介面
- **分館分頁** - 依圖書館分館分類，方便瀏覽
- **統計面板** - 顯示各分館的區域數量、可用座位、總座位數
- **視覺化卡片** - 座位區域以卡片形式呈現，包含：
  - 座位使用率進度條（顏色編碼：綠色充足、黃色適中、橙色緊張、紅色已滿）
  - 可用座位數與總座位數
  - 區域名稱與所在樓層
- **響應式設計** - 支援桌面、平板、手機等不同螢幕尺寸

### 🎨 主題與體驗
- **深色/淺色主題** - 支援手動切換或跟隨系統設定
- **載入狀態** - 優雅的載入動畫與錯誤處理
- **空狀態處理** - 友善的空資料提示

## 開發指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置專案
npm run build

# 啟動正式版本
npm run start

# 程式碼檢查
npm run lint
```

## 專案結構

```
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 主頁面
│   └── layout.tsx         # 全域布局
├── components/            # 可重用組件
│   ├── ui/                # shadcn UI 基礎組件
│   ├── library-header.tsx # 頁面標題與主題切換
│   ├── refresh-button.tsx # 刷新按鈕與計時器
│   ├── branch-tabs.tsx    # 分館選項卡
│   ├── branch-stats.tsx   # 統計面板
│   ├── seat-area-card.tsx # 座位區域卡片
│   └── loading-error-states.tsx # 載入與錯誤狀態
├── store/                 # Zustand 狀態管理
├── types/                 # TypeScript 型別定義
└── lib/                   # 工具函數
```
