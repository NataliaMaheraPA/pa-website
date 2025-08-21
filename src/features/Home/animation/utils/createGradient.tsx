// Function to create a gradient color based on the word
export const createGradient = (ctx: CanvasRenderingContext2D, word: string): CanvasGradient => {
	const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height)

	if (word === 'Develop') {
		gradient.addColorStop(0.3, 'white')
		gradient.addColorStop(0.7, '#00dd95')
		gradient.addColorStop(1, 'white')
	} else {
		gradient.addColorStop(0.2, '#00dd95')
		gradient.addColorStop(0.6, 'white')
		gradient.addColorStop(1, '#00dd95')
	}

	return gradient
}
