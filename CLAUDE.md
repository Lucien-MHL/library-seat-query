# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15 + TypeScript single-page application for displaying available seats at Taipei Public Library branches. The app fetches real-time data from the Taipei City Government's open API and displays it in a modern, responsive interface with dark/light theme support.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing throughout
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Pre-built component library
- **Axios** - HTTP client for API requests

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components (shadcn/ui based)
- `store/` - Zustand state management stores
- `types/` - TypeScript type definitions
- `lib/` - Utility functions

### Key Components
- **Main Page** (`app/page.tsx`): Displays tabbed interface with library branches, seat availability cards, and real-time statistics
- **State Store** (`store/useLibrarySeatStore.ts`): Manages library seat data fetching and state
- **Theme System**: Built-in dark/light mode toggle using next-themes

### Data Flow
1. App fetches data from `/api/getAllArea` endpoint (proxied via Next.js rewrites)
2. Data is stored in Zustand store as `LibrarySeatArea[]` objects
3. UI groups areas by branch name and displays in tabbed interface
4. Real-time refresh available via manual button trigger

### API Integration
- **Endpoint**: Proxied through Next.js rewrites from `https://seat.tpml.edu.tw/sm/service/getAllArea`
- **Data Structure**: `LibrarySeatArea` interface with `areaId`, `branchName`, `floorName`, `areaName`, `freeCount`, `totalCount`

### Styling Conventions
- Uses Tailwind CSS with custom dark mode support
- shadcn/ui components for consistency
- Responsive design with mobile-first approach
- Color-coded seat availability (red/orange/yellow/green based on percentage)

### Code Style
- Prettier configured with single quotes, no semicolons, no trailing commas
- ESLint with Next.js and TypeScript rules
- Absolute imports using `@/` path alias
- Client-side components marked with `'use client'`