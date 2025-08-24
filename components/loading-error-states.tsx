import { Loader } from 'lucide-react'

interface LoadingStateProps {
  loading: boolean
  hasData: boolean
}

export function LoadingState({ loading, hasData }: LoadingStateProps) {
  if (!loading || hasData) return null

  return (
    <div className="flex items-center justify-center py-12">
      <Loader className="text-primary h-8 w-8 animate-spin" />
      <span className="text-muted-foreground ml-2">載入中...</span>
    </div>
  )
}

interface ErrorStateProps {
  error: string | null
}

export function ErrorState({ error }: ErrorStateProps) {
  if (!error) return null

  return (
    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
      {error}
    </div>
  )
}

interface EmptyStateProps {
  activeTab: string
  hasAreas: boolean
  loading: boolean
}

export function EmptyState({ activeTab, hasAreas, loading }: EmptyStateProps) {
  if (hasAreas || !activeTab || loading) return null

  return (
    <div className="py-12 text-center">
      <div className="text-muted-foreground">
        {activeTab} 目前沒有可用的區域資料
      </div>
    </div>
  )
}