import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'

import { PlaceholderImage } from '@/components/placeholder-image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import type { Post } from '.content-collections/generated'

interface PostCardProps {
	post: Post
	index: number
}

export function PostCard({ post, index }: PostCardProps) {
	return (
		<Link key={post._meta.path} href={`blog/${post._meta.path}`}>
			<span className="sr-only">{post.title}</span>
			<article className="space-y-4">
				<AspectRatio ratio={16 / 9}>
					{post.image ? (
						<Image
							src={post.image}
							alt={post.title}
							fill
							sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
							className="rounded-lg object-cover"
							priority={index <= 1}
						/>
					) : (
						<PlaceholderImage asChild />
					)}
				</AspectRatio>
				<div className="space-y-2">
					<CardHeader className="space-y-2.5 p-0">
						<CardTitle className="line-clamp-1 leading-5">{post.title}</CardTitle>
						<CardDescription className="line-clamp-2">{post.description}</CardDescription>
					</CardHeader>
					<CardDescription>{formatDate(post.date)}</CardDescription>
				</div>
			</article>
		</Link>
	)
}
