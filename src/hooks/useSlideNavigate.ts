'use client'

import { useRef, useEffect, useState } from 'react'
import { useRouter } from '@/lib/i18n/routing'
import styles from '@/features/Home/home.module.css'

export function useSlideNavigate() {
	const router = useRouter()

	// useRef is used to store values across renders without causing re-renders
	const targetPathRef = useRef<string | null>(null)
	const isSlidingRef = useRef(false) // Tracks whether a slide animation is in progress
	const directionRef = useRef<'left' | 'right' | null>(null)

	const [slideClass, setSlideClass] = useState('') // State to manage the CSS class for the slide animation

	// Function to handle navigation with a slide effect
	const handleNavigate = (path: string, direction: 'left' | 'right') => {
		// Store the direction and target path in refs
		directionRef.current = direction
		targetPathRef.current = path
		isSlidingRef.current = true

		// Determine the slide animation class based on the direction (left or right)
		const newSlideClass = direction === 'right' ? styles['slide-out-left'] : styles['slide-out-right']
		setSlideClass(newSlideClass)

		// Delay navigation to allow animation to finish before navigating
		setTimeout(() => {
			if (targetPathRef.current) {
				router.push(targetPathRef.current)
			}
		}, 450) // Animation duration (450ms)
	}

	// After the animation ends, clear the slide class to reset styles
	useEffect(() => {
		if (!isSlidingRef.current) {
			setSlideClass('')
		}
	}, [])

	return { handleNavigate, slideClass }
}
