import { createClient } from '@sanity/client'

export const client = createClient({
	projectId: 'b3q2ag62',
	dataset: 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})
