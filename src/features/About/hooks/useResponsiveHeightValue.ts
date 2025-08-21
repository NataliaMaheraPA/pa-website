'use client'

import { useEffect, useState } from 'react'

export default function useResponsiveHeightValue() {
	const [height, setHeight] = useState(300)

	useEffect(() => {
		function updateHeight() {
			const width = window.innerWidth
			if (width <= 428) setHeight(200)
			else if (width <= 1024) setHeight(350)
			else setHeight(500)
		}
		updateHeight()
		window.addEventListener('resize', updateHeight)

		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	return height
}
