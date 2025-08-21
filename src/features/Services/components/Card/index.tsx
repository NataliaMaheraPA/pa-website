'use client'

import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Accordion from './AccordionItem'
import { CardProps } from './types'
import ScrollWrapper from './ScrollWrapper'
import { bgImages } from './constants'
import { cn } from '@/lib/cn'

export default function Card({ title, subTitle, accordionItems }: CardProps) {
	const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })

	const handleAccordionClick = (id: number) => {
		setActiveAccordion(prev => (prev === id ? null : id))
	}

	const content = (
		<ul className={cn('w-full flex flex-col gap-4 3xl:gap-8 xl:min-w-80 lg:max-w-80 xl:max-w-[440px] 3xl:max-w-xl')}>
			{accordionItems.map(({ title, subItems }, idx) => (
				<Accordion
					key={idx}
					id={idx}
					title={title}
					subItems={subItems}
					length={accordionItems.length}
					isActive={activeAccordion === idx}
					onClick={handleAccordionClick}
				/>
			))}
		</ul>
	)

	return (
		<li className='w-full h-full md:h-[560px] relative flex flex-col md:flex-1 lg:flex-row lg:justify-between px-3 py-16 md:px-10 3xl:p-20 lg:p-16 bg-card-gradient backdrop-blur-4'>
			<div className='max-w-[265px]'>
				<h3 className='text-sm uppercase text-secondary-green mb-8 3xl:text-xl'>{subTitle}</h3>
				<h2 className='text-[40px] leading-[56px] font-kyiv font-medium mb-8 3xl:text-5xl'>{title}</h2>
			</div>
			<div
				className={`absolute -bottom-12 -left-5 h-[340px] w-[340px] ${bgImages[title]} lg:bg-no-repeat lg:bg-center`}
			/>
			{isDesktopOrLaptop ? <ScrollWrapper>{content}</ScrollWrapper> : content}
		</li>
	)
}
