'use client'

import { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import type { YouTubeProps } from 'react-youtube'

const YouTube = dynamic(() => import('react-youtube'), { ssr: false })

type YouTubePlayerProps = {
	videoId: string
	className?: string
	opts?: YouTubeProps['opts']
}

const YouTubePlayer = ({ videoId, className, opts }: YouTubePlayerProps) => {
	const [mounted, setMounted] = useState(false)
	const mergedOpts = useMemo<YouTubeProps['opts']>(() => {
		const origin = typeof window !== 'undefined' ? window.location.origin : undefined
		return {
			width: '100%',
			height: '100%',
			playerVars: {
				autoplay: 0,
				controls: 1,
				modestbranding: 1,
				rel: 0,
				origin,
			},
			...opts,
		}
	}, [opts])

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<div className={className}>
			<YouTube
				title='PettersonApps - YouTube video player'
				videoId={videoId}
				opts={mergedOpts}
			/>
		</div>
	)
}

export default YouTubePlayer
