'use client'

import { useEffect, useState } from 'react'

import Navigation from '../Navigation'

import styles from './mobileMenu.module.css'

export default function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [shouldRenderMenu, setShouldRenderMenu] = useState(isMenuOpen)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	useEffect(() => {
		if (isMenuOpen) {
			setShouldRenderMenu(true)
		} else {
			// Wait for animation to finish before hidding the menu
			const timeout = setTimeout(() => {
				setShouldRenderMenu(false)
			}, 700)
			return () => clearTimeout(timeout)
		}
	}, [isMenuOpen])

	return (
		<div className='md:hidden'>
			<button
				onClick={toggleMenu}
				className='relative flex items-center justify-center w-6 h-6 z-50 group'
				type='button'
				aria-label='Toggle mobile menu'
			>
				<span
					className={`absolute w-full h-[2px] bg-white rounded transition-transform duration-300 ease-in-out ${
						isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'
					}`}
				></span>
				<span
					className={`absolute w-full h-[2px] bg-white rounded transition-opacity duration-300 ease-in-out ${
						isMenuOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`absolute w-full h-[2px] bg-white rounded transition-transform duration-300 ease-in-out ${
						isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'
					}`}
				></span>
			</button>

			{/* Mobile Menu */}
			{shouldRenderMenu && (
				<div
					className={`fixed top-0 right-0 h-full bg-primary-dark text-white z-40 w-full flex items-center justify-center transition-all duration-500 ease-in-out ${
						isMenuOpen ? styles['mobile-menu-enter'] : styles['mobile-menu-exit']
					}`}
				>
					<nav className='flex justify-center items-center flex-col gap-10'>
						<Navigation closeMenu={closeMenu} />
					</nav>
				</div>
			)}
		</div>
	)
}
