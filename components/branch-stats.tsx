interface BranchStatsProps {
  totalAreas: number
  availableSeats: number
  totalSeats: number
}

export function BranchStats({
  totalAreas,
  availableSeats,
  totalSeats
}: BranchStatsProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="bg-card rounded-lg border p-4 text-center">
        <div className="text-card-foreground text-2xl font-bold">
          {totalAreas}
        </div>
        <div className="text-muted-foreground text-sm">區域數量</div>
      </div>
      <div className="bg-card rounded-lg border p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{availableSeats}</div>
        <div className="text-muted-foreground text-sm">可用座位</div>
      </div>
      <div className="bg-card rounded-lg border p-4 text-center">
        <div className="text-card-foreground text-2xl font-bold">
          {totalSeats}
        </div>
        <div className="text-muted-foreground text-sm">總座位數</div>
      </div>
    </div>
  )
}