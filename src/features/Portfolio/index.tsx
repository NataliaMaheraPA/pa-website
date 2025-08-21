'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { Link } from '@/lib/i18n/routing'
import SectionTitle from '@/components/SectionTitle'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'
import DropdownMenu from './components/DropdownMenu'

import './portfolio.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'


const ClientSlider = dynamic(() => import('./components/ClientSlider'), {
  ssr: false,
  loading: () => <div className="w-full min-h-[560px]" />
})


const Portfolio = () => {
	const t = useTranslations('Portfolio')
	
	return (
		<AppearEffectWrapper
			className='mx-auto relative flex flex-col justify-center items-center px-4 pt-14 lфg:px-0 min-h-[80vh] 
      md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-[96rem]'
		>
			<SectionTitle i18nKey='Portfolio.title' />

			<div className='flex flex-col items-center max-h-[600px] max-w-5xl 3xl:max-w-[96rem] w-full'>
				<DropdownMenu />
				<ClientSlider />
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
