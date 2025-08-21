export const calculateCanvasHeight = (screenWidth: number): number => {
	const breakpoints = [
		{ minWidth: 320, maxWidth: 768, height: 450 },
		{ minWidth: 769, maxWidth: Infinity, height: 600 },
	]

	const activeBreakpoint = breakpoints.find(
		breakpoint => screenWidth >= breakpoint.minWidth && screenWidth <= breakpoint.maxWidth
	)

	return activeBreakpoint ? activeBreakpoint.height : 450
}

export const calculateCanvasWidth = (screenWidth: number): number => {
	const breakpoints = [
		{ minWidth: 320, maxWidth: 428, width: screenWidth - 30 },
		{ minWidth: 429, maxWidth: 820, width: screenWidth - 100 },
		{ minWidth: 821, maxWidth: 920, width: screenWidth - 400 },
		{ minWidth: 921, maxWidth: 1024, width: screenWidth - 550 },
		{ minWidth: 1025, maxWidth: 2559, width: 800 },
		{ minWidth: 2560, maxWidth: Infinity, width: 900 },
	]

	const activeBreakpoint = breakpoints.find(
		breakpoint => screenWidth >= breakpoint.minWidth && screenWidth <= breakpoint.maxWidth
	)

	return activeBreakpoint ? activeBreakpoint.width : 800
}

export const getResponsiveSettings = (screenWidth: number, canvasHeight: number) => {
	const breakpoints = [
		{ minWidth: 320, maxWidth: 374, fontSize: 8, gap: 3 },
		{ minWidth: 375, maxWidth: 540, fontSize: 7, gap: 3 },
		{ minWidth: 541, maxWidth: 640, fontSize: 6, gap: 3 },
		{ minWidth: 641, maxWidth: 1280, fontSize: 5, gap: 3 },
		{ minWidth: 1281, maxWidth: 2559, fontSize: 4, gap: 3 },
		{ minWidth: 2560, maxWidth: Infinity, fontSize: 3, gap: 4 },
	]

	const activeBreakpoint = breakpoints.find(
		breakpoint => screenWidth >= breakpoint.minWidth && screenWidth <= breakpoint.maxWidth
	)

	if (!activeBreakpoint) return { fontSize: 0, gap: 0 }

	return {
		fontSize: canvasHeight ? canvasHeight / activeBreakpoint.fontSize : 0,
		gap: activeBreakpoint.gap,
	}
}
