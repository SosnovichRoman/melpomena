import { ICartPoster, ICartRecord } from '@/types/cart.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
	cartList: ICartRecord[]
	add: (cartPoster: ICartPoster) => void
	delete: (cartPoster: ICartPoster) => void
	update: (cartPoster: ICartPoster, quantity: number) => void
}

const useCartStore = create<Store>()(
	persist(
		(set) => ({
			cartList: [],
			add: (cartPoster: ICartPoster) =>
				set((state) => {
					const newState = {
						cartList: [...state.cartList, { cartPoster, quantity: 1 }],
					}
					return newState
				}),

			delete: (cartPoster: ICartPoster) =>
				set((state) => {
					const newState = {
						cartList: state.cartList.filter(
							(record) =>
								!(
									record.cartPoster._id == cartPoster._id &&
									record.cartPoster.dimensionId == cartPoster.dimensionId &&
									record.cartPoster.frameId == cartPoster.frameId
								)
						),
					}
					return newState
				}),

			update: (cartPoster: ICartPoster, quantity: number) =>
				set((state) => {
					const newState = {
						cartList: state.cartList.map((record) => {
							if (record.cartPoster._id == cartPoster._id)
								return { cartPoster, quantity }
							return record
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
