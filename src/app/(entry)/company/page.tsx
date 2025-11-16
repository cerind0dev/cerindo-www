import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { env } from '@/env'

import { rubik } from '@/config/font'

import { PageHeader, PageHeaderHeading } from '@/components/page-header'

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Company profile',
	description: 'We are Cerindo',
}

export default async function CompanyPage() {
	return (
		<React.Fragment>
			<div className="w-full">
				<header className="relative flex h-96 w-full items-center justify-start before:absolute before:inset-y-0 before:z-10 before:block before:size-full before:bg-black/40 md:h-[512px]">
					<div className="absolute z-0 size-full">
						<Image
							src="/images/sites/background/about_us_bg.webp"
							alt="Container storage site"
							fill
							priority
							className="bg-no-repeat object-cover object-center"
						/>
					</div>
				</header>
			</div>
			<section className="my-10 md:my-20">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 px-4 py-8 sm:px-6 md:gap-y-12 lg:px-8">
					<PageHeader as={'div'}>
						<PageHeaderHeading className={`${rubik.className} uppercase`} size={'lg'}>
							cerindo
						</PageHeaderHeading>
					</PageHeader>
					<div className="grid w-full max-w-none gap-x-10 md:grid-cols-2">
						<div className="prose text-justify text-base md:text-lg">
							<p>
								We are known as CERINDO. It is our corporate brand name under a group management of PT. Sinhadji Rakidjo
								Sindapati (SRS) as our holding company. The group focuses in logistics field, that covers customs
								brokerage, FCL/LCL consolidation, air/sea/multimoda transportation, domestic land/air/sea
								transportation, and warehousing. CERINDO has consolidated facilities and operation in order to be more
								efficient and competitive.
							</p>
							<p>CERINDO companies are officially registered as:</p>
							<ul>
								<li>
									<p>
										PT. CERINDO TRANSPORT LOGISTIK (CTL), were established in 2000, rendering customized services to
										suit the customer’s requirement since 2000. It is the official freight forwarder of PT. TELKOMSEL,
										the biggest mobile telecommunication company in Indonesia. CTL has been involved in solving import
										problems and has turned a lot of penalty threats into cost efficiency. Telkomsel ever since enjoying
										the highest rewards from customs authority, i.e. The Priority Lane Importer, one of our successful
										achievement dedicated to our valued customer.
									</p>
								</li>
								<li>
									<p>
										PT. CERINDO PRIMA LOGISTIK (CPL), were established in 2005, and has accomplished many shipment
										projects assigned by private companies, government institutions, and State-Owned Enterprises. Our
										projects experience varied from railroads to fiber optic cable, from general cargo to hazardous and
										explosive, from special and heavy vehicles to aircraft.
									</p>
								</li>
								<li>
									<p>
										PT. CERINDO GUNAWAN LINTAS, were founded in 2005 and started to provide domestic transportation
										services, including land (trucking), sea and air, to/from cities and remote areas in the territory
										of the Republic Indonesia. We are certified in handling and delivery of dangerous, hazardous,
										harmful cargos.
									</p>
								</li>
							</ul>
						</div>
						<div className="prose text-justify text-base md:text-lg">
							<p>
								CERINDO apprehends that the key success of transporting goods worldwide requires a solid and committed
								agency networks. With respect to this cumpolsary, we have been registered as a member of GLA (Global
								Logistics Association) since 2000. Consisting of seventy members all over the world, GLA –an
								International forwarding network - is an agency of international forwarders conducting roles as partners
								to support each other.
							</p>
							<p>
								CERINDO has an adaptable organization and system, competent experts and dedicated staff, reliable to the
								readiness of infrastructure, facilities, and tools to provide excellent services enabled by our IT
								system.
							</p>
							<p>
								CERINDO responds the challenge of global competition by developing capabilities from time to time, and
								be more and more confident to be your reliable partner in handling whatever cargo you have with the best
								care.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="w-full">
				<header className="relative flex h-96 w-full items-center justify-start before:absolute before:inset-y-0 before:z-10 before:block before:size-full before:bg-black/70 md:h-[512px]">
					<div className="absolute z-0 size-full">
						<Image
							src="/images/sites/background/cerindo_truck.webp"
							alt="Container storage site"
							fill
							className="bg-no-repeat object-cover object-center"
						/>
					</div>
				</header>
			</div>
			<section className="my-20">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 px-4 py-8 sm:px-6 md:gap-y-12 lg:px-8">
					<div className="w-full max-w-none">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 flex flex-col gap-y-4 rounded bg-muted p-6 lg:col-span-2">
								<h3 className={`${rubik.className} text-4xl leading-[1.6] font-semibold uppercase`}>vision</h3>
								<p className="text-lg text-slate-700">
									Becoming a professional Logistics Company that quickly grab every opportunity, providing a satisfying
									services for customers, in order to create a continuing business growth.
								</p>
							</div>

							<div className="col-span-6 flex flex-col gap-y-4 rounded bg-muted p-6 lg:col-span-2">
								<h3 className={`${rubik.className} text-4xl leading-[1.6] font-semibold uppercase`}>mission</h3>
								<p className="text-lg text-slate-700">
									Providing logistics services including freight forwarding, customs clearance, consultation,
									warehousing, cargo and courier both domestic and international, based on customers’ satisfaction.
								</p>
							</div>

							<div className="col-span-6 flex flex-col gap-y-4 rounded bg-muted p-6 lg:col-span-2">
								<h3 className={`${rubik.className} text-4xl leading-[1.6] font-semibold uppercase`}>culture</h3>
								<p className="text-lg text-slate-700">Upholding business ethic and a healthy competition.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}
