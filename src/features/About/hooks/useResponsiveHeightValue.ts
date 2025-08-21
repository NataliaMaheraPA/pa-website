'use client'

import { useEffect, useState } from 'react'

export default function useResponsiveHeightValue() {
	const getHeight = () => {
		if (typeof window === 'undefined') return 300
		const width = window.innerWidth
		if (width <= 428) return 200
		if (width <= 1024) return 350
		return 500
	}

	const [height, setHeight] = useState<number>(getHeight)

	useEffect(() => {
		function updateHeight() {
			const next = getHeight()
			setHeight(prev => (prev === next ? prev : next))
		}
		window.addEventListener('resize', updateHeight)
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	return height
}
