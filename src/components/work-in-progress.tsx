import React from 'react'

import { rubik } from '@/config/font'

const WorkInProgress = () => {
	return (
		<div className="mx-4 my-auto flex h-full flex-col items-center justify-center text-center">
			<h1 className={`${rubik.className} text-5xl font-semibold 2md:text-6xl`}>Work in progress</h1>
			<p className="mt-4 text-lg font-normal text-slate-700">We are still working on this page</p>
		</div>
	)
}

export default WorkInProgress
