export const createFontFace = async () => {
	const font = new FontFace(
		'KyivTypeSans',
		`url(/fonts/KyivTypeSans-Medium.woff2) format('woff'),
		 url(/fonts/KyivTypeSans-Medium.woff) format('woff'),
     url(/fonts/KyivTypeSans-Medium.ttf) format('truetype')`
	)
	await font.load()
	document.fonts.add(font)
}
