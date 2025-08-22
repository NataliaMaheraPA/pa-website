'use client'

import styles from './home.module.css'

import { useAppearEffect } from '@/hooks/useAppearEffect'
import { useSlideNavigate } from '@/hooks/useSlideNavigate'
import { useFontsReady } from '@/hooks/useFontsReady'
import ParticleTextAnimation from './components/ParticleTextAnimation'
import HandButtons from './components/HandButtons'

export default function HomePage() {
	const isVisible = useAppearEffect(50)
	const { handleNavigate, slideClass } = useSlideNavigate()
	const fontsReady = useFontsReady(['500 1em KyivTypeSans'])

	return (
		<>
			<section
				className={`mx-auto overflow-x-hidden home-fade-in flex flex-col justify-between items-center min-h-[80vh]`}
			>
				<div
					className={`md:flex-1 flex flex-col justify-center items-center ${styles['home-fade-in']} ${
						isVisible ? styles['visible'] : ''
					} ${slideClass}`}
				>
					<div className='relative flex justify-center items-center'>
						<p
							className={`absolute top-24 md:top-36 l:top-10 lg:top-20 2xl:top-5 3xl:-top-12 flex text-4xl l:text-5xl xl:text-6xl 3xl:text-7xl font-medium text-primary-green font-kyiv transition-opacity duration-300 ${fontsReady ? 'opacity-100' : 'opacity-0'}`}
						>
							Let&apos;s
						</p>
						<ParticleTextAnimation />
						<p
							className={`absolute bottom-24 md:bottom-36 l:bottom-10 lg:bottom-20 2xl:bottom-5 3xl:-bottom-12 flex text-4xl l:text-5xl xl:text-6xl 3xl:text-7xl font-medium text-primary-green font-kyiv transition-opacity duration-300 ${fontsReady ? 'opacity-100' : 'opacity-0'}`}
						>
							together
						</p>
						<div
							className={`hidden lg:flex mx-auto justify-between items-center absolute lg:top-1/2 lg:-translate-y-1/2 2xl:max-w-[1350px] 3xl:max-w-[1500px] lg:-left-20 lg:-right-20 xl:-left-52 xl:-right-52 2xl:-left-96 2xl:-right-96 transition-opacity duration-300 ${fontsReady ? 'opacity-100' : 'opacity-0'}`}
						>
							<HandButtons onNavigate={handleNavigate} />
						</div>
					</div>
					<div
						className={`lg:hidden flex gap-14 l:gap-32 transition-opacity duration-300 ${fontsReady ? 'opacity-100' : 'opacity-0'}`}
					>
						<HandButtons onNavigate={handleNavigate} />
					</div>
				</div>
			</section>
		</>
	)
}
