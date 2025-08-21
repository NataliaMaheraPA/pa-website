export interface Particle {
	x: number
	y: number
	originX: number
	originY: number
	color: string | CanvasGradient
	size: number
	dx: number
	dy: number
	vx: number
	vy: number
	friction: number
}

export type AnimationState = {
	currentWordIndex: number
	particles: Particle[]
}
