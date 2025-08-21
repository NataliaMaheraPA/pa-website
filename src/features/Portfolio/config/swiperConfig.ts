import { SwiperOptions } from 'swiper/types'
import { EffectCoverflow, Pagination, Keyboard, Autoplay, Mousewheel } from 'swiper/modules'

interface SwiperConfig extends SwiperOptions {
	className: string
}

export const swiperConfig: SwiperConfig = {
	modules: [EffectCoverflow, Pagination, Keyboard, Autoplay, Mousewheel],
	effect: 'coverflow',
	speed: 800,
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
	},
	pagination: {
		clickable: true,
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
	className: 'portfolio',
	breakpoints: {
		320: {
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 150,
				depth: 750,
				modifier: 1,
				slideShadows: true,
			},
		},
		768: {
			slidesPerView: 2,
			coverflowEffect: {
				rotate: 0,
				stretch: 220,
				depth: 350,
				modifier: 1,
				slideShadows: true,
			},
		},
		1024: {
			slidesPerView: 2,
			coverflowEffect: {
				rotate: 0,
				stretch: 220,
				depth: 250,
				modifier: 1,
				slideShadows: true,
			},
		},
		1280: {
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 500,
				depth: 200,
				modifier: 1,
				slideShadows: true,
			},
		},
	},
}
