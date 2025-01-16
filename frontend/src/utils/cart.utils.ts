import { ICartPoster, ICartRecord } from '@/types/cart.types'

class CartUtils {
	isInCart(cartPoster: ICartPoster, cartList: ICartRecord[]) {
		return cartList.find(
			(cartRecord) =>
				cartRecord.cartPoster._id == cartPoster._id &&
				cartRecord.cartPoster.dimensionId == cartPoster.dimensionId &&
				cartRecord.cartPoster.frameId == cartPoster.frameId
		)
			? true
			: false
	}

	getQuantity(cartPoster: ICartPoster, cartList: ICartRecord[]) {
		return (
			cartList.find(
				(cartRecord) =>
					cartRecord.cartPoster._id == cartPoster._id &&
					cartRecord.cartPoster.dimensionId == cartPoster.dimensionId &&
					cartRecord.cartPoster.frameId == cartPoster.frameId
			)?.quantity || 0
		)
	}

	getTotalQuantity(cartList: ICartRecord[]) {
		return cartList
			.map((cartRecord) => cartRecord.quantity)
			.reduce((acc, quantity) => acc + quantity, 0)
	}
}

export default new CartUtils()
