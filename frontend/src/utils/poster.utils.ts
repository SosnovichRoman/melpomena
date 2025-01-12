import { IPosterFull } from '@/types/poster.types'

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
}

export default new PosterUtils()
