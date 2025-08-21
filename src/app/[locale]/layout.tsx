import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Locale, routing } from '@/lib/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/Header'
import { styleToastify } from '@/components/Toaster'
import AuthWrapper from '@/components/AuthWrapper'
import PreloadImages from '@/components/PreloadImagesWrapper'
import JsonLd from '@/components/JsonLd'
import images from '@/features/Portfolio/constants'
import { defaultDescription, defaultKeywords, defaultTitle, organization, siteName, webSite } from '@/config/seo'

import '@/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
	const hdrs = await headers()
	const host = hdrs.get('x-forwarded-host') || hdrs.get('host') || 'pettersonapps.com'
	const proto = hdrs.get('x-forwarded-proto') || 'https'
	const origin = `${proto}://${host}`
	const ogVersion = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8) ?? 'v1'

	return {
		metadataBase: new URL(origin),
		title: defaultTitle,
		description: defaultDescription,
		keywords: defaultKeywords,
		icons: {
			icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
		},
		alternates: { canonical: '/' },
		openGraph: {
			title: defaultTitle,
			description: defaultDescription,
			url: '/',
			siteName: siteName,
			type: 'website',
			images: [
				{ url: `${origin}/opengraph-image?v=${ogVersion}`, width: 1200, height: 630, alt: `${siteName} Open Graph image` },
			],
		},
		robots: { index: true, follow: true },
	}
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!routing.locales.includes(locale as Locale)) {
		notFound()
	}

	// Enable static rendering
	setRequestLocale(locale)

	const messages = await getMessages()

	const imageUrls = images.map(image => image.pictures.desktop)

	return (
		<html lang={locale} data-scroll-behavior='smooth'>
			<body className='antialiased flex flex-col min-h-full md:min-h-screen'>
				<AuthWrapper>
					<PreloadImages urls={imageUrls} />
					<NextIntlClientProvider messages={messages}>
						<Header />
						<main className='flex-1 overflow-y-hidden'>
							<JsonLd data={organization} />
							<JsonLd data={webSite} />
							{children}
						</main>
						<ToastContainer {...styleToastify} />
					</NextIntlClientProvider>
				</AuthWrapper>
			</body>
		</html>
	)
}
