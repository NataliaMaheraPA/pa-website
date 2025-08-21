import PrivacyPolicy from '@/features/PrivacyPolicy'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'

export const metadata: Metadata = {
	title: 'Privacy Policy — PettersonApps',
	description: 'Privacy Policy for PettersonApps',
	alternates: { canonical: '/privacy-policy' },
	openGraph: {
		title: 'Privacy Policy — PettersonApps',
		description: 'Privacy Policy for PettersonApps',
		url: '/privacy-policy',
		siteName: 'PettersonApps',
		type: 'website',
	},
	robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'Privacy Policy — PettersonApps',
					description: 'Privacy Policy for PettersonApps',
					url: `${siteUrl}/privacy-policy`,
				})}
			/>
			<PrivacyPolicy />
		</>
	)
}