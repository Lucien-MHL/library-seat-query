'use client'

import { useEffect, useState } from 'react'
import { useLibrarySeatStore } from '@/store/useLibrarySeatStore'
import { LibraryHeader } from '@/components/library-header'
import { RefreshButton } from '@/components/refresh-button'
import { BranchTabs } from '@/components/branch-tabs'
import { BranchStats } from '@/components/branch-stats'
import { SeatAreaCard } from '@/components/seat-area-card'
import {
  LoadingState,
  ErrorState,
  EmptyState
} from '@/components/loading-error-states'

export default function Home() {
  const { areas, loading, error, fetchAreas } = useLibrarySeatStore()
  const [activeTab, setActiveTab] = useState<string>('')
  const [countdown, setCountdown] = useState(60)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const handleFetchAreas = async () => {
    await fetchAreas()
    setLastUpdated(new Date())
    setCountdown(60)
  }

  useEffect(() => {
    handleFetchAreas()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleFetchAreas()
          return 60
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const grouped = areas.reduce(
    (acc, area) => {
      if (!acc[area.branchName]) {
        acc[area.branchName] = []
      }
      acc[area.branchName].push(area)
      return acc
    },
    {} as Record<string, typeof areas>
  )

  // Set active tab to first branch if not set
  if (!activeTab && Object.keys(grouped).length > 0) {
    setActiveTab(Object.keys(grouped)[0])
  }

  const currentBranchAreas = grouped[activeTab] || []

  const currentBranchStats = !currentBranchAreas.length
    ? { totalAreas: 0, totalSeats: 0, availableSeats: 0 }
    : {
        totalAreas: currentBranchAreas.length,
        totalSeats: currentBranchAreas.reduce(
          (sum, area) => sum + area.totalCount,
          0
        ),
        availableSeats: currentBranchAreas.reduce(
          (sum, area) => sum + area.freeCount,
          0
        )
      }

  return (
    <main className="relative mx-auto min-h-screen max-w-6xl p-4 select-none md:p-8">
      <LibraryHeader />

      <RefreshButton 
        onClick={handleFetchAreas} 
        loading={loading} 
        countdown={countdown}
        lastUpdated={lastUpdated}
      />

      <ErrorState error={error} />

      <LoadingState loading={loading} hasData={areas.length > 0} />

      <BranchTabs
        groupedAreas={grouped}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {!loading && activeTab && (
        <BranchStats
          totalAreas={currentBranchStats.totalAreas}
          availableSeats={currentBranchStats.availableSeats}
          totalSeats={currentBranchStats.totalSeats}
        />
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentBranchAreas.map((area) => (
          <SeatAreaCard key={area.areaId} area={area} />
        ))}
      </div>

      <EmptyState
        activeTab={activeTab}
        hasAreas={currentBranchAreas.length > 0}
        loading={loading}
      />
    </main>
  )
}
