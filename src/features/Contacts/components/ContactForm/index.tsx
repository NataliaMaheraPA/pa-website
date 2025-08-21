import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useTranslations } from 'next-intl'
import ArrowIcon from '@/assets/icons/contactUs/arrow-right.svg'
import { createContactFormSchema, ContactFormSchemaType } from './formSchema'
import { sendContactForm } from '@/features/Contacts/services/api'
import FormInput from './FormInput'
import SectionTitle from '@/components/SectionTitle'
import FormCheckBox from './FormCheckBox'

export default function ContactForm() {
	const t = useTranslations('ContactUs')

	const {
		control,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<ContactFormSchemaType>({
		resolver: zodResolver(createContactFormSchema(t)),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			agreement: false,
		},
	})

	const onSubmit: SubmitHandler<ContactFormSchemaType> = async data => {
		try {
			await sendContactForm({
				name: data.name,
				email: data.email,
				message: data.message,
			})

			toast.success(t('successMessage'))
			reset()
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'
			toast.error(`${t('errorMessage')} ${errorMessage}`)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col pt-20 px-4 pb-[90px] 3xl:p-20 md:px-12 xl:p-[105px] w-full'
		>
			<SectionTitle
				i18nKey='ContactUs.title'
				className='mx-auto bg-transparent md:hidden text-3xl pb-20 text-center font-semibold tracking-0 text-primary-green'
			/>
			<h2 className='hidden md:block pb-12 text-left font-semibold text-xl 3xl:text-2xl'>{t('title2')}</h2>
			<div className='flex flex-col gap-9'>
				<FormInput name='name' type='name' placeholder={t('firstNameLastName')} control={control} autoFocus />
				<FormInput name='email' type='email' placeholder={t('email')} control={control} />
				<FormInput name='message' type='textarea' placeholder={t('message')} control={control} />
				<FormCheckBox name='agreement' control={control} i18nKey={'agreement'} />
			</div>
			<button
				disabled={isSubmitting}
				aria-label='Submit'
				className={`w-full flex justify-center items-center 3xl:text-xl gap-2 uppercase border-[1px] border-white mt-14 py-3 bg-transparent text-white opacity-[0.6] transition-all duration-300 ease-in-out hover:opacity-[0.8]
					${
						isSubmitting
							? 'bg-gray-500 cursor-not-allowed'
							: 'bg-transparent text-white opacity-[0.6] transition-all duration-300 ease-in-out hover:opacity-[0.8]'
					}}`}
			>
				{isSubmitting ? (
					<>
						{t('submitting')}
						<div className='w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin' />
					</>
				) : (
					<>
						{t('btn')}
						<ArrowIcon />
					</>
				)}
			</button>
		</form>
	)
}
