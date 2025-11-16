import { MetadataRoute } from 'next'

import { allPosts } from 'content-collections'

import { absoluteUrl } from '@/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postsRoutes = allPosts.map((post) => {
		return {
			url: absoluteUrl(`/blog/${post._meta.path}`),
			lastModified: new Date().toISOString(),
		}
	})

	const routes = ['', '/company', '/faq', '/get-in-touch', '/blog'].map((route) => ({
		url: absoluteUrl(route),
		lastModified: new Date().toISOString(),
	}))

	return [...routes, ...postsRoutes]
}
