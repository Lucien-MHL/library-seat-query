import { ThemeToggle } from '@/components/theme-toggle'

export function LibraryHeader() {
  return (
    <div className="relative mb-8">
      <div className="text-center">
        <h1 className="text-foreground mb-2 text-3xl font-bold md:text-4xl">
          📚 圖書館座位查詢系統
        </h1>
        <p className="text-muted-foreground">即時查看各分館座位使用情況</p>
      </div>
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>
    </div>
  )
}