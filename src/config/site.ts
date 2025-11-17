import { MainNavigationItem } from '@/types'

export const siteConfig = {
	name: 'Cerindo',
	description:
		'Streamline your global logistics with ease. Experience, efficient and transparent logistics solutions for your business.',
	url: 'https://www.cerindo.co.id',
	ogImage: 'https://www.cerindo.co.id/opengraph-image.png',
	links: {
		github: 'https://github.com/cerind0dev/cerindo-www',
	},
	mainNav: [
		{
			title: 'Lobby',
			items: [
				{
					title: 'home',
					href: '/',
					items: [],
				},
				{
					title: 'company',
					href: '/company',
					items: [],
				},
				{
					title: 'FAQ',
					href: '/faq',
					items: [],
				},
				{
					title: 'get in touch',
					href: '/get-in-touch',
					items: [],
				},
			],
		},
	] satisfies MainNavigationItem[],
}

export type SiteConfig = typeof siteConfig
