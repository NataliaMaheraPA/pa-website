import { chain } from './middlewares/chain'
import { intlMiddleware } from './middlewares/intlMiddleware'

export default chain([intlMiddleware])

// Apply to all paths except static assets and Next internals
export const config = {
	matcher: ['/((?!_next|.*\\..*).*)']
}


