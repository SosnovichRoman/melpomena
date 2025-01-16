import { client } from '@/sanity/client'
import {
	PopularPostersQuery,
	PosterByCartQuery,
	PosterBySlug,
	PostersByCategoriesQuery,
	PostersByCategoryQuery,
} from '@/sanity/queries'
import { ICartRecord } from '@/types/cart.types'
import {
	ICartPosterFull,
	IPosterFull,
	IPosterShort,
} from '@/types/poster.types'

class PosterService {
	async getAllByCategory(category: string) {
		const response = await client.fetch<IPosterShort[]>(
			PostersByCategoryQuery(category)
		)
		return response
	}
	async getPopularPosters() {
		const response = await client.fetch<IPosterShort[]>(PopularPostersQuery())
		return response
	}
	async getByCategories(categories: string[]) {
		const response = await client.fetch<IPosterShort[]>(
			PostersByCategoriesQuery(categories)
		)
		return response
	}
	async getAllByCart(cartList: ICartRecord[]) {
		const response = await Promise.all(
			cartList.map((cartRecord) =>
				client.fetch<ICartPosterFull>(PosterByCartQuery(cartRecord.cartPoster))
			)
		)
		return response
	}
	async getBySlug(slug: string) {
		const response = await client.fetch<IPosterFull>(PosterBySlug(slug))
		return response
	}
}

export default new PosterService()
