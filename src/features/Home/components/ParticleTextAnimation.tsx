'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useFontsReady } from '@/hooks/useFontsReady'
import { AnimationState } from '../animation/types'
import { drawParticle, updateParticle } from '../animation/utils/createParticle'
import { resizeCanvas } from '../animation/utils/resizeCanvas'
import { createParticlesFromText } from '../animation/utils/createParticlesFromText'
import LoadingOverlay from './LoadingOverlay'

const words = ['Design', 'Develop', 'Build']

export default function ParticleText() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [isReady, setIsReady] = useState(false)
	const hasDrawnRef = useRef(false)
	const fontsReady = useFontsReady(['500 1em KyivTypeSans'])

	const [animationState, setAnimationState] = useState<AnimationState>({
		currentWordIndex: 0,
		particles: [],
	})

	const updateAnimationState = (newState: Partial<AnimationState>) => {
		setAnimationState(prevState => ({ ...prevState, ...newState }))
	}

	const getCanvasContext = useCallback(() => {
		const canvas = canvasRef.current
		if (!canvas) return null
		return canvas.getContext('2d', { willReadFrequently: true })
	}, [canvasRef])

	// Handle canvas resizing
	const handleResize = useCallback(() => {
		resizeCanvas({
			canvas: canvasRef.current,
			context: getCanvasContext(),
			wordIndex: 0,
			words,
			updateAnimationState,
		})
	}, [getCanvasContext])

	// Do not generate particles until fonts are ready. Height is reserved via wrapper.
	useEffect(() => {
		if (!fontsReady) return
		handleResize()
	}, [fontsReady, handleResize])

	// Word cycling
	useEffect(() => {
		if (!fontsReady) return
		const intervalId = setInterval(() => {
			setAnimationState(prevState => {
				const nextIndex = words.length === prevState.currentWordIndex + 1 ? 0 : prevState.currentWordIndex + 1

				return {
					currentWordIndex: nextIndex,
					particles: createParticlesFromText({
						word: words[nextIndex],
						canvasContext: getCanvasContext(),
					}),
				}
			})
		}, 3000)

		return () => clearInterval(intervalId)
	}, [getCanvasContext, fontsReady])

	// Handle resizing on window resize
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [handleResize])

	// Animation loop
	useEffect(() => {
		const ctx = getCanvasContext()
		if (!ctx) return
		if (!fontsReady) return

		let animationFrameId: number

		const animate = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			animationState.particles.forEach(particle => {
				updateParticle(particle)
				drawParticle(particle, ctx)
			})
			if (!hasDrawnRef.current && animationState.particles.length > 0) {
				hasDrawnRef.current = true
				setIsReady(true)
			}
			animationFrameId = requestAnimationFrame(animate)
		}

		animate()

		return () => cancelAnimationFrame(animationFrameId)
	}, [animationState.particles, getCanvasContext, fontsReady])

	return (
		<div className='relative w-full min-h-[450px]'>
			<canvas
				ref={canvasRef}
				className={`w-full h-full transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
			/>
			<LoadingOverlay isHidden={isReady} />
		</div>
	)
}
