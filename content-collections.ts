import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

import { postsSchema } from '@/lib/validations/content'

const posts = defineCollection({
	name: 'posts',
	directory: 'src/content/posts',
	include: '**/*.md',
	schema: postsSchema,
	transform: async (document, context) => {
		const html = await compileMarkdown(context, document)
		const slug = document._meta.path.toLowerCase().replace(/ /g, '-')
		const createdAt = new Date(document.date)

		return { ...document, slug, createdAt, html }
	},
})

export default defineConfig({
	collections: [posts],
})
