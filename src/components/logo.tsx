import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import logo from '../../public/images/cerindo_bintang_logo.svg'

type LogoProps = {
	source?: string
	link?: string
}

function Logo({ source, link = '/', className, ...props }: LogoProps & React.HTMLAttributes<HTMLAnchorElement>) {
	const imageSrc = source || logo

	return (
		<Link href={link} className={cn(className)} {...props}>
			<Image src={imageSrc} className="inline-block h-6 w-auto" alt="Logo" />
			<span className="sr-only">Home</span>
		</Link>
	)
}

export default Logo
