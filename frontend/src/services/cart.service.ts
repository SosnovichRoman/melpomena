import { ICartItem } from '@/types/cart.types'
import cartUtils from '@/utils/cart.utils'

class CartService {
	private CART_LIST_KEY = 'cart-list'
	getAll() {
		const cartList: ICartItem[] = JSON.parse(
			localStorage.getItem(this.CART_LIST_KEY) || '[]'
		)
		return cartList
	}
	add(_id: string) {
		const cartList = this.getAll()
		if (!cartUtils.isInCart(_id, cartList)) {
			cartList.push({ _id, quantity: 1 })
			localStorage.setItem(this.CART_LIST_KEY, JSON.stringify(cartList))
		}
	}
	delete(_id: string) {
		const cartList = this.getAll()
		const updatedCartList = cartList.filter((item) => item._id != _id)
		localStorage.setItem(this.CART_LIST_KEY, JSON.stringify(updatedCartList))
	}
	setQuantity(_id: string, quantity: number) {
		const cartList = this.getAll()
		const updatedCartList = cartList.map((item) => {
			if (item._id == _id) return { _id, quantity }
			return item
		})
		localStorage.setItem(this.CART_LIST_KEY, JSON.stringify(updatedCartList))
	}
}

export default new CartService()
