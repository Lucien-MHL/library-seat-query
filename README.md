# 圖書館座位查詢系統

## 專案簡介

本專案是一個使用 Next.js + TypeScript 開發的單頁應用（SPA），用於顯示臺北市立圖書館各分館的座位剩餘與總數資訊。資料來自[臺北市政府公開 API](https://data.taipei/dataset/detail?id=83f98c41-a8be-4a64-94ad-1aebb516c367)，專注於易用美觀的使用者介面與現代化前端開發型態。

## 專案特色

- 使用 [Next.js](https://nextjs.org/) 開發，結合 React 的伺服器端渲染與客戶端渲染優勢
- 使用 TypeScript 提升程式碼可維護性與型別安全
- 利用 [shadcn UI](https://ui.shadcn.com/) 搭配 Tailwind CSS 架構現代且美觀的介面
- 採用 [Zustand](https://zustand-demo.pmnd.rs/) 管理客戶端狀態
- 以 [Axios](https://axios-http.com/) 實現 API 請求
- 支援亮/暗主題切換，並跟隨系統主題設定
- 表格化呈現各分館、樓層及區域的可用座位與總座位數，使用者能手動刷新資料

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

- 即時取得臺北市立圖書館座位資訊（API來自：https://seat.tpml.edu.tw/sm/service/getAllArea）
- 手動刷新按鈕，隨時更新查詢結果
- 支援暗色與亮色主題切換，並可設定跟隨系統
- 資料以表格展示，包含分館名稱、樓層、區域名稱、剩餘座位與總座位
