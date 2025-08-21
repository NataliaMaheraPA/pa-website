import { create } from 'zustand'
import images from '@/features/Portfolio/constants'
import { getAllTags } from '@/utils'

type PortfolioState = {
	selectedTags: string[]
	setSelectedTags: (newTags: string[]) => void
}

export const usePortfolioStore = create<PortfolioState>(set => ({
	selectedTags: getAllTags(images),
	setSelectedTags: (newTags: string[]) => set({ selectedTags: newTags }),
}))
