'use client'

import Image from 'next/image'

import AutoScroll from 'embla-carousel-auto-scroll'

import { chunk, cn } from '@/lib/utils'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface CompanyClientCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	clients: {
		id: string
		name: string
		logo: string
	}[]
}

const CompanyClientCarousel = ({ clients, className, ...props }: CompanyClientCarouselProps) => {
	const chunked = chunk(clients, 2)

	return (
		<div aria-label="Company client carousel" className={cn('mt-6 w-full select-none md:mt-10', className)} {...props}>
			<div className="hidden 2md:grid 2md:grid-cols-12 2md:gap-x-4 2md:gap-y-7">
				{clients.map((client) => (
					<div
						key={`${client.id}-on-desktop`}
						className="group relative col-span-3 flex items-center justify-center rounded border border-slate-300/70 py-2 shadow-sm"
					>
						<Image
							src={client.logo}
							className="mx-auto inline h-[60px] w-[80%] bg-center object-center"
							alt={`${client.id} logo`}
							height="0"
							width="0"
						/>
					</div>
				))}
			</div>
			<div className="block 2md:hidden">
				<Carousel
					opts={{ loop: true, dragFree: true, watchDrag: true }}
					plugins={[AutoScroll({ startDelay: 50, speed: 1, playOnInit: true, stopOnInteraction: false })]}
				>
					<CarouselContent>
						{chunked.map((clients, index) => (
							<CarouselItem key={`swiper-slide-${index}`} className="basis-1/3 space-y-7">
								{clients.map((client) => (
									<div
										key={`${client.id}-on-mobile`}
										className="group relative flex items-center justify-center rounded border border-slate-300/70 py-2 shadow-sm"
									>
										<Image
											src={client.logo}
											className="mx-auto inline h-[60px] w-[80%] bg-center object-center"
											alt={`${client.name} logo`}
											width="0"
											height="0"
										/>
									</div>
								))}
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default CompanyClientCarousel
