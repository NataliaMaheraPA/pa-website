"use client"

import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardProps } from '../Card/types'
import Card from '../Card'
import { swiperConfig } from './swiperConfig'

export default function Slider() {
	const t = useTranslations('Services')

	const servicesData = t.raw('servicesCardsData') as Array<CardProps>

	return (
		<div className='w-full h-full relative'>
			<div className='hidden lg:block'>
				<Swiper {...swiperConfig} className='w-full pb-6 min-h-[560px]'>
					{servicesData.map(({ title, subTitle, accordionItems }) => (
						<SwiperSlide key={title} className='flex h-[620px] swiper-no-swiping'>
							<Card title={title} subTitle={subTitle} accordionItems={accordionItems} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className='w-[48px] h-[48px] swiper-button-prev absolute -left-20 top-[45%] translate-y-full text-white/40 text-3xl cursor-pointer z-10' />
				<div className='w-[48px] h-[48px] swiper-button-next absolute -right-20 top-[45%] translate-y-full text-white/40 text-3xl cursor-pointer z-10' />
			</div>

			<ul className='flex flex-col gap-4 md:gap-14 w-full lg:hidden'>
				{servicesData.map(({ title, subTitle, accordionItems }) => (
					<Card key={title} title={title} subTitle={subTitle} accordionItems={accordionItems} />
				))}
			</ul>
		</div>
	)
}
