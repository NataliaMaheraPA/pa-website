import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/SectionTitle'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'
import ContentSections, { Section } from '@/components/ContentSections'
import { cn } from '@/lib/cn'

export default function PrivacyPolicy() {
	const t = useTranslations('PrivacyPolicy')

	const sections = t.raw('sections') as Section[]

	return (
			<AppearEffectWrapper
				className={cn(
					'mx-auto relative flex flex-col justify-center items-center px-4 py-14 lg:px-0 md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-[96rem]'
				)}
			>
				<SectionTitle
					i18nKey='PrivacyPolicy.title'
					className='text-3xl text-center font-semibold tracking-0 text-primary-green pb-8'
				/>

				<ContentSections sections={sections} />
			</AppearEffectWrapper>
	)
}
