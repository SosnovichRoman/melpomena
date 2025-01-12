import cartService from '@/services/cart.service'
import { ICartItem } from '@/types/cart.types'
import { create } from 'zustand'

type Store = {
	cartList: ICartItem[]
	add: (_id: string) => void
	delete: (_id: string) => void
	update: (_id: string, quantity: number) => void
}

const useCartStore = create<Store>()((set) => ({
	cartList: cartService.getAll(),
	add: (_id: string) =>
		set((state) => {
			const newState = {
				cartList: [...state.cartList, { _id, quantity: 1 }],
			}
			cartService.save(newState.cartList)
			return newState
		}),

	delete: (_id: string) =>
		set((state) => {
			const newState = {
				cartList: state.cartList.filter((item) => item._id != _id),
			}
			cartService.save(newState.cartList)
			return newState
		}),

	update: (_id: string, quantity: number) =>
		set((state) => {
			const newState = {
				cartList: state.cartList.map((item) => {
					if (item._id == _id) return { _id, quantity }
					return item
				}),
			}
			cartService.save(newState.cartList)
			return newState
		}),
}))

export default useCartStore
