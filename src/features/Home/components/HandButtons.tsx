import { useTranslations } from 'next-intl'

import LeftHand from '@/assets/icons/home/leftHand.svg'
import RightHand from '@/assets/icons/home/rightHand.svg'

type HandButtonsProps = {
	onNavigate: (path: string, dir: 'left' | 'right') => void
}

export default function HandButtons({ onNavigate }: HandButtonsProps) {
	const t = useTranslations('Home')

	return (
		<>
			<button
				type='button'
				aria-label='Navigate to About'
				className={`flex flex-col gap-3 justify-center items-center cursor-pointer`}
				onClick={() => onNavigate('/about', 'left')}
			>
				<LeftHand className='block w-14 h-14 xl:w-[70px] xl:h-[70px] 3xl:w-24 3xl:h-24' />
				<p className='text-white font-medium text-base tracking-normal 2xl:text-xl 3xl:text-3xl'>
					{t('buttonLeft')}
				</p>
			</button>
			<button
				type='button'
				aria-label='Navigate to Services'
				className={`flex flex-col gap-3 justify-center items-center cursor-pointer`}
				onClick={() => onNavigate('/services', 'right')}
			>
				<RightHand className='block w-14 h-14 xl:w-[70px] xl:h-[70px] 3xl:w-24 3xl:h-24' />
				<p className='text-white font-medium tracking-normal text-base 2xl:text-xl 3xl:text-3xl'>
					{t('buttonRight')}
				</p>
			</button>
		</>
	)
}
