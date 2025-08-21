'use client'

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'

type HTMLElementTag = React.ElementType

interface AppearEffectWrapperProps {
	children: ReactNode
	className?: string
	as?: HTMLElementTag
	minHeight?: number | string
	threshold?: number | number[]
	rootMargin?: string
	once?: boolean
	lazy?: boolean
	scrollToTopOnVisible?: boolean
	onVisible?: () => void
}

export function AppearEffectWrapper({
	children,
	className = '',
	as = 'section',
	minHeight,
	threshold = 0.1,
	rootMargin = '0px',
	once = true,
	lazy = false,
	scrollToTopOnVisible = false,
	onVisible
}: AppearEffectWrapperProps) {
	const containerRef = useRef<HTMLElement | null>(null)
	const [isVisible, setIsVisible] = useState(false)

	const prefersReducedMotion = useMemo(() => {
		if (typeof window === 'undefined' || !('matchMedia' in window)) return false
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches
	}, [])

	const handleVisible = useCallback(() => {
		setIsVisible(true)
		if (onVisible) onVisible()
		if (scrollToTopOnVisible) {
			try {
				window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
			} catch {}
		}
	}, [onVisible, scrollToTopOnVisible, prefersReducedMotion])

	useEffect(() => {
		if (prefersReducedMotion) {
			// Show immediately without observing
			handleVisible()
			return
		}

		const node = containerRef.current
		if (!node) return

		let observer: IntersectionObserver | null = null
		try {
			observer = new IntersectionObserver(
				(entries) => {
					const entry = entries[0]
					if (entry.isIntersecting) {
						handleVisible()
						if (once && observer) observer.disconnect()
					}
				},
				{ threshold, rootMargin }
			)
			observer.observe(node)
		} catch {
			// Fallback: show after microtask if observer fails
			Promise.resolve().then(handleVisible)
		}

		return () => observer?.disconnect()
	}, [threshold, rootMargin, once, handleVisible, prefersReducedMotion])

	const Tag = as as React.ElementType
	const style = minHeight !== undefined ? { minHeight } : undefined
	const contentVisible = isVisible || prefersReducedMotion

	return (
		<Tag ref={containerRef} className={`${className} fade-in ${contentVisible ? 'visible' : ''}`} style={style}>
			{lazy ? (contentVisible ? children : null) : children}
		</Tag>
	)
}
