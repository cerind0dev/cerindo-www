'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MainNavigationItem } from '@/types'

import { cn } from '@/lib/utils'

interface MainNavigationProps extends React.ComponentProps<'nav'> {
	items?: MainNavigationItem[]
}

const MainNavigation = ({ items, className, ...props }: MainNavigationProps) => {
	const pathname = usePathname()

	return (
		<React.Fragment>
			{items?.[0]?.items ? (
				<nav aria-label="main" className={cn(className)} {...props}>
					<ul className="flex space-x-8">
						{items[0].items.map((item) => {
							return (
								<li key={`menu-item-${item.title}`}>
									<Link
										href={item.href!}
										className={cn(
											'block transition-colors duration-150 ease-in-out first-letter:uppercase hover:text-primary',
											pathname === item.href ? 'text-primary' : 'text-secondary-foreground',
										)}
									>
										{item.title}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			) : null}
		</React.Fragment>
	)
}

export default MainNavigation
