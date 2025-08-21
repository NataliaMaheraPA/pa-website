'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimationState } from '../animation/types'
import { drawParticle, updateParticle } from '../animation/utils/createParticle'
import { createFontFace } from '../animation/utils/createFontFace'
import { resizeCanvas } from '../animation/utils/resizeCanvas'
import { createParticlesFromText } from '../animation/utils/createParticlesFromText'

const words = ['Design', 'Develop', 'Build']

export default function ParticleText() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [fontLoaded, setFontLoaded] = useState(false)

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

	// Initialize the canvas
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		createFontFace()
			.then(() => {
				setFontLoaded(true)
				handleResize()
			})
			.catch(err => console.error('Failed to load font:', err))
	}, [fontLoaded, handleResize])

	// Word cycling
	useEffect(() => {
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
	}, [getCanvasContext])

	// Handle resizing on window resize
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [handleResize])

	// Animation loop
	useEffect(() => {
		const ctx = getCanvasContext()
		if (!ctx) return

		let animationFrameId: number

		const animate = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			animationState.particles.forEach(particle => {
				updateParticle(particle)
				drawParticle(particle, ctx)
			})
			animationFrameId = requestAnimationFrame(animate)
		}

		animate()

		return () => cancelAnimationFrame(animationFrameId)
	}, [animationState.particles, getCanvasContext])

	return <canvas ref={canvasRef} className='min-h-[450px]' />
}
