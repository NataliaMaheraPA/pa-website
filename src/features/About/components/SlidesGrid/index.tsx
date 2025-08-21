'use client'

import { useSlideData } from '@/features/About/hooks/useSlideData'
import useResponsiveHeightValue from '@/features/About/hooks/useResponsiveHeightValue'
import Slide from '../Slide'
import YouTubePlayer from '@/components/YouTubePlayer'
import { ABOUT_US_YOUTUBE_VIDEO_ID } from '@/constants/youtube'

export default function SlidesGrid() {
	const slideData = useSlideData()
	const height = useResponsiveHeightValue()

	return (
		<div className='flex flex-wrap gap-12 lg:gap-4 lg:hidden'>
			{slideData.map((data, index) => (
				<div key={index} className='w-full lg:w-1/3'>
					<Slide {...data} />
				</div>
			))}
			{/* Last slide */}
			<div className='flex justify-center items-center w-full bg-primary-dark mt-5'>
				<YouTubePlayer className='w-full' videoId={ABOUT_US_YOUTUBE_VIDEO_ID} opts={{ height: height }} />
			</div>
		</div>
	)
}
