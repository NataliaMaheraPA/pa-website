import { Particle } from '../types'
import { createGradient } from './createGradient'

// Function to create a particle with a random position
export const createParticle = (
	x: number,
	y: number,
	gap: number,
	word: string,
	ctx: CanvasRenderingContext2D
): Particle => {
	// Create the gradient using the helper function
	const gradient = createGradient(ctx, word)

	// Set the particle properties
	return {
		x: Math.random() * ctx.canvas.width,
		y: Math.random() * ctx.canvas.height,
		originX: x,
		originY: y,
		color: gradient,
		size: gap - 1,
		dx: 0,
		dy: 0,
		vx: 0,
		vy: 0,
		friction: Math.random() * 0.6 + 0.15,
	}
}

export const updateParticle = (particle: Particle) => {
	// Calculate the distance from the particle's original position
	particle.dx = particle.originX - particle.x
	particle.dy = particle.originY - particle.y

	// Apply some movement towards the origin
	particle.vx += particle.dx * 0.15
	particle.vy += particle.dy * 0.15

	// Apply friction
	particle.vx *= particle.friction
	particle.vy *= particle.friction

	// Update position
	particle.x += particle.vx
	particle.y += particle.vy
}

// Function to draw a particle on the canvas
export const drawParticle = (particle: Particle, ctx: CanvasRenderingContext2D) => {
	ctx.fillStyle = particle.color
	ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
}
