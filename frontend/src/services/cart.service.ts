import { ICartItem } from '@/types/cart.types'

class CartService {
	private CART_LIST_KEY = 'cart-list'
	getAll() {
		const cartList: ICartItem[] = JSON.parse(
			localStorage.getItem(this.CART_LIST_KEY) || '[]'
		)
		return cartList
	}
	save(cartList: ICartItem[]) {
		localStorage.setItem(this.CART_LIST_KEY, JSON.stringify(cartList))
	}
}

export default new CartService()
