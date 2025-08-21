import { FunctionComponent, SVGProps } from 'react'
import { useTranslations } from 'next-intl'
import AboutUs1 from '@/assets/icons/aboutUs/aboutUsPage1.svg'
import AboutUs2 from '@/assets/icons/aboutUs/aboutUspage2.svg'
import AboutUs3 from '@/assets/icons/aboutUs/aboutUspage3.svg'
import Illustration1 from '@/assets/icons/aboutUs/Illustration.svg'
import Illustration2 from '@/assets/icons/aboutUs/Illustration2.svg'
import Illustration3 from '@/assets/icons/aboutUs/Illustration1.svg'

type SlideDataType = {
	icon: FunctionComponent<SVGProps<SVGSVGElement>>
	illustration: FunctionComponent<SVGProps<SVGSVGElement>>
	index: number
	title: string
	description: string
	p1?: string
	p2?: string
	p3?: string
}

export const useSlideData = () => {
	const t = useTranslations('About')

	const slideData: SlideDataType[] = [
		{
			icon: AboutUs1,
			illustration: Illustration1,
			index: 0,
			title: t('slides.0.title'),
			description: t('slides.0.description'),
			p1: t('slides.0.p1'),
			p2: t('slides.0.p2'),
			p3: t('slides.0.p3'),
		},
		{
			icon: AboutUs2,
			illustration: Illustration2,
			index: 1,
			title: t('slides.1.title'),
			description: t('slides.1.description'),
			p1: t('slides.1.p1'),
			p2: t('slides.1.p2'),
		},
		{
			icon: AboutUs3,
			illustration: Illustration3,
			index: 2,
			title: t('slides.2.title'),
			description: t('slides.2.description'),
			p1: t('slides.2.p1'),
			p2: t('slides.2.p2'),
			p3: t('slides.2.p3'),
		},
	]

	return slideData
}
