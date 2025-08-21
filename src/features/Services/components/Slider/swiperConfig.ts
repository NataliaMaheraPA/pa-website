import { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper/modules'

export const swiperConfig = {
	modules: [Navigation, Pagination, Autoplay, Keyboard, Mousewheel],
	speed: 800,
	spaceBetween: 30,
	slidesPerView: 1,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		clickable: true,
		bulletClass: 'swiper-pagination-bullet',
		bulletActiveClass: 'swiper-pagination-bullet-active',
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
}
