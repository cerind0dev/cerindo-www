import React, { useState } from 'react'

// @see https://github.com/shadcn-ui/ui/blob/e18902039a021bd6bc58388a78e4c7a516c3d6e6/apps/v4/hooks/use-mobile.ts

export function useIsMobile(mobileBreakpoint = 768) {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)
		const onChange = () => {
			setIsMobile(window.innerWidth < mobileBreakpoint)
		}
		mql.addEventListener('change', onChange)
		setIsMobile(window.innerWidth < mobileBreakpoint)
		return () => mql.removeEventListener('change', onChange)
	}, [mobileBreakpoint])

	return !!isMobile
}
