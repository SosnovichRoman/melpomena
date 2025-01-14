'use client'
import { ICartItem } from '@/types/cart.types'

class CartService {
	private CART_LIST_KEY = 'cart-list'
	getAll() {
		let cartList: ICartItem[] = []
		if (typeof window !== 'undefined')
			cartList = JSON.parse(
				window?.localStorage.getItem(this.CART_LIST_KEY) || '[]'
			)
		return cartList
	}
	save(cartList: ICartItem[]) {
		if (typeof window !== 'undefined')
			window?.localStorage.setItem(this.CART_LIST_KEY, JSON.stringify(cartList))
	}
}

export default new CartService()
