import React from 'react'
import Link from 'next/link'

import { rubik } from '@/config/font'
import { cn } from '@/lib/utils'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogNotFound() {
	return (
		<React.Fragment>
			<div className="mx-4 my-auto flex h-full flex-col items-center justify-center text-center">
				<h1 className={`${rubik.className} text-5xl font-semibold 2md:text-6xl`}>Blog not found</h1>
				<p className="mt-4 text-lg font-normal text-slate-700">The blog you are looking for does not exist</p>
				<Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }), 'mt-6')}>
					Go back to blog
					<span className="sr-only">Go back to blog</span>
				</Link>
			</div>
		</React.Fragment>
	)
}
