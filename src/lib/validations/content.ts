import { z } from 'zod'

export const postsSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.string(),
	date: z.string(),
	authors: z.array(z.string()),
})
