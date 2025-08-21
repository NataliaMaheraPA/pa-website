import { cn } from '@/lib/cn'
import { SlideProps } from './types'

import styles from '@/features/About/about.module.css'

export default function Slide({
	icon: Icon,
	illustration: Illustration,
	title,
	description,
	p1,
	p2,
	p3,
	isActive,
	isVision,
}: SlideProps) {
	return (
		<div
			className={`relative h-auto flex flex-col lg:flex-row bg-gradient-custom lg:max-h-[488px] lg:mt-10 w-full backdrop-blur-sm shadow-custom`}
		>
			<div
				className={`absolute h-20 w-20 bg-gradient-about-icon flex items-center justify-center z-10 transition-all duration-300 ${
					isActive
						? 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100'
						: 'opacity-0 -top-0 left-1/2  -translate-x-1/2 -translate-y-1/2 scale-0'
				}`}
			>
				<Icon />
			</div>
			<div className='relative flex items-center justify-start w-[100%] lg:w-1/2 min-w-[295px] aspect-[2/3] l:aspect-[1/1] p-4 l:p-10 lg:justify-center'>
				<div className='absolute inset-0 flex items-center justify-center'>
					<Illustration className={cn('object-contain pl-8 w-full h-full', isVision && 'w-[90%] h-[90%]')} />
				</div>
				<div className='relative space-y-6 lg:space-y-5 z-10 p-4 2xl:p-10 max-w-[295px] 2xl:max-w-full'>
					<h2 className='text-secondary-green uppercase font-manrope font-normal tracking-[0.85px] text-sm 3xl:text-2xl leading-[22px] mb-2 2xl:mb-4'>
						{title}
					</h2>
					<p className='text-white max-w-[280px] hyphens-auto font-kyiv font-normal text-[40px] leading-[48px] 3xl:text-5xl tracking-normal 2xl:leading-snug'>
						{description}
					</p>
				</div>
			</div>

			<div
				className={`${styles.contentBox} relative w-[100%] lg:w-1/2 flex overflow-hidden items-center justify-start lg:justify-center min-w-[255px] aspect-[2/3] l:aspect-[1/1] pl-4 l:p-10 border-[0.5px] border-transparent bg-[rgba(255,255,255,0.04)]`}
			>
				<div
					className={`absolute w-full h-full blur-3xl rounded-full ${styles.animateGradient} ${styles.moveAndRotate}`}
				></div>
				<div className={`max-w-full space-y-2 xl:max-w-[295px] 2xl:max-w-full p-4 2xl:p-10`}>
					{p1 && <p className='font-normal text-sm leading-normal 3xl:text-2xl 3xl:ml-4 3xl:leading-snug'>{p1}</p>}
					{p2 && <p className='font-normal text-sm leading-normal 3xl:text-2xl 3xl:ml-4 3xl:leading-snug'>{p2}</p>}
					{p3 && <p className='font-normal text-sm leading-normal 3xl:text-2xl 3xl:ml-4 3xl:leading-snug'>{p3}</p>}
				</div>
			</div>
		</div>
	)
}
