import { FC } from 'react'
import { cn } from '@/lib/cn'
import PageSectionContent, { ContentProps } from './PageSectionContent'

export interface Section {
	title: string
	content: ContentProps[]
}

interface ContentSectionsProps {
	sections: Section[]
	className?: string
}

const ContentSections: FC<ContentSectionsProps> = ({ sections, className }) => {
	return (
		<div className={cn('w-full flex flex-col items-start', className)}>
			{sections.map((section, index) => (
				<div key={index} className='flex flex-col mb-10'>
					<h2 className='text-xl font-bold p-0 mb-3 flex'>
						<span className='w-[24px] h-[24px] flex justify-center mr-2'>{index + 1}</span>
						{section.title}
					</h2>
					<PageSectionContent content={section.content} />
				</div>
			))}
		</div>
	)
}

export default ContentSections
