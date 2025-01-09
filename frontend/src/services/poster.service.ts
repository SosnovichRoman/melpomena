import { client } from '@/sanity/client'
import { PostersByCategoryQuery } from '@/sanity/queries'
import IPosterShort from '@/types/poster.types'

class PosterService {
	async getAllByCategory(category: string) {
		const response = await client.fetch<IPosterShort[]>(
			PostersByCategoryQuery(category)
		)
		return response
	}
}

export default new PosterService()
