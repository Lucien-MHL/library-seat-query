import { cn } from '@/lib/utils'
import { MapPin, Users } from 'lucide-react'
import type { LibrarySeatArea } from '@/types/librarySeat'

interface SeatAreaCardProps {
  area: LibrarySeatArea
}

function getAvailabilityColor(freeCount: number, totalCount: number) {
  const percentage = (freeCount / totalCount) * 100
  if (percentage === 0) return 'bg-red-500'
  if (percentage < 20) return 'bg-orange-500'
  if (percentage < 50) return 'bg-yellow-500'
  return 'bg-green-500'
}

function getAvailabilityStatus(freeCount: number, totalCount: number) {
  const percentage = (freeCount / totalCount) * 100
  if (percentage === 0)
    return {
      text: '已滿',
      color: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-950'
    }
  if (percentage < 20)
    return {
      text: '緊張',
      color:
        'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-950'
    }
  if (percentage < 50)
    return {
      text: '適中',
      color:
        'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-950'
    }
  return {
    text: '充足',
    color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-950'
  }
}

export function SeatAreaCard({ area }: SeatAreaCardProps) {
  const percentage =
    area.totalCount > 0 ? (area.freeCount / area.totalCount) * 100 : 0
  const status = getAvailabilityStatus(area.freeCount, area.totalCount)

  return (
    <div className="bg-card rounded-lg border p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-card-foreground text-lg font-semibold">
            {area.areaName}
          </h3>
          <div className="text-muted-foreground mt-1 flex items-center gap-1 text-sm">
            <MapPin className="h-3 w-3" />
            {area.floorName}
          </div>
        </div>
        <div
          className={cn(
            'rounded-full px-3 py-1 text-xs font-medium',
            status.color
          )}
        >
          {status.text}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <Users className="h-3 w-3" />
            座位使用率
          </div>
          <div className="text-sm font-medium">{percentage.toFixed(0)}%</div>
        </div>

        <div className="bg-muted h-3 w-full overflow-hidden rounded-full">
          <div
            className={cn(
              'h-full rounded-full transition-all duration-500 ease-out',
              getAvailabilityColor(area.freeCount, area.totalCount)
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex justify-between pt-2">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {area.freeCount}
            </div>
            <div className="text-muted-foreground text-xs">可用</div>
          </div>
          <div className="text-center">
            <div className="text-card-foreground text-2xl font-bold">
              {area.totalCount}
            </div>
            <div className="text-muted-foreground text-xs">總計</div>
          </div>
        </div>
      </div>
    </div>
  )
}