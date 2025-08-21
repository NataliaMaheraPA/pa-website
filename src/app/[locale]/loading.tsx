export default function Loading() {
	return (
		<div className='flex w-full items-center justify-center py-24'>
			<div className='relative' aria-live='polite' role='status'>
				<div
					className='h-10 w-10 rounded-full border-2 border-white/10 animate-spin'
					style={{ borderTopColor: 'var(--primary-green)' }}
				/>
				<div
					className='pointer-events-none absolute inset-0 rounded-full opacity-40 blur-[6px]'
					style={{ boxShadow: '0 0 24px var(--primary-green)' }}
				/>
				<span className='sr-only'>Loading…</span>
			</div>
		</div>
	)
}
