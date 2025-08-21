import { useEffect, useRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { nameRegex } from './formSchema'

interface FormInputProps<T extends FieldValues> {
	name: Path<T>
	control: Control<T>
	type: string
	placeholder: string
	autoFocus?: boolean
}

export default function FormInput<T extends FieldValues>({
	name,
	control,
	type,
	placeholder,
	autoFocus = false,
}: FormInputProps<T>) {
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)
	const isTextarea = type === 'textarea'

	const {
		field,
		fieldState: { error },
	} = useController({ control, name })

	useEffect(() => {
		if (autoFocus && inputRef.current) {
			inputRef.current.focus()
		}
	}, [autoFocus])

	const adjustHeight = () => {
		if (textareaRef.current && textareaRef.current.scrollHeight < 150) {
			textareaRef.current.style.height = 'auto' // Reset the height
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Set to the scroll height
		}
	}

	useEffect(() => {
		adjustHeight()
	}, [field.value])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (name === 'name' && !nameRegex.test(e.key)) {
			e.preventDefault()
		}
	}

	return (
		<div className='relative w-full'>
			{isTextarea ? (
				<textarea
					{...field}
					ref={textareaRef}
					value={field.value || ''}
					placeholder=' '
					maxLength={1000}
					rows={1}
					className='relative z-20 peer bg-transparent border-0 border-b-[1px] opacity-[0.4] focus:outline-none focus:ring-0 focus:border-primary-green text-white placeholder-transparent w-full resize-none overflow-hidden'
				/>
			) : (
				<input
					{...field}
					ref={el => {
						field.ref(el)
						inputRef.current = el
					}}
					type={type}
					value={field.value || ''}
					onKeyDown={handleKeyDown}
					placeholder=' '
					autoComplete='off'
					className='relative z-20 peer bg-transparent border-0 border-b-[1px] opacity-[0.4] border-white/40 focus:outline-none focus:ring-0 focus:border-primary-green text-white 3xl:text-lg placeholder-transparent w-full'
				/>
			)}
			<label
				htmlFor={name}
				className={`absolute left-0 text-gray-300 transform transition-all 3xl:text-lg
    peer-placeholder-shown:translate-y-[-10px] peer-placeholder-shown:translate-x-4 peer-placeholder-shown:scale-100
    peer-placeholder-shown:opacity-[0.5] peer-focus:translate-y-[-35px]
    peer-focus:text-primary-green ${field.value ? 'translate-y-[-30px] text-primary-green' : ''}`}
			>
				{placeholder}
			</label>
			<p className='text-red-700 text-xs 3xl:text-sm pt-2'>{error?.message}</p>
		</div>
	)
}
