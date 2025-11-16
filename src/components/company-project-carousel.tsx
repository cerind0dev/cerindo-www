'use client'

import Image from 'next/image'
import Link from 'next/link'

import z from 'zod'

import { rubik } from '@/config/font'
import { cn } from '@/lib/utils'
import { postsSchema } from '@/lib/validations/content'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'

import { PlaceholderImage } from './placeholder-image'

type Projects = z.infer<typeof postsSchema> & { slug: string }

interface CompanyProjectCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	projects: Projects[]
}

const CompanyProjectCarousel = ({ projects, className, ...props }: CompanyProjectCarouselProps) => {
	return (
		<div
			aria-label="Company project carousel"
			className={cn('mt-6 w-full rounded-lg text-right md:mt-10', className)}
			{...props}
		>
			<Carousel opts={{ align: 'center' }} className="rounded-lg">
				<CarouselContent className="rounded-lg p-1">
					{projects.map((project, index) => {
						return (
							<CarouselItem
								key={project.slug}
								className={cn('relative rounded-lg transition-transform hover:scale-95 min-[1015px]:basis-5/12')}
							>
								<Link href={`/blog/${project.slug.toLowerCase()}`} className="rounded-lg">
									<Card className="h-full rounded-lg pt-0">
										<div className="rounded-lg">
											<AspectRatio ratio={16 / 9}>
												{project.image ? (
													<Image
														src={project.image}
														alt={project.title}
														fill
														sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
														className="rounded-t-lg object-cover"
														priority={index <= 2}
													/>
												) : (
													<PlaceholderImage className="rounded-b-none" asChild />
												)}
											</AspectRatio>
										</div>
										<CardHeader>
											<CardTitle className={`${rubik.className} truncate text-left font-bold`}>
												{project.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="pt-1.5 text-left text-sm leading-7 sm:text-sm sm:leading-7">
												{project.description}
											</p>
										</CardContent>
									</Card>
								</Link>
							</CarouselItem>
						)
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<Link
				href="/blog"
				className="mt-8 inline-block rounded no-underline hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-2 focus:outline-offset-4 focus:outline-primary focus:outline-dashed"
			>
				See more
			</Link>
		</div>
	)
}

interface CompanyProjectCarouselSkeletonProps extends React.ComponentPropsWithoutRef<typeof Card> {}

export function CompanyProjectCarouselSkeleton({ className, ...props }: CompanyProjectCarouselSkeletonProps) {
	return (
		<Card className={cn('mt-6 w-full rounded-lg text-right md:mt-10', className)} {...props}>
			<CardHeader className="border-b p-0">
				<AspectRatio ratio={4 / 3}>
					<PlaceholderImage className="rounded-none" isSkeleton asChild />
				</AspectRatio>
			</CardHeader>
			<CardContent className="space-y-2.5 p-4">
				<Skeleton className="h-4 w-1/2" />
			</CardContent>
			<CardFooter className="space-x-2 p-4 pt-1">
				<Skeleton className="h-8 w-full" />
			</CardFooter>
		</Card>
	)
}

export default CompanyProjectCarousel
