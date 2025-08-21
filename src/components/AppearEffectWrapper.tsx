'use client'

import { ReactNode, useEffect } from 'react'
import { useAppearEffect } from '@/hooks/useAppearEffect'

interface AppearWrapperProps {
	children: ReactNode
	className?: string
}

export function AppearEffectWrapper({ children, className = '' }: AppearWrapperProps) {
	const isVisible = useAppearEffect(50)

	useEffect(() => {
		if (isVisible) {
			window.scrollTo({ top: 0 })
		}
	}, [isVisible])

	return <section className={`${className} fade-in ${isVisible ? 'visible' : ''}`}>{children}</section>
}
