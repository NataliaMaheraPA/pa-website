import { Particle } from '../types'
import { extractImageData, generateParticlesFromImageData } from './imageData'
import { getResponsiveSettings } from './responsiveSettings'

export function createParticlesFromText({
	word,
	canvasContext,
}: {
	word: string
	canvasContext: CanvasRenderingContext2D | null
}): Particle[] {
	if (!canvasContext) return []

	const { gap } = getResponsiveSettings(window.innerWidth, canvasContext.canvas.height)
	canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height)

	const imageData = extractImageData(word, canvasContext)
	return generateParticlesFromImageData(imageData, gap, word, canvasContext)
}
