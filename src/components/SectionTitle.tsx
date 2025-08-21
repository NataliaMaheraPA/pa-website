import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'

interface SectionTitleProps {
	className?: string
	i18nKey: string
}

const SectionTitle = ({ className, i18nKey }: SectionTitleProps) => {
	const t = useTranslations()

	const content = t.rich(i18nKey, {
		highlight: (chunks) => <span className='ml-2 text-white'>{chunks}</span>,
	})

	return (
		<h1 className={cn('flex text-3xl font-semibold tracking-0 text-primary-green pb-7 3xl:pb-16 3xl:text-4xl', className)}>
			{content}
		</h1>
	)
}
export default SectionTitle
