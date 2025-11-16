import React from 'react'
import { Metadata } from 'next'

import { env } from '@/env'

import { rubik } from '@/config/font'
import { marketingConfig } from '@/config/marketing'

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Frequently asked questions',
	description: 'We are Cerindo',
}

export default async function FrequentlyAskedQuestionsPage() {
	const { frequentlyAskedQuestions } = marketingConfig

	return (
		<React.Fragment>
			<div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
				<div className="py-8">
					<PageHeader as={'div'}>
						<PageHeaderHeading className={`${rubik.className}`}>Frequently asked questions</PageHeaderHeading>
						<PageHeaderDescription>Here are some helpful information for our customers</PageHeaderDescription>
					</PageHeader>
					<section className="mt-8">
						{frequentlyAskedQuestions.map((faq, index) => {
							return (
								<Accordion
									key={`${faq.question.split(' ').join('-')}`}
									type="single"
									collapsible
									className="w-full space-y-4"
								>
									<AccordionItem value={faq.question}>
										<AccordionTrigger
											className={`${rubik.className} w-full text-lg font-medium hover:decoration-primary md:text-xl`}
										>
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-justify text-base md:text-lg">{faq.answer}</AccordionContent>
									</AccordionItem>
								</Accordion>
							)
						})}
					</section>
				</div>
			</div>
		</React.Fragment>
	)
}
