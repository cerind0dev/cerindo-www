import React from 'react'

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

type EntryLayoutProps = {
	children: React.ReactNode
}

export default async function EntryLayout({ children }: EntryLayoutProps) {
	return (
		<div className="flex min-h-full flex-col">
			<Header />
			<main className="flex flex-1 flex-col">{children}</main>
			<Footer />
		</div>
	)
}
