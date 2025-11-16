'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CompanyServiceItem } from '@/types'

import { rubik } from '@/config/font'
import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'

import Icons from '@/components/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type CompanyServiceTabsProps = {
	services: {
		[key in keyof typeof marketingConfig.services]: {
			id: string
			title: string
			description: string
			images: string
			benefits: {
				text: string
			}[]
		}[]
	}
}

const CompanyServiceTabs = ({ services }: CompanyServiceTabsProps) => {
	const tabKeys = Object.keys(services) as Array<keyof typeof services>

	return (
		<Tabs defaultValue={tabKeys[0]} orientation="vertical" className="mt-6 md:mt-10">
			<div className="grid w-full grid-cols-12 gap-4">
				<div className="scrollbar scrollbar-track-background scrollbar-thumb-slate-300 hover:scrollbar-thumb-slate-400 col-span-12 touch-pan-x self-start overflow-x-auto bg-background px-2 pt-2 pb-6 transition-colors duration-150 ease-in-out select-none xl:col-span-3 xl:touch-none xl:overflow-visible xl:bg-transparent xl:p-0">
					<TabsList className="float-left flex h-auto min-w-full space-y-0 space-x-2 bg-transparent p-0 xl:float-none xl:block xl:space-y-2 xl:space-x-0">
						{tabKeys.map((key) => {
							return (
								<TabsTrigger
									key={key}
									value={key}
									className={cn(
										'backgroundspace-nowrap w-full justify-start rounded px-5 py-2.5 text-left text-sm leading-5 font-semibold xl:px-5 xl:py-4',
										'duration-150 ease-in-out focus:ring-4 focus:ring-blue-300 focus:outline-none',
										'data-[state=active]:bg-primary data-[state=active]:text-background data-[state=active]:shadow-sm',
									)}
								>
									{key}
								</TabsTrigger>
							)
						})}
					</TabsList>
				</div>
				<div className="col-span-12 pt-0 xl:col-span-9">
					{tabKeys.map((key, index) => {
						return (
							<TabsContent key={`${key}-post-item-${index}`} value={key} className="mt-0 rounded shadow-sm">
								{(services[key] as CompanyServiceItem[]).map((service, index) => {
									return (
										<div key={`post-${service.id}`} className="grid grid-cols-8 overflow-hidden rounded">
											<div className="relative col-span-8 size-auto h-[260px] max-w-full min-w-full md:col-span-4 md:h-full">
												<Image
													src={service.images}
													fill
													alt={`${service.title}`}
													style={{ objectFit: 'cover' }}
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
													priority={index === 0} // only preload first image
												/>
											</div>
											<div className="col-span-8 rounded-b border-x border-b border-slate-300 bg-background p-4 py-8 text-sm text-secondary-foreground md:col-span-4 md:rounded-tr md:rounded-bl-none md:border-t md:border-l-0 md:px-6 md:py-8">
												<h3 className={`${rubik.className} text-lg font-bold md:text-xl`}>{service.title}</h3>
												<p className="mt-2 leading-7! md:mt-4 md:text-base">{service.description}</p>
												<ul className="mt-4 space-y-2 md:mt-6">
													{service.benefits.map((benefit) => (
														<li key={benefit.text} className="flex flex-row items-center space-x-3">
															<Icons.star className="size-4 shrink-0 fill-current text-primary md:size-5" />
															<p className="text-slate-600 md:text-base">{benefit.text}</p>
														</li>
													))}
												</ul>
											</div>
										</div>
									)
								})}
							</TabsContent>
						)
					})}
				</div>
			</div>
		</Tabs>
	)
}

type ReadMoreTextProps = {
	text: string
}

const ReadMoreText = ({ text }: ReadMoreTextProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div>
			<p className="mt-2 leading-7! md:mt-4 md:text-base">{isOpen ? text : `${text.substring(0, 80)}...`}</p>
			<button onClick={() => setIsOpen(!isOpen)} className="font-semibold text-primary">
				{isOpen ? 'show less' : 'read more'}
			</button>
		</div>
	)
}

export default CompanyServiceTabs
