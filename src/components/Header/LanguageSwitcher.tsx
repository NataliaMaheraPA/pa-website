'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/routing';
import { LANGUAGES } from '@/lib/i18n/constants';

interface INavigation {
	closeMenu?: () => void;
}

export default function LocaleSwitcher({ closeMenu }: INavigation) {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const activeLng = locale;

	const switchLanguage = (lng: string) => {
		if (lng === activeLng) return;

		router.replace(pathname, { locale: lng });

		if (closeMenu) {
			closeMenu();
		}
	};

	return (
				<>
			{LANGUAGES.map(({ code, label }, idx) => {
				const lastEl = idx !== LANGUAGES.length - 1
				return (
					<button
						type='button'
						aria-label={`Switch to ${label} language`}
						key={code}
						className={`transition-color-[0.3s] outline-none after:text-gray-400 3xl:text-2xl
							${lastEl ? 'after:content-["|"] after:pl-2' : ''} 
							${activeLng !== code ? 'opacity-60' : ''}`}
						onClick={() => switchLanguage(code)}
					>
						{label}
					</button>
				)
			})}
		</>
	);
}

