import { useMemo } from 'react'
import { cn } from '@/lib/cn'

type ParagraphText = string | { type: 'link'; text: string; href: string }

type ParagraphContent = {
	type: 'paragraph'
	text: string | ParagraphText[]
}

type ListItem =
	| string
	| {
			bold?: string
			text?: string
			link?: {
				text: string
				href: string
			}
	  }

type ListContent = { type: 'list'; items: ListItem[] }

export type ContentProps = ParagraphContent | ListContent

export interface SectionContentProps {
	content: ContentProps[]
}

export default function PageSectionContent({ content }: SectionContentProps) {
	const listItemStyles = useMemo(() => 'text-sm leading-snug mb-3 last:mb-0', [])

	const linkStyle = useMemo(() => 'text-white font-bold hover:underline cursor-pointer', [])

	if (!content?.length) return null

	return (
		<div className='flex flex-col'>
			{content.map((item, index) => {
				const key = `${item.type}-${index}`

				switch (item.type) {
					case 'paragraph':
						return item.text ? (
							<p key={key} className={cn('text-sm text-justify leading-snug', '[&:not(:first-child)]:mt-6')}>
								{Array.isArray(item.text)
									? item.text.map((part, i) =>
											typeof part === 'string' ? (
												part
											) : (
												<a
													key={`link-${i}`}
													href={part.href}
													target='_blank'
													rel='noopener noreferrer'
													className={linkStyle}
												>
													{part.text}
												</a>
											)
									  )
									: item.text}
							</p>
						) : null

					case 'list':
						return item.items?.length ? (
							<ul
								key={key}
								className='pl-4 my-3 list-[square] marker:text-white marker:text-[16px] marker:w-[16px] marker:h-[16px]'
							>
								{item.items.map((li, liIndex) => {
									const liKey = `${key}-item-${liIndex}`

									if (typeof li === 'string') {
										return (
											<li key={liKey} className={listItemStyles}>
												{li}
											</li>
										)
									}
									return (
										<li key={liKey} className={listItemStyles}>
											<strong>{li.bold}</strong> {li.text}
											{li.link && (
												<>
													{' '}
													<a href={li.link.href} target='_blank' rel='noopener noreferrer' className={linkStyle}>
														{li.link.text}
													</a>
												</>
											)}
										</li>
									)
								})}
							</ul>
						) : null

					default:
						return null
				}
			})}
		</div>
	)
}
