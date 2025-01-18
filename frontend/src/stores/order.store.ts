import { deliveryTypes } from '@/constants/delivery-types'
import { create } from 'zustand'

export type deliveryType = { name: string; price: number }

type Store = {
	deliveryType: deliveryType
	setDeliveryType: (deliveryType: deliveryType) => void
}

const useOrderStore = create<Store>()((set) => ({
	deliveryType: deliveryTypes[0],
	setDeliveryType: (deliveryType) =>
		set((state) => ({ ...state, deliveryType: deliveryType })),
}))

export default useOrderStore
