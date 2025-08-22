import { Particle } from '../types'
import { createParticle } from './createParticle'
import { getResponsiveSettings } from './responsiveSettings'

export function extractImageData(word: string, ctx: CanvasRenderingContext2D) {
	const { fontSize } = getResponsiveSettings(window.innerWidth, ctx.canvas.height)
	ctx.font = `bold ${fontSize}px KyivTypeSans, Montserrat, sans-serif`
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.fillStyle = 'white'
	ctx.fillText(word, ctx.canvas.width / 2, ctx.canvas.height / 2)

	return ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
}

export function generateParticlesFromImageData(
	imageData: ImageData,
	gap: number,
	text: string,
	ctx: CanvasRenderingContext2D
) {
	const particlesArray: Particle[] = []
	for (let y = 0; y < imageData.height; y += gap) {
		for (let x = 0; x < imageData.width; x += gap) {
			const index = (y * imageData.width + x) * 4
			if (imageData.data[index + 3] > 128) {
				particlesArray.push(createParticle(x, y, gap, text, ctx))
			}
		}
	}
	return particlesArray
}
