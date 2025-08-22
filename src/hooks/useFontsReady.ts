'use client'

import { useEffect, useState } from 'react'

// Pass explicit family specs to ensure the exact font face is loaded before returning ready
// Example: ["500 1em KyivTypeSans"]
export function useFontsReady(familySpecs: string[] = []): boolean {
	const [ready, setReady] = useState(false)
	const specsKey = Array.isArray(familySpecs) ? familySpecs.join('|') : ''

	useEffect(() => {
		let cancelled = false
		const onReady = () => {
			if (!cancelled) setReady(true)
		}

		try {
			if (typeof document !== 'undefined' && 'fonts' in document) {
				const fontSet = (document as Document & { fonts: FontFaceSet }).fonts
				const hasSpecs = Array.isArray(familySpecs) && familySpecs.length > 0
				if (hasSpecs) {
					// Wait strictly for requested faces; no timeout to avoid premature fallback
					Promise.all(familySpecs.map(spec => fontSet.load(spec)))
						.then(onReady)
						.catch(onReady)
				} else {
					// Fallback to fonts.ready if no explicit specs provided
					fontSet.ready.then(onReady).catch(onReady)
				}
			} else {
				// Fallback: if FontFaceSet unsupported, don't block UI
				onReady()
			}
		} catch {
			onReady()
		}

		return () => {
			cancelled = true
		}
	}, [specsKey, familySpecs])

	return ready
}
