import { NextFetchEvent, NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { CustomMiddleware } from './chain'
import { Locale, routing } from '@/lib/i18n/routing'

const intlMiddlewareWrap = createMiddleware(routing)

export function intlMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
        // Strip unknown locale prefixes → fallback to default (as-needed → no prefix)
        const url = new URL(request.url)
        const [, firstSegment, ...rest] = url.pathname.split('/')
        const localePattern = /^[a-z]{2}(?:-[A-Z]{2})?$/

        if (firstSegment && localePattern.test(firstSegment) && !routing.locales.includes(firstSegment as Locale)) {
            url.pathname = '/' + rest.join('/')
            return NextResponse.redirect(url)
        }

        const result = await intlMiddlewareWrap(request)

        return result || middleware(request, event, response)
    }
}