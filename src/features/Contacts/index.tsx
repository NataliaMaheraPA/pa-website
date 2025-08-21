'use client'

import { useMemo } from 'react'
import { Link } from '@/lib/i18n/routing'
import { cn } from '@/lib/cn'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import { AppearEffectWrapper } from '@/components/AppearEffectWrapper'


const policyLinks = [
	{ to: '/privacy-policy', label: 'Privacy policy' },
	{ to: '/cookie-policy', label: 'Cookie Policy' },
]

export default function ContactUs() {
	const containerWidth = useMemo(() => 'md:w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl', [])

	return (
			<AppearEffectWrapper className='mx-auto grid grid-rows-[1fr_auto] place-items-center px-4 py-14 lg:px-10 md:pt-20 min-h-[80vh]'>
				<div
					className={cn(
						"md:flex-1 bg-cover bg-no-repeat bg-center w-full flex flex-col md:flex-row-reverse bg-[url('/images/backgrounds/contactUs/contact-form-bg-mobile.webp')] md:bg-[url('/images/backgrounds/contactUs/contact-form-bg-desktop.webp')]",
						containerWidth
					)}
				>
					<ContactForm />
					<Contacts />
				</div>
				<div className={cn('mt-12 flex flex-row justify-between', containerWidth)}>
					<div className='flex flex-row gap-2'>
						{policyLinks.map((link, index) => (
							<Link
								key={index}
								href={link.to}
								className='text-white opacity-30 hover:text-primary-green transition-colors duration-200 3xl:text-2xl'
							>
								{link.label}
							</Link>
						))}
					</div>
					<span className='text-white opacity-30 '>© 2025 Petterson Apps, All rights reserved</span>
				</div>
			</AppearEffectWrapper>
	)
}
