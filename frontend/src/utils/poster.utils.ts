import { ICartPosterFull, IPosterFull } from '@/types/poster.types'

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
	calculateCartPosterPrice(cartPosterFull: ICartPosterFull, quantity: number) {
		const dimensionPrice = cartPosterFull.dimension.price
		const framePrice = cartPosterFull.frame.price
		const posterPrice = dimensionPrice + framePrice
		const fullPrice = posterPrice * quantity
		return fullPrice
	}
}

export default new PosterUtils()
