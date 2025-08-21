import CookiePolicy from '@/features/CookiePolicy'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'

export const metadata: Metadata = {
	title: 'Cookie Policy — PettersonApps',
	description: 'Cookie Policy for PettersonApps',
	alternates: { canonical: '/cookie-policy' },
	openGraph: {
		title: 'Cookie Policy — PettersonApps',
		description: 'Cookie Policy for PettersonApps',
		url: '/cookie-policy',
		siteName: 'PettersonApps',
		type: 'website',
	},
	robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'Cookie Policy — PettersonApps',
					description: 'Cookie Policy for PettersonApps',
					url: `${siteUrl}/cookie-policy`,
				})}
			/>
			<CookiePolicy />
		</>
	)
}