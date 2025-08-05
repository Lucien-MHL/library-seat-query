import { create } from 'zustand'
import axios from 'axios'
import type { LibrarySeatArea } from '@/types/librarySeat'

interface LibrarySeatState {
  areas: LibrarySeatArea[]
  loading: boolean
  error: string | null
  fetchAreas: () => Promise<void>
}

export const useLibrarySeatStore = create<LibrarySeatState>((set) => ({
  areas: [],
  loading: false,
  error: null,
  fetchAreas: async () => {
    set({ loading: true, error: null })
    try {
      const res = await axios.get<LibrarySeatArea[]>('/api/getAllArea')
      set({ areas: res.data, loading: false })
    } catch (e) {
      set({ error: '資料獲取失敗', loading: false })
    }
  }
}))
