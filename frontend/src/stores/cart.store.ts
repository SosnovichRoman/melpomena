import { ICartPosterSave, ICartRecordSave } from '@/types/cart.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
	cartList: ICartRecordSave[]
	add: (cartPoster: ICartPosterSave) => void
	delete: (cartPoster: ICartPosterSave) => void
	update: (cartPoster: ICartPosterSave, quantity: number) => void
	reset: () => void
}

const useCartStore = create<Store>()(
	persist(
		(set) => ({
			cartList: [],
			add: (cartPoster: ICartPosterSave) =>
				set((state) => {
					const newState = {
						cartList: [...state.cartList, { cartPoster, quantity: 1 }],
					}
					return newState
				}),

			delete: (cartPoster: ICartPosterSave) =>
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

			update: (cartPoster: ICartPosterSave, quantity: number) =>
				set((state) => {
					const newState = {
						cartList: state.cartList.map((record) => {
							if (
								record.cartPoster._id == cartPoster._id &&
								record.cartPoster.dimensionId == cartPoster.dimensionId &&
								record.cartPoster.frameId == cartPoster.frameId
							)
								return { cartPoster, quantity }
							return record
						}),
					}
					return newState
				}),

			reset: () => set(() => ({ cartList: [] })),
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export default useCartStore
