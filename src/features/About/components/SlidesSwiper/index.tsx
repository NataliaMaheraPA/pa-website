'use client'

import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import type { Swiper as SwiperCore } from 'swiper/types'
import { useSlideData } from '@/features/About/hooks/useSlideData'
import useResponsiveHeightValue from '@/features/About/hooks/useResponsiveHeightValue'
import { swiperConfig } from '@/features/About/config/swiperConfig'
import styles from '@/features/About/about.module.css'
import { updateNavigationDisabled } from '@/features/About/utils/swiperNav'
import Slide from '../Slide'
import YouTubePlayer from '@/components/YouTubePlayer'
import { ABOUT_US_YOUTUBE_VIDEO_ID } from '@/constants/youtube'

export default function SlidesSwiper() {
	const [activeIndex, setActiveIndex] = useState(0)
	const slideData = useSlideData()
	const height = useResponsiveHeightValue()
	const isDesktop = useMediaQuery({ minWidth: 1024 })

	const totalSlides = slideData.length + 1 
	const updateNavDisabled = (swiper: SwiperCore) => updateNavigationDisabled(swiper, totalSlides)

	const handleSlideChange = (swiper: SwiperClass) => {
		setActiveIndex(swiper?.activeIndex)
		updateNavDisabled(swiper)
	}

	return (
		<div className='w-full h-full relative'>
			<Swiper
				{...swiperConfig}
				className='pb-28 about-swiper'
				onInit={(sw) => updateNavDisabled(sw)}
				onSlideChange={handleSlideChange}
			>
				{slideData.map((data, index) => (
					<SwiperSlide key={index} className={styles.swiperSlide}>
						<Slide {...data} isActive={index === activeIndex} isVision={data.index === 1} />
					</SwiperSlide>
				))}
				{/* Last slide */}
				<SwiperSlide className={styles.swiperSlide}>
					<div className='flex justify-center items-center w-full h-full bg-primary-dark'>
						{isDesktop ? (
							<YouTubePlayer className='mt-8 w-full' videoId={ABOUT_US_YOUTUBE_VIDEO_ID} opts={{ height: height }} />
						) : null}
					</div>
				</SwiperSlide>
			</Swiper>
			<div className='hidden w-[48px] h-[48px] lg:block swiper-button-prev absolute top-[50%] -left-20 lg:-left-12 xl:-left-20 text-white/40 text-3xl cursor-pointer z-10' />
			<div className='hidden w-[48px] h-[48px] lg:block swiper-button-next absolute top-[50%] -right-20 lg:-right-12 xl:-right-20 text-white/40 text-3xl cursor-pointer z-10' />
		</div>
	)
}
