'use client'

import { useRef, useState } from 'react'

type ScrollWrapperProps = {
	children: React.ReactNode
	maxHeight?: number
}

export default function ScrollWrapper({ children, maxHeight = 500 }: ScrollWrapperProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [showGradient, setShowGradient] = useState(true)

	const handleScroll = () => {
		const container = containerRef.current
		if (container) {
			setShowGradient(container.scrollTop === 0)
		}
	}

	return (
		<div
			ref={containerRef}
			onScroll={handleScroll}
			style={{ maxHeight: `${maxHeight}px` }}
			className='scrollHidden relative overflow-y-auto'
		>
			{children}
			{showGradient && (
				<div className='absolute left-0 right-0 bottom-0 h-12 pointer-events-none bg-gradient-to-t from-[#020202] to-transparent transition-opacity duration-300' />
			)}
		</div>
	)
}
