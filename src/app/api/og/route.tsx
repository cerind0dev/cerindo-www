import { ImageResponse } from 'next/og'

import { env } from '@/env'

import { cn } from '@/lib/utils'
import { ogImageSchema } from '@/lib/validations/og'

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const url = new URL(req.url)

	try {
		const rubikBold = await fetch(new URL('/fonts/Rubik-Bold.ttf', env.NEXT_PUBLIC_APP_URL)).then((result) =>
			result.arrayBuffer(),
		)
		const interSemiBold = await fetch(new URL('/fonts/Inter_18pt-SemiBold.ttf', env.NEXT_PUBLIC_APP_URL)).then((res) =>
			res.arrayBuffer(),
		)

		const parsedValues = ogImageSchema.parse(Object.fromEntries(url.searchParams))

		const { mode, title, description, type } = parsedValues

		return new ImageResponse(
			(
				<div
					tw="flex size-full flex-col items-center justify-center"
					style={{
						color: mode === 'dark' ? '#fff' : '#000',
						background: mode === 'dark' ? '#09090b' : '#ffffff',
					}}
				>
					<div
						tw="flex max-w-4xl flex-col items-center justify-center"
						style={{
							whiteSpace: 'pre-wrap',
						}}
					>
						{type ? <div tw="px-8 text-xl font-medium uppercase leading-tight tracking-tight">{type}</div> : null}
						<h1
							tw={cn(
								'px-8 text-6xl font-bold leading-tight tracking-tight',
								mode === 'dark' ? 'text-zinc-100' : 'text-zinc-800',
							)}
							style={{
								fontFamily: 'Rubik-Bold',
							}}
						>
							{title}
						</h1>
						{description ? (
							<p
								tw={cn(
									'px-20 text-center text-3xl font-normal leading-tight tracking-tight',
									mode === 'dark' ? 'text-zinc-400' : 'text-zinc-500',
								)}
								style={{
									fontFamily: 'Inter',
								}}
							>
								{description}
							</p>
						) : null}
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: 'Rubik-Bold',
						data: rubikBold,
						style: 'normal',
					},
					{
						name: 'Inter',
						data: interSemiBold,
						style: 'normal',
					},
				],
			},
		)
	} catch (error) {
		error instanceof Error ? console.log(`${error.message}`) : console.log(error)
		return new Response(`Failed to generate the image`, {
			status: 500,
		})
	}
}
