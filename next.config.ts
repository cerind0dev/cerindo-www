import { withContentCollections } from '@content-collections/next'

import type { NextConfig } from 'next'

import './src/env.ts'

const nextConfig: NextConfig = {
	/* config options here */
}

export default withContentCollections(nextConfig)

