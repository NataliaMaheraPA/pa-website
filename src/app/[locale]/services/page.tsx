import type { Metadata } from 'next'
import Services from '@/features/Services'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'

export const metadata: Metadata = {
	title: 'Services — PettersonApps',
	description:
		'Explore our services: Web, Mobile, TV/Roku, UI/UX, QA, DevOps, IoT, AI/ML, Unity, and Dedicated Teams.',
	alternates: { canonical: '/services' },
	openGraph: {
		title: 'Services — PettersonApps',
		description:
			'Explore our services: Web, Mobile, TV/Roku, UI/UX, QA, DevOps, IoT, AI/ML, Unity, and Dedicated Teams.',
		url: '/services',
		siteName: 'PettersonApps',
		type: 'website',
	},
	robots: { index: true, follow: true },
}

export default function ServicesPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'Services — PettersonApps',
					description:
						'Explore our services: Web, Mobile, TV/Roku, UI/UX, QA, DevOps, IoT, AI/ML, Unity, and Dedicated Teams.',
					url: `${siteUrl}/services`,
				})}
			/>
			<Services />
		</>
	)
}