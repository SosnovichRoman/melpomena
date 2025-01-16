import { ICartPosterSave, ICartRecordSave } from '@/types/cart.types'

class CartUtils {
	isInCart(cartPoster: ICartPosterSave, cartList: ICartRecordSave[]) {
		return cartList.find(
			(cartRecord) =>
				cartRecord.cartPoster._id == cartPoster._id &&
				cartRecord.cartPoster.dimensionId == cartPoster.dimensionId &&
				cartRecord.cartPoster.frameId == cartPoster.frameId
		)
			? true
			: false
	}

	getTotalQuantity(cartList: ICartRecordSave[]) {
		return cartList
			.map((cartRecord) => cartRecord.quantity)
			.reduce((acc, quantity) => acc + quantity, 0)
	}
}

export default new CartUtils()
