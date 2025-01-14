import { ICartItem } from '@/types/cart.types'

class CartUtils {
	isInCart(_id: string, cartList: ICartItem[] | undefined) {
		if (cartList) return cartList.find((item) => item._id == _id) ? true : false
		else return false
	}
	getTotalQuantity(cartList: ICartItem[] | undefined) {
		if (cartList)
			return cartList
				.map((cartItem) => cartItem.quantity)
				.reduce((acc, quantity) => acc + quantity, 0)
		else return 0
	}
}

export default new CartUtils()
