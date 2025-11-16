import React from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Skeleton } from '@/components/ui/skeleton'

export default function PostLoading() {
	return (
		<React.Fragment>
			<div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
				<div className="py-8">
					<AspectRatio ratio={16 / 9}>
						<Skeleton className="size-full" />
					</AspectRatio>
					<Skeleton className="mt-8 h-6 w-40" />
					<div className="mt-8 space-y-2">
						{Array.from({ length: 3 }).map((_, i) => (
							<Skeleton key={i} className="h-4 w-full" />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
