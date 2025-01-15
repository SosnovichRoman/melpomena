import { client } from '@/sanity/client'
import { CategoryBySlug } from '@/sanity/queries'

class CategoryService {
	async getBySlug(slug: string) {
		const response = await client.fetch<{ name: string; slug: string }>(
			CategoryBySlug(slug)
		)
		return response
	}
}

export default new CategoryService()
