'use client'

import { useEffect, useState } from 'react'
import { useLibrarySeatStore } from '@/store/useLibrarySeatStore'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'

export default function Home() {
  const { areas, loading, error, fetchAreas } = useLibrarySeatStore()

  useEffect(() => {
    fetchAreas()
  }, [fetchAreas])

  return (
    <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center p-8 select-none">
      <div className="flex items-center justify-center">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">
          圖書館座位查詢系統
        </h1>
        <div className={cn('absolute top-8 right-0 pr-4 text-2xl md:text-3xl')}>
          <ThemeToggle />
        </div>
      </div>
      <Button className="mb-4" onClick={fetchAreas} disabled={loading}>
        重新整理
        {loading && <Loader className="ml-2 h-4 w-4 animate-spin" />}
      </Button>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>分館</TableHead>
              <TableHead>樓層</TableHead>
              <TableHead>區域名稱</TableHead>
              <TableHead>剩餘座位</TableHead>
              <TableHead>總座位</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {areas.map((area) => (
              <TableRow key={area.areaId}>
                <TableCell>{area.branchName}</TableCell>
                <TableCell>{area.floorName}</TableCell>
                <TableCell>{area.areaName}</TableCell>
                <TableCell
                  className={cn(area.freeCount === 0 && 'text-red-500')}
                >
                  {area.freeCount}
                </TableCell>
                <TableCell>{area.totalCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
