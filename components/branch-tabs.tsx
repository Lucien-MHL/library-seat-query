import { cn } from '@/lib/utils'
import { Building } from 'lucide-react'
import type { LibrarySeatArea } from '@/types/librarySeat'

interface BranchTabsProps {
  groupedAreas: Record<string, LibrarySeatArea[]>
  activeTab: string
  onTabChange: (branchName: string) => void
}

export function BranchTabs({
  groupedAreas,
  activeTab,
  onTabChange
}: BranchTabsProps) {
  if (Object.keys(groupedAreas).length === 0) {
    return null
  }

  return (
    <div className="mb-6">
      <div className="border-border flex flex-wrap gap-2 border-b">
        {Object.keys(groupedAreas).map((branchName) => (
          <button
            key={branchName}
            onClick={() => onTabChange(branchName)}
            className={cn(
              'flex items-center gap-2 rounded-t-lg px-4 py-2 font-medium transition-colors',
              activeTab === branchName
                ? 'bg-primary text-primary-foreground border-primary border-b-2'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <Building className="h-4 w-4" />
            {branchName}
            <span
              className={cn(
                'bg-muted ml-1 rounded-full px-2 py-0.5 text-xs',
                activeTab === branchName && 'text-muted-foreground'
              )}
            >
              {groupedAreas[branchName].length}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}