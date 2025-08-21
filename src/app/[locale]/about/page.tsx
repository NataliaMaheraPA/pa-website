import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'
import About from '@/features/About'

export const metadata: Metadata = {
	title: 'About Us — PettersonApps',
	description:
		'Learn about PettersonApps: our mission, vision, values, and the team behind bespoke software development.',
	alternates: { canonical: '/about' },
	openGraph: {
		title: 'About Us — PettersonApps',
		description:
			'Learn about PettersonApps: our mission, vision, values, and the team behind bespoke software development.',
		url: '/about',
		siteName: 'PettersonApps',
		type: 'website',
	},
	robots: { index: true, follow: true },
}

export default function AboutPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'About Us — PettersonApps',
					description:
						'Learn about PettersonApps: our mission, vision, values, and the team behind bespoke software development.',
					url: `${siteUrl}/about`,
				})}
			/>
			<About />
		</>
	)
}