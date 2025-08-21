export interface AccordionItem {
	id: number
	title: string
	length: number
	subItems?: Array<{
		subTitle?: string
		desc?: string
	}>
}

export interface CardProps {
	title: string
	subTitle: string
	accordionItems: Array<AccordionItem>
}

export interface AccordionProps extends AccordionItem {
	isActive: boolean
	onClick: (id: number, length: number) => void
}
