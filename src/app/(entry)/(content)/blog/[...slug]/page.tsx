import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { env } from '@/env'
import { allPosts } from 'content-collections'

import { absoluteUrl, cn } from '@/lib/utils'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'

type PostPageProps = {
	params: {
		slug: string[]
	}
}

async function getPostFromParams(params: PostPageProps['params']) {
	const { slug } = await params
	const post = allPosts.find((post) => post.slug === slug.join('/'))

	if (!post) {
		return null
	}

	return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
	const post = await getPostFromParams(params)

	if (!post) {
		return {}
	}

	const url = env.NEXT_PUBLIC_APP_URL

	const ogUrl = new URL(`${url}/api/og`)
	ogUrl.searchParams.set('title', post.title)
	ogUrl.searchParams.set('type', 'Blog Post')

	return {
		metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
		title: post.title,
		description: post.description,
		authors: post.authors,
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: absoluteUrl(post.slug),
			images: [
				{
					url: ogUrl.toString(),
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.description,
			images: [ogUrl.toString()],
		},
	}
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
	return allPosts.map((post) => ({
		slug: Array.from(post.slug.split('/')),
	}))
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params)

	if (!post) {
		notFound()
	}

	return (
		<React.Fragment>
			<div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
				<Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }), 'mt-6 self-start')}>
					See all posts
					<span className="sr-only">See all posts</span>
				</Link>
				{post.image && (
					<AspectRatio ratio={16 / 9}>
						<Image src={post.image} alt={post.title} fill className="mt-10 rounded-md border bg-muted" priority />
					</AspectRatio>
				)}
				<div className="prose mt-0 max-w-none md:prose-lg md:mt-20 lg:prose-xl dark:prose-invert prose-a:underline prose-a:underline-offset-4">
					<div dangerouslySetInnerHTML={{ __html: post.html }} className="mt-20" />
				</div>
			</div>
		</React.Fragment>
	)
}
