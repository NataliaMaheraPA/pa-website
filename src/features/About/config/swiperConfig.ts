import { SwiperOptions } from 'swiper/types'
import { EffectCards, Keyboard, Autoplay, Navigation, Mousewheel, Pagination } from 'swiper/modules'

interface SwiperConfig extends SwiperOptions {
	className: string
}

export const swiperConfig: SwiperConfig = {
	modules: [EffectCards, Keyboard, Autoplay, Navigation, Mousewheel, Pagination],
	speed: 700,
	effect: 'cards',
	grabCursor: true,
	centeredSlides: true,
	initialSlide: 0,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		clickable: true,
	},
	cardsEffect: {
		perSlideOffset: 10,
		perSlideRotate: 0,
		slideShadows: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		forceToAxis: true,
		releaseOnEdges: true,
		sensitivity: 1,
	},
	className: 'custom-swiper',
}
