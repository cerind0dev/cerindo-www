import { env } from '@/env'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
	return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function chunk<T>(array: T[], perChunk: number) {
	return array.reduce((acc: T[][], item: T, index: number) => {
		const chunkIndex = Math.floor(index / perChunk)

		if (!acc[chunkIndex]) {
			acc[chunkIndex] = []
		}

		acc[chunkIndex]?.push(item)

		return acc
	}, [])
}

export function formatDate(date: Date | string | number, opts: Intl.DateTimeFormatOptions = {}) {
	return new Intl.DateTimeFormat('en-US', {
		month: opts.month ?? 'long',
		day: opts.day ?? 'numeric',
		year: opts.year ?? 'numeric',
		...opts,
	}).format(new Date(date))
}

