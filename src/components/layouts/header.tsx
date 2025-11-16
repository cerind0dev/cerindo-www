import React from 'react'

import { siteConfig } from '@/config/site'

import MainNavigation from '@/components/layouts/main-navigation'
import MobileNavigation from '@/components/layouts/mobile-navigation'
import Logo from '@/components/logo'

const Header = () => {
	return (
		<header className="sticky inset-x-0 top-0 z-40 w-full border-b border-secondary-foreground/10 bg-background shadow-md">
			<div className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
				<MobileNavigation items={siteConfig.mainNav} className="mr-0 flex 2md:hidden" />
				<div className="hidden w-full gap-14 2md:flex 2md:items-center 2md:justify-between">
					<Logo />
					<MainNavigation
						items={siteConfig.mainNav}
						className="flex items-center text-sm leading-6 font-medium text-secondary-foreground first-letter:uppercase"
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
