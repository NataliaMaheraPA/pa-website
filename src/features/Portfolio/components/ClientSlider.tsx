'use client'

import { useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'
import Swiper from 'swiper'
import { cn } from '@/lib/cn'
import { swiperConfig } from '../config/swiperConfig'
import images from '../constants'
import { usePortfolioStore } from '@/store/portfolio-store'

export default function ClientSlider() {
	const { selectedTags } = usePortfolioStore()
	const swiperRef = useRef<Swiper | null>(null)

	const filteredImages =
		selectedTags.length > 0
			? images.filter(image => selectedTags.some((tag: string) => image.tags.includes(tag)))
			: images

	useEffect(() => {
		scrollToBeginning()
	}, [filteredImages])

	const scrollToBeginning = () => {
		const swiper = swiperRef.current as
			| (Swiper & { slideToLoop?: (index: number, speed?: number, runCallbacks?: boolean, internal?: boolean) => void })
			| null
		if (!swiper) return
		swiper.update()
		if (typeof swiper.slideToLoop === 'function') {
			swiper.slideToLoop(0, 0)
		} else {
			swiper.slideTo(0, 0)
		}
	}

	const initialSlideIndex = useMemo(() => Math.ceil(filteredImages.length / 2) - 1, [filteredImages])

	const dynamicSwiperConfig = useMemo(() => ({ ...swiperConfig, initialSlide: initialSlideIndex }), [initialSlideIndex])

	return (
		<SwiperContainer {...dynamicSwiperConfig} onSwiper={swiper => (swiperRef.current = swiper)}>
			{filteredImages.map(({ id, pictures, alt }, index) => (
				<SwiperSlide key={index} className='max-h-[400px]'>
					<div className='relative w-full h-full rounded-2xl overflow-hidden'>
						<Image
							className={cn(
								'w-full h-full object-cover object-center',
								pictures.mobile ? 'lg:hidden' : 'block',
								[Boolean(id === 1), Boolean(id === 4), Boolean(id === 5)].includes(true) && 'object-bottom'
							)}
							src={pictures.mobile || pictures.desktop}
							alt={alt}
							width={1000}
							height={1000}
							priority={index === initialSlideIndex}
						/>
						{pictures.mobile && (
							<Image
								className={cn(
									'hidden w-full h-full object-cover object-center lg:block',
									[Boolean(id === 1), Boolean(id === 4), Boolean(id === 5)].includes(true) && 'object-bottom'
								)}
								src={pictures.desktop}
								alt={alt}
								width={1000}
								height={1000}
								priority={index === initialSlideIndex}
							/>
						)}
					</div>
				</SwiperSlide>
			))}
		</SwiperContainer>
	)
}
