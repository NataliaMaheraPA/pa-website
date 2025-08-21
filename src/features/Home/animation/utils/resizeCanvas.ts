import { AnimationState } from '../types'
import { createParticlesFromText } from './createParticlesFromText'
import { calculateCanvasHeight, calculateCanvasWidth } from './responsiveSettings'

export function resizeCanvas({
	canvas,
	context,
	wordIndex,
	words,
	updateAnimationState,
}: {
	canvas: HTMLCanvasElement | null
	context: CanvasRenderingContext2D | null
	wordIndex: number
	words: string[]
	updateAnimationState: (newState: Partial<AnimationState>) => void
}) {
	if (!canvas || !context) return

	const canvasWidth = calculateCanvasWidth(window.innerWidth)
	const canvasHeight = calculateCanvasHeight(canvasWidth)

	canvas.width = canvasWidth
	canvas.height = canvasHeight

	const particles = createParticlesFromText({
		word: words[wordIndex],
		canvasContext: context,
	})
	updateAnimationState({ particles })
}
