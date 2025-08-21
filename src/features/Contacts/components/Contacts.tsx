import { useTranslations } from 'next-intl'
import { socialLinks } from './socialLinks'
import MailIcon from '@/assets/icons/contactUs/mail.svg'
import AddressIcon from '@/assets/icons/contactUs/real-estate-building-house.svg'
import SectionTitle from '@/components/SectionTitle'
import { Link } from '@/lib/i18n/routing'

export default function Contacts() {
	const t  = useTranslations('ContactUs')
	const email = 'info@pettersonapps.com'

	return (
		<div className='pt-[70px] px-4 pb-16 w-full md:px-12 lg:pt-20 xl:p-[105px] 3xl:p-20'>
			<SectionTitle
				i18nKey='ContactUs.title'
				className='hidden md:block bg-transparent p-0 text-3xl pb-9 text-left font-semibold tracking-0 text-primary-green'
			/>
			<h2 className='md:hidden pb-9 text-center font-semibold text-xl'>{t('title2')}</h2>
			<div className='flex justify-center md:justify-start items-center gap-2 cursor-pointer hover:underline transition-all duration-300 ease-in-out 3xl:text-xl'>
				<MailIcon />
				<Link
					aria-label='email'
					rel='nofollow noreferrer'
					target='_blank'
					href={`mailto:${email}`}
					title={`Send an email to ${email}`}
				>
					{email}
				</Link>
			</div>
			<div className='h-[0.5px] bg-white opacity-[0.2] w-full my-9' />
			<ul className='flex justify-between items-center gap-6 px-3'>
				<li className='flex flex-col justify-center md:items-start items-center gap-2'>
					<h3 className='uppercase text-primary-green opacity-70 3xl:text-lg'>{t('city1')}</h3>
					<div className='flex gap-4'>
						<AddressIcon />
						<p className='3xl:text-lg'>{t('address1')}</p>
					</div>
				</li>
				<li className='flex flex-col justify-center items-center md:items-start gap-2'>
					<h3 className='uppercase text-primary-green opacity-70 3xl:text-lg'>{t('city2')}</h3>
					<div className='flex gap-4'>
						<AddressIcon />
						<p className='3xl:text-lg'>{t('address2')}</p>
					</div>
				</li>
			</ul>
			<div className='h-[0.5px] bg-white opacity-[0.2] w-full my-9' />
			<ul className='flex gap-6 md:gap-0 justify-center items-center md:justify-between'>
				{socialLinks.map(({ label, icon, url }) => (
					<li key={label} className={`${label === 'linkedin' ? 'pb-2' : ''}`}>
						<Link
							aria-label={label}
							rel='nofollow noreferrer'
							target='_blank'
							href={url}
							className='flex transition-all text-white duration-300 ease-in-out hover:text-primary-green'
						>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
