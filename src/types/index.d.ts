export type NavigationItem = {
	title: string
	href?: string
	disabled?: boolean
	icon?: keyof typeof Icons
}

export interface NavigationItemWithChildren extends NavigationItem {
	items: NavigationItemWithChildren[]
}

export interface NavigationItemWithOptionalChildren extends NavigationItem {
	items?: NavigationItemWithChildren[]
}

export type MainNavigationItem = NavigationItemWithOptionalChildren

export type SidebarNavigationItem = NavigationItemWithChildren

export type CompanyServiceItem = {
	id: text
	title: string
	description: string
	images: string
	benefits: { text: string }[]
}
