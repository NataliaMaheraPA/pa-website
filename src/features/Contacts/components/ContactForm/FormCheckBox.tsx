import { Control, FieldValues, Path, useController } from 'react-hook-form'

import UnCheck from '@/assets/icons/contactUs/un-chek.svg'
import Checked from '@/assets/icons/contactUs/checked.svg'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'
import { Link } from '@/lib/i18n/routing'

interface FormCheckBoxProps<T extends FieldValues> {
	name: Path<T>
	control: Control<T>
	i18nKey: string
}

export default function FormCheckBox<T extends FieldValues>({ name, control, i18nKey }: FormCheckBoxProps<T>) {
    const t = useTranslations('ContactUs')
	const {
		field,
		fieldState: { error },
	} = useController({ control, name })

    const labelContent = t.rich(i18nKey, {
        highlight: (chunks: React.ReactNode) => (
            <Link href='/privacy-policy' className='text-primary-green opacity-70 3xl:text-lg'>
                {chunks}
            </Link>
        ),
    })

	return (
		<div className='flex flex-col'>
			<label className='inline-flex items-center cursor-pointer select-none'>
				<input
					type='checkbox'
					{...field}
					checked={field.value}
					onChange={e => field.onChange(e.target.checked)}
					className='hidden'
				/>
				<div className='w-[24px] h-[24px] flex items-center justify-center relative'>
					<div
						className={cn(
							'absolute transition-all duration-300 transform',
							field.value ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
						)}
					>
						<UnCheck />
					</div>

					<div
						className={cn(
							'absolute transition-all duration-300 transform',
							field.value ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
						)}
					>
						<Checked />
					</div>
				</div>

				<span className='text-sm ml-3 font-normal'>{labelContent}</span>
			</label>

			{error && <p className='text-red-700 text-xs 3xl:text-sm pt-2'>{error.message}</p>}
		</div>
	)
}
