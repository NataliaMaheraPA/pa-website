'use client'

import { useEffect, useState } from 'react'

export function useAppearEffect(delay: number) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), delay)
		return () => clearTimeout(timeout)
	}, [delay])

	return isVisible
}
