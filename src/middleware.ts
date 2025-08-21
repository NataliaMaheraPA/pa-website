import { chain } from './middlewares/chain'
import { intlMiddleware } from './middlewares/intlMiddleware'

// Must be first before all other middleware
export default chain([intlMiddleware])

export const config = {
    // Run on all paths except Next.js internals and files
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}