import 'swiper/css'

import SectionTitle from '@/components/SectionTitle'
import SlidesGrid from './components/SlidesGrid'
import SlidesSwiper from './components/SlidesSwiper'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'

export default function About() {
	return (
			<AppearEffectWrapper
				className='mx-auto relative flex flex-col justify-center items-center px-4 py-14 lg:px-0 min-h-[80vh] 
		  md:max-w-xl lg:max-w-4xl 2xl:max-w-[1120px] 3xl:max-w-[96rem]'
			>
				<SectionTitle i18nKey='About.title' />
				<div className='w-full'>
					<SlidesGrid />
					<div className='hidden lg:block'>
						<SlidesSwiper />
					</div>
				</div>
			</AppearEffectWrapper>
	)
}
