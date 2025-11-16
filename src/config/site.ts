import { MainNavigationItem } from '@/types'

export const siteConfig = {
	name: 'cerindo',
	description:
		'Streamline your global logistics with ease. Experience, efficient and transparent logistics solutions for your business.',
	url: 'https://by5071.com',
	ogImage: 'https://by5071.com/opengraph-image.png',
	links: {
		github: 'https://github.com/panduananto/cerindo-www',
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
