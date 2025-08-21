import Portfolio from '@/features/Portfolio'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'

export const metadata: Metadata = {
	title: 'Portfolio — PettersonApps',
	description: 'Portfolio of PettersonApps dribbble and behance',
	alternates: { canonical: '/portfolio' },
	openGraph: {
		title: 'Portfolio — PettersonApps',
		description: 'Portfolio of PettersonApps dribbble and behance',
		url: '/portfolio',
		siteName: 'PettersonApps',
		type: 'website',
	},
	robots: { index: true, follow: true },
}

export default function PortfolioPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'Portfolio — PettersonApps',
					description: 'Portfolio of PettersonApps dribbble and behance',
					url: `${siteUrl}/portfolio`,
				})}
			/>
			<Portfolio />
		</>
	)
}