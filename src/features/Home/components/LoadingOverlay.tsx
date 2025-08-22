'use client'

type LoadingOverlayProps = {
	isHidden: boolean
}

export default function LoadingOverlay({ isHidden }: LoadingOverlayProps) {
	return (
		<div
			className={`absolute inset-0 z-10 grid place-items-center transition-opacity duration-500 ${
				isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
			}`}
		>
			<div className='absolute inset-0 bg-neutral-900/30' />
			<div className='h-4 w-1/2 max-w-[320px] rounded bg-neutral-500/20 overflow-hidden relative'>
				<div className='absolute inset-y-0 -left-1/2 right-1/2 bg-white/10 animate-[shimmer_2s_ease_infinite]' />
			</div>
		</div>
	)
}
