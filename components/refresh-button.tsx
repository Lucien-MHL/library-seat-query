import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { RefreshCw, Clock } from 'lucide-react'

interface RefreshButtonProps {
  onClick: () => void
  loading: boolean
  countdown: number
  lastUpdated: Date | null
}

export function RefreshButton({ onClick, loading, countdown, lastUpdated }: RefreshButtonProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <Button
        onClick={onClick}
        disabled={loading}
        className="flex items-center gap-2 px-6"
      >
        <RefreshCw className={cn('h-4 w-4', loading && 'animate-spin')} />
        {loading ? '載入中...' : '手動刷新'}
      </Button>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        {countdown > 0 && (
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{countdown} 秒後自動更新</span>
          </div>
        )}
        
        {lastUpdated && (
          <div>
            最後更新：{formatTime(lastUpdated)}
          </div>
        )}
      </div>
    </div>
  )
}