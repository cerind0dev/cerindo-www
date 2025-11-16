import React from 'react'
import Image from 'next/image'

import { allPosts } from 'content-collections'

import { rubik } from '@/config/font'
import { marketingConfig } from '@/config/marketing'

import CompanyClientCarousel from '@/components/company-client-carousel'
import CompanyProjectCarousel, { CompanyProjectCarouselSkeleton } from '@/components/company-project-carousel'
import CompanyServiceTabs from '@/components/company-service-tabs'
import Icons from '@/components/icons'
import { Separator } from '@/components/ui/separator'

export default async function IndexPage() {
	const { getInTouch } = marketingConfig
	const postsSortedByDate = allPosts
		.toSorted((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
		.map(({ title, description, image, date, authors, slug }) => ({
			title,
			description,
			image,
			date,
			authors,
			slug,
		}))
		.slice(0, 3)

	return (
		<React.Fragment>
			<div className="w-full">
				<header className="relative flex h-96 w-full items-center justify-start before:absolute before:inset-y-0 before:z-10 before:block before:size-full before:bg-black/70 md:h-[512px]">
					<div className="absolute z-0 size-full">
						<Image
							src="/images/sites/background/jumbotron_bg.webp"
							alt="Container storage site"
							fill
							priority
							className="bg-no-repeat object-cover object-center"
						/>
					</div>
					<div className="z-20 mx-auto flex size-full max-w-6xl items-center justify-center px-4 py-7 text-background sm:px-6 lg:px-8">
						<div className="relative h-32 w-full md:h-40 lg:h-48">
							<Image
								src="/images/cerindo_cgl_logo.svg"
								alt="Logo cerindo cgl"
								fill
								style={{ objectFit: 'contain' }}
								priority
							/>
						</div>
						<div className="relative h-32 w-full md:h-40 lg:h-48">
							<Image
								src="/images/cerindo_cpl_logo.svg"
								alt="Logo cerindo cpl"
								fill
								style={{ objectFit: 'contain' }}
								priority
							/>
						</div>
						<div className="relative h-32 w-full md:h-40 lg:h-48">
							<Image
								src="/images/cerindo_sayap_tagline_logo.svg"
								alt="Logo cerindo sayap tagline"
								fill
								style={{ objectFit: 'contain' }}
								priority
							/>
						</div>
					</div>
				</header>
				<aside className="bg-primary text-background">
					<div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-0 px-4 py-10 2md:flex-row 2md:space-y-0 2md:divide-y-0 sm:px-6 lg:px-8 lg:py-14">
						{marketingConfig.overviews.map((overview, index) => {
							const Icon = Icons[overview.icon as keyof typeof Icons]

							return (
								<React.Fragment key={`overview-${overview.icon}`}>
									<div className="flex flex-col items-center space-y-2 space-x-0 2md:items-start lg:flex-row lg:space-y-0 lg:space-x-4">
										<Icon className="size-7 2md:size-9" />
										<div className="space-y-2 text-center 2md:text-left">
											<p className="font-light">{overview.title}</p>
											{overview.asLink ? (
												<a
													href={`${overview.linkType}:${overview.text}`}
													className="block rounded text-base font-medium no-underline hover:underline hover:decoration-2 hover:underline-offset-4 focus:outline-2 focus:outline-offset-4 focus:outline-background focus:outline-dashed 2md:text-lg"
												>
													{overview.text}
												</a>
											) : (
												<span className="block text-base font-medium 2md:text-lg">{overview.text}</span>
											)}
										</div>
									</div>
									{index < marketingConfig.overviews.length - 1 && (
										<Separator className="my-6 block !w-[200px] 2md:hidden" />
									)}
								</React.Fragment>
							)
						})}
					</div>
				</aside>
			</div>
			<section id="service" className="w-full bg-slate-200/30">
				<div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1
							className={`${rubik.className} text-xl font-extrabold text-secondary-foreground sm:text-2xl md:text-3xl`}
						>
							<span className="text-primary">Services</span> we offer
						</h1>
						<p className="mt-2 text-base text-slate-700 md:text-lg">We provide the best services for our customers.</p>
					</div>
					<CompanyServiceTabs services={marketingConfig.services} />
				</div>
			</section>
			<section id="client" className="w-full bg-background">
				<div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1
							className={`${rubik.className} text-xl font-extrabold text-secondary-foreground sm:text-2xl md:text-3xl`}
						>
							Our <span className="text-primary">clients</span>
						</h1>
						<p className="mt-2 text-base text-slate-700 md:text-lg">
							We did a great job with these companies. You can be the next to work with us!
						</p>
					</div>
					<CompanyClientCarousel clients={marketingConfig.clients} />
				</div>
			</section>
			<section id="project" className="w-full bg-muted/30 px-10">
				<div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className={`${rubik.className} text-xl font-extrabold sm:text-2xl md:text-3xl`}>
							Our success <span className="text-primary">stories</span>
						</h1>
						<p className="mt-2 text-base md:text-lg">
							Check out some of our featured projects we have done and currently working on.
						</p>
					</div>
					<React.Suspense
						fallback={
							<div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
								{Array.from({ length: 3 }).map((_, index) => {
									return <CompanyProjectCarouselSkeleton key={index} />
								})}
							</div>
						}
					>
						<CompanyProjectCarousel projects={postsSortedByDate} />
					</React.Suspense>
				</div>
			</section>
			<section id="get-in-touch" className="w-full bg-background">
				<div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-7 sm:px-6 lg:px-8">
					<div className="prose prose-sm w-full max-w-none sm:prose-base">
						<div className="grid grid-cols-6 gap-6">
							{getInTouch.map((item) => {
								return (
									<div key={item.id} className="col-span-6 flex flex-col rounded bg-muted p-6 lg:col-span-2">
										<h3 className="mt-0!">{item.siteName}</h3>
										<p>{item.address}</p>
										<div className="mt-auto flex">
											<span>Phone:</span>
											<a
												href={`tel:${item.phone}`}
												className="ml-2 inline-block rounded no-underline hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-2 focus:outline-offset-4 focus:outline-primary focus:outline-dashed"
											>
												{item.phone}
											</a>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}
