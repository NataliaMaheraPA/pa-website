'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePortfolioStore } from '@/store/portfolio-store'
import { convertToTagKey, getAllTags, getFilterText } from '@/utils'
import ArrowDown from '@/assets/icons/arrowDown.svg'
import Flashlight from '@/assets/icons/portfolio/filter.svg'
import images from '../constants'
import { cn } from '@/lib/cn'
import CheckboxItem from './CheckboxItem'

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)
	const desktopButtonRef = useRef<HTMLButtonElement>(null)
	const mobileButtonRef = useRef<HTMLButtonElement>(null)
	const { selectedTags, setSelectedTags } = usePortfolioStore()
	const t = useTranslations('Portfolio')
	const tags = getAllTags(images)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleTagChange = (tag: string) => {
		const allTags = getAllTags(images)
		if (tag === 'all') {
			setSelectedTags(selectedTags.length === allTags.length ? [] : [...allTags])
		} else {
			const newTags = selectedTags.includes(tag) ? selectedTags.filter((t: string) => t !== tag) : [...selectedTags, tag]
			setSelectedTags(newTags)
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node) &&
				!desktopButtonRef.current?.contains(event.target as Node) &&
				!mobileButtonRef.current?.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className='relative max-w-[620px] w-full mb-2'>
			<div className='flex flex-row items-end md:items-baseline justify-between mx-4 mb-2 md:mb-0'>
				<h2 className='w-full flex items-center md:block md:w-auto text-sm tracking-wide font-semibold text-white/60 md:text-white md:pb-7 3xl:pb-16 3xl:text-2xl'>
					{t('filterText')}
					<span className='inline-block md:inline ml-2 text-sm tracking-wide font-semibold text-white md:text-primary-green w-[175px] text-ellipsis overflow-hidden whitespace-nowrap md:text-clip'>
						{getFilterText(selectedTags, (key: string) => t(key))}
					</span>
				</h2>
				<button
					ref={desktopButtonRef}
					aria-label='Toggle dropdown'
					className='hidden md:inline-flex items-center md:ml-4 p-1 transition-all tracking-wide text-primary-green/90 font-medium rounded-sm text-sm text-center'
					type='button'
					onClick={toggleDropdown}
				>
					{t('buttonText')}
					<ArrowDown className={cn('ml-1', isOpen && 'rotate-180')} />
				</button>
				<button
					ref={mobileButtonRef}
					aria-label='Toggle dropdown'
					className={cn('inline-flex md:hidden', isOpen && 'text-primary-green fill-primary-green')}
					type='button'
					onClick={toggleDropdown}
				>
					<Flashlight className={cn(isOpen && 'text-primary-green fill-primary-green')} />
				</button>
			</div>
			<div
				ref={modalRef}
				className={cn(
					'absolute top-[40px] md:top-[40px] right-0 md:-right-[30px] z-10 w-[250px] h-[310px]',
					'overflow-y-auto scrollHidden bg-dropdown-gradient backdrop-blur-lg rounded-sm',
					isOpen ? 'block' : 'hidden'
				)}
			>
				<ul className='p-5 space-y-[10px] text-sm text-gray-700' aria-labelledby='dropdownButton'>
					<li>
						<CheckboxItem
							id='checkbox-item-all'
							label={t('filters.all')}
							checked={selectedTags.length === tags.length}
							onChange={() => handleTagChange('all')}
						/>
					</li>
					{tags.map(tag => (
						<li key={tag}>
							<CheckboxItem
								id={`checkbox-item-${tag}`}
								label={t(`filters.${convertToTagKey(tag)}`)}
								checked={selectedTags.includes(tag)}
								onChange={() => handleTagChange(tag)}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default DropdownMenu
