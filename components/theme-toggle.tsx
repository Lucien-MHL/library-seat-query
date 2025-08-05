'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Contrast } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 等待 client 端渲染避免 SSR 錯誤
  useEffect(() => {
    setMounted(true)
  }, [])

  // 等待 mounted 改變後再執行渲染
  if (!mounted) return null

  return (
    <Button asChild variant="outline" size="icon" className="p-2">
      <Contrast
        size={32}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </Button>
  )
}
