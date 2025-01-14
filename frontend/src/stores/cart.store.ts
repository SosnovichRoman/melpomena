import { ICartItem } from '@/types/cart.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
	cartList: ICartItem[]
	add: (_id: string) => void
	delete: (_id: string) => void
	update: (_id: string, quantity: number) => void
}

const useCartStore = create<Store>()(
	persist(
		(set) => ({
			cartList: [],
			add: (_id: string) =>
				set((state) => {
					const newState = {
						cartList: [...state.cartList, { _id, quantity: 1 }],
					}
					return newState
				}),

			delete: (_id: string) =>
				set((state) => {
					const newState = {
						cartList: state.cartList.filter((item) => item._id != _id),
					}
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
					return newState
				}),
		}),
		{
			name: 'cart-storage', // name of the item in the storage (must be unique)
			storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
		}
	)
)

export default useCartStore
