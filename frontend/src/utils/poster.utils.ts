import { ICartPoster, IPosterFull } from '@/types/poster.types'

class PosterUtils {
	calculatePosterPrice(
		poster: IPosterFull,
		selectedDimention: number,
		selectedFrame: number
	) {
		const dimensionPrice = poster.dimensions[selectedDimention]?.price
		const framePrice = poster.frames[selectedFrame]?.price
		const price = dimensionPrice + framePrice
		return price
	}
	calculateCartPosterPrice(cartPoster: ICartPoster, quantity: number) {
		const dimensionPrice = cartPoster.dimension.price
		const framePrice = cartPoster.frame.price
		const posterPrice = dimensionPrice + framePrice
		const fullPrice = posterPrice * quantity
		return fullPrice
	}
}

export default new PosterUtils()
