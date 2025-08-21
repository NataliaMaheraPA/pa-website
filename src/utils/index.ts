export const getFilterText = (selectedTags: string[], t: (key: string) => string) => {
	const and = t('filters.and')
	const more = t('filters.more')
	if (selectedTags.length === 1) {
		return t(`filters.${convertToTagKey(selectedTags[0])}`)
	} else if (selectedTags.length > 1) {
		return `${t(`filters.${convertToTagKey(selectedTags[0])}`)}, ${and} ${
			selectedTags.length - 1
		} ${more}`
	}
	return ''
}

export const getAllTags = (
	images: { id: number; pictures: { desktop: string; mobile?: string }; tags: string[]; alt: string }[]
): string[] => {
	const desiredOrder = [
		'Education & EdTech',
		'Content Creation & Distribution Platforms',
		'Automotive',
		'In-Car Entertainment',
		'Media & Entertainment',
		'Video Streaming Solutions',
		'Smart TV Platforms',
	]

	const tagsSet = new Set<string>()

	images.forEach(image => {
		image.tags.forEach(tag => {
			tagsSet.add(tag)
		})
	})

	const tagsArray = Array.from(tagsSet)

	tagsArray.sort((a, b) => {
		const indexA = desiredOrder.indexOf(a)
		const indexB = desiredOrder.indexOf(b)

		if (indexA === -1 && indexB === -1) {
			return a.localeCompare(b)
		}
		if (indexA === -1) {
			return 1
		}
		if (indexB === -1) {
			return -1
		}
		return indexA - indexB
	})

	return tagsArray
}

export const convertToTagKey = (name: string): string => {
	return name
		.toLowerCase()
		.replace(/&/g, '')
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
}
