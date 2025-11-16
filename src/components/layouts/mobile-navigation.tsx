'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { MainNavigationItem } from '@/types'

import { rubik } from '@/config/font'
import { useIsMobile } from '@/lib/hooks/use-mobile'
import { cn } from '@/lib/utils'

import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type MobileNavigationProps = {
	items?: MainNavigationItem[]
	className?: string
}

const MobileNavigation = ({ items, className }: MobileNavigationProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const isMobile = useIsMobile()

	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		if (!isMobile) {
			setOpen(false)
		}
	}, [isMobile])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className={cn(
						'extend-touch-target touch-manipulation !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent',
						className,
					)}
				>
					<Icons.hamburgerMenu className="size-6" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100"
				align="start"
				side="bottom"
				alignOffset={-16}
				sideOffset={14}
			>
				<div className="flex flex-col gap-12 overflow-auto px-6 py-6">
					<div className="flex flex-col gap-4">
						{items?.map((item, index) => {
							return (
								<React.Fragment key={item.title}>
									<h3
										className={`${rubik.className} fist-letter:uppercase flex flex-1 items-center justify-between text-xs font-medium text-secondary-foreground/70`}
									>
										{item.title}
									</h3>
									<div className="flex flex-col gap-3">
										{item.items?.map((subItem, index) => {
											return (
												<Link
													key={subItem.title}
													href={subItem.href!}
													className={cn(
														'text-xl text-secondary-foreground transition-colors duration-150 ease-in-out first-letter:uppercase hover:text-primary',
														pathname === subItem.href ? 'text-primary' : 'text-secondary-foreground',
													)}
													onClick={() => {
														router.push(subItem.href!.toString())
														setOpen(false)
													}}
												>
													{subItem.title}
												</Link>
											)
										})}
									</div>
								</React.Fragment>
							)
						})}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default MobileNavigation
