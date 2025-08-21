import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Avoid reading headers/cookies to enable static rendering (dynamic = 'error')
export default getRequestConfig(async ({ locale }) => {
    const resolvedLocale = locale ?? routing.defaultLocale
    return {
        locale: resolvedLocale,
        messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
    }
})