import ContactUs from '@/features/Contacts'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, siteUrl } from '@/config/seo'

export const metadata: Metadata = {
	title: 'Contact Us — PettersonApps',
	description: 'Contact us for any questions or inquiries.',
	alternates: { canonical: '/contacts' },
    openGraph: {
        title: 'Contact Us — PettersonApps',
        description: 'Contact us for any questions or inquiries.',
        url: '/contacts',
        siteName: 'PettersonApps',
        type: 'website',
    },
    robots: { index: true, follow: true },
}

export default function ContactsPage() {
	return (
		<>
			<JsonLd
				data={createWebPageJsonLd({
					title: 'Contact Us — PettersonApps',
					description: 'Contact us for any questions or inquiries.',
					url: `${siteUrl}/contacts`,
				})}
			/>
			<ContactUs />
		</>
	)
}