import { ICartItem } from '@/types/cart.types'

class CartUtils {
	isInCart(_id: string, cartList: ICartItem[] | undefined) {
		if (cartList) return cartList.find((item) => item._id == _id) ? true : false
		else return false
	}
}

export default new CartUtils()
