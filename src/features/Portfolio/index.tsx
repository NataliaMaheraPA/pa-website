'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useTranslations } from 'next-intl'
import Swiper from 'swiper'
import Image from 'next/image'
import { usePortfolioStore } from '@/store/portfolio-store'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'
import { Link } from '@/lib/i18n/routing'
import { cn } from '@/lib/cn'
import SectionTitle from '@/components/SectionTitle'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'
import DropdownMenu from './components/DropdownMenu'
import { swiperConfig } from './config/swiperConfig'
import images from './constants'

import './portfolio.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Portfolio = () => {
	const t = useTranslations('Portfolio')
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
		if (swiperRef.current) {
			swiperRef.current.update()
			swiperRef.current.slides[0].scrollIntoView({ behavior: 'smooth' })
		}
	}

	const initialSlideIndex = useMemo(() => Math.ceil(filteredImages.length / 2) - 1, [filteredImages])

	const dynamicSwiperConfig = useMemo(
		() => ({ ...swiperConfig, initialSlide: initialSlideIndex }),
		[initialSlideIndex]
	)

	return (
		<AppearEffectWrapper
			className='mx-auto relative flex flex-col justify-center items-center px-4 pt-14 lфg:px-0 min-h-[80vh] 
      md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-[96rem]'
		>
			<SectionTitle i18nKey='Portfolio.title' />

			<div className='flex flex-col items-center max-h-[600px] max-w-5xl 3xl:max-w-[96rem] w-full'>
				<DropdownMenu />
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
			</div>
			<p className='flex text-base 2xl:text-xl 3xl:text-2xl font-semibold tracking-0 2xl:leading-tight text-white py-4 lg:pt-4'>
				{t.rich('text', {
					dribbble: chunks => (
						<Link href='https://dribbble.com/petterson_apps' target='_blank' className='mx-2 text-primary-green'>
							{chunks}
						</Link>
					),
					behance: chunks => (
						<Link href='https://www.behance.net/petterson_apps' target='_blank' className='mx-2 text-primary-green'>
							{chunks}
						</Link>
					),
				})}
			</p>
		</AppearEffectWrapper>
	)
}

export default Portfolio
