'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/lib/i18n/routing'

const navItems = [
	{ name: 'about', path: '/about' },
	{ name: 'portfolio', path: '/portfolio' },
	{ name: 'services', path: '/services' },
	{ name: 'contacts', path: '/contacts' },
]

interface INavigation {
	closeMenu?: () => void
}

export default function Navigation({ closeMenu }: INavigation) {
	const t  = useTranslations('Navigation')
	const pathname = usePathname()

	return (
		<>
			{navItems.map((item, index) => {
				const isActive = pathname === item.path || pathname.startsWith(item.path)
				return (
				<Link
					key={index}
					href={item.path}
					onClick={closeMenu}
					className={`hover:text-primary-green transition-colors duration-200 3xl:text-2xl ${
						isActive ? 'text-primary-green' : 'text-white opacity-60'
					}`}
				>
					{t(`${item.name}`)}
				</Link>
				)
})}
		</>
	)
}
