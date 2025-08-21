import { Link } from '@/lib/i18n/routing'
import Logo from '@/assets/icons/home/logo.svg'

import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
// import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
	return (
		<header className='sticky top-0 z-50 w-full bg-primary-dark'>
			<div className='w-full flex justify-between px-6 md:px-0 md:justify-around items-center py-6 3xl:py-8'>
				<Link href='/' aria-label='Navigate to Home'>
					<Logo className='3xl:w-14 3xl:h-14' aria-label='PettersonApps Logo' />
				</Link>
				<nav className='hidden md:flex md:space-x-12'>
					<Navigation />
				</nav>
				<div className='hidden md:flex gap-2 justify-end'>{/* <LanguageSwitcher/> */}</div>
				<MobileMenu />
			</div>
			<div className='relative'>
				<div className="absolute top-full left-0 right-0 h-[18px] 3xl:h-8 bg-[url('/images/backgrounds/tape.webp')] bg-cover bg-no-repeat bg-center" />
			</div>
		</header>
	)
}
