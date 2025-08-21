'use client'

import dynamic from 'next/dynamic'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'
import SectionTitle from '@/components/SectionTitle'


const Slider = dynamic(() => import('./components/Slider'), {
  ssr: false,
  loading: () => <div className="w-full min-h-[560px]" />
})

export default function Services() {
	return (
		<AppearEffectWrapper
			className='mx-auto relative flex flex-col justify-center items-center px-4 py-14 lg:px-0 min-h-[80vh] 
		  md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-[96rem]'
		>
			<SectionTitle
				i18nKey='Services.title'
				className='text-3xl text-center font-semibold tracking-0 text-primary-green pb-8'
			/>
			<Slider />
		</AppearEffectWrapper>
	)
}
