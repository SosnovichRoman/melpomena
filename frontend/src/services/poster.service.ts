import { client } from '@/sanity/client'
import { PosterBySlug, PostersByCategoryQuery } from '@/sanity/queries'
import { IPosterFull, IPosterShort } from '@/types/poster.types'

class PosterService {
	async getAllByCategory(category: string) {
		const response = await client.fetch<IPosterShort[]>(
			PostersByCategoryQuery(category)
		)
		return response
	}
	async getBySlug(slug: string) {
		const response = await client.fetch<IPosterFull>(PosterBySlug(slug))
		return response
	}
}

export default new PosterService()
