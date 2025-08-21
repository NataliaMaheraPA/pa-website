import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
    // We can add uk locale if needed ('en' \ 'uk')
    locales: ['en'], 
    defaultLocale: 'en',
    
    // Automatically redirect to defaultLocale for unknown locales
    localeDetection: true,
    
    // Strategy for locale prefixes in URL
    localePrefix: 'as-needed' // don't show /en in URL
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number]
export const { Link, getPathname, redirect, usePathname, useRouter} = createNavigation(routing)