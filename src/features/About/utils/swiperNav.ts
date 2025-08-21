import type { Swiper as SwiperCore } from 'swiper/types'

type SwiperWithNavigation = SwiperCore & {
	navigation?: {
		prevEl?: unknown
		nextEl?: unknown
	}
}

function toHTMLElement(value: unknown): HTMLElement | null {
	if (!value) return null
	if (Array.isArray(value)) return (value[0] as HTMLElement) ?? null
	return (value as HTMLElement) ?? null
}

export function updateNavigationDisabled(swiper: SwiperCore, totalSlides: number): void {
	const isFirst = typeof swiper.realIndex === 'number' ? swiper.realIndex === 0 : false
	const isLast = typeof swiper.realIndex === 'number' ? swiper.realIndex === totalSlides - 1 : false

	const nav = (swiper as SwiperWithNavigation).navigation
	const prevEl = toHTMLElement(nav?.prevEl)
	const nextEl = toHTMLElement(nav?.nextEl)

	prevEl?.classList.toggle('swiper-button-disabled', isFirst)
	nextEl?.classList.toggle('swiper-button-disabled', isLast)
}

