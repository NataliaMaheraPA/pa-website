import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import PlusIcon from '@/assets/icons/aboutServices/plus.svg'
import MinusIcon from '@/assets/icons/aboutServices/minus.svg'
import { AccordionProps } from './types'
import { cn } from '@/lib/cn'

export default function Accordion({ id, title, subItems, length, isActive, onClick }: AccordionProps) {
	const contentRef = useRef<HTMLDivElement>(null)
	const [maxHeight, setMaxHeight] = useState<number>(0)

	const updateMaxHeight = useCallback(() => {
		if (contentRef.current && isActive) {
			setMaxHeight(contentRef.current.scrollHeight)
		}
	}, [isActive])

	useLayoutEffect(() => {
		if (contentRef.current) {
			if (isActive) {
				setTimeout(updateMaxHeight, 10)
			} else {
				setMaxHeight(0)
			}
		}
	}, [isActive, updateMaxHeight])

	useLayoutEffect(() => {
		const handleResize = () => {
			if (isActive) {
				updateMaxHeight()
			}
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [isActive, updateMaxHeight])

	const hasContent = subItems && subItems.length > 0

	return (
		<li className='w-full xl:w-[440px] p-7 flex flex-col bg-white/5 backdrop-blur-[2px]'>
			<button
				aria-expanded={isActive}
				aria-label='Toggle accordion'
				className={cn('flex justify-between items-center cursor-pointer', isActive && hasContent && 'mb-5')}
				onClick={() => onClick(id, length)}
			>
				<h2
					className={cn(
						`text-left text-lg 3xl:text-3xl font-semibold`,
						isActive && hasContent ? 'text-white' : 'text-white/80'
					)}
				>
					{title}
				</h2>
				{hasContent &&
					length > 1 &&
					(isActive ? (
						<MinusIcon className='transform transition-transform' />
					) : (
						<PlusIcon className='transform transition-transform' />
					))}
			</button>
			<div
				ref={contentRef}
				style={{ maxHeight: `${maxHeight}px` }}
				className='transition-max-height duration-500 ease-in-out overflow-hidden'
			>
				{hasContent && (
					<ul className='flex flex-col font-normal font-montserrat gap-3'>
						{subItems.map(({ subTitle, desc }, idx) => (
							<li key={idx} className='text-xl tracking-wide relative'>
								{subTitle && (
									<span className="absolute -left-2 top-0  w-6 h-6 bg-[url('/images/icons/list-square.png')] bg-center bg-no-repeat"></span>
								)}
								<h3 className='ml-4 mb-1 font-medium text-base 3xl:text-2xl'>{subTitle}</h3>
								<p className='text-base text-white/80'>{desc}</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</li>
	)
}
