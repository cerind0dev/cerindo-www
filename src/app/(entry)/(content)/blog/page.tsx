import React from 'react'
import { Metadata } from 'next'

import { env } from '@/env'
import { allPosts } from 'content-collections'

import { rubik } from '@/config/font'

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'

import { PostCard } from './_components/post-card'

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Blog',
	description: 'Explore the latest news and updates from the community',
}

export default async function BlogPage() {
	const postsSortedByDate = allPosts.toSorted((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

	return (
		<React.Fragment>
			<div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
				<div className="py-8">
					<PageHeader as={'div'}>
						<PageHeaderHeading className={`${rubik.className}`}>Blog</PageHeaderHeading>
						<PageHeaderDescription>Explore the latest news and updates from the community</PageHeaderDescription>
					</PageHeader>
					<section className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{postsSortedByDate.map((post, index) => {
							return <PostCard key={post.slug} post={post} index={index} />
						})}
					</section>
				</div>
			</div>
		</React.Fragment>
	)
}
