import Correct from '@/assets/icons/portfolio/correct.svg'

const CheckboxItem = ({
	id,
	label,
	checked,
	onChange,
}: {
	id: string
	label: string
	checked: boolean
	onChange: () => void
}) => {
	return (
		<div className='flex items-center justify-center px-[6px] py-2 rounded-sm hover:bg-white/5'>
			<label
				htmlFor={id}
				className='w-full flex items-center justify-start capitalize text-sm font-medium text-white cursor-pointer'
			>
				<input id={id} type='checkbox' checked={checked} onChange={onChange} className='hidden peer' />
				<div className='min-w-4 min-h-4 w-4 h-4 border border-white peer-checked:border-transparent peer-checked:bg-primary-green flex items-center justify-center transition-colors duration-200'>
					{checked && <Correct className='text-black transition-all duration-200' />}
				</div>
				<span className='ml-2 text-sm tracking-wide'>{label}</span>
			</label>
		</div>
	)
}

export default CheckboxItem
