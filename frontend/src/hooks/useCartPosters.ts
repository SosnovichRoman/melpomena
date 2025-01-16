import posterService from '@/services/poster.service'
import useCartStore from '@/stores/cart.store'
import { ICartRecord } from '@/types/cart.types'
import { useQuery } from '@tanstack/react-query'

export default function useCartPosters() {
	const { cartList } = useCartStore()
	const { data, isLoading, isError, error } = useQuery({
		// TODO: могут быть проблемы с производительностью
		queryKey: ['cart-list', cartList.length],
		queryFn: async () => {
			// Загружаю все постеры по id в корзине
			const response = await posterService.getAllByCart(cartList)
			return response
		},
	})

	// Объединяю загруженные постеры с их количеством в корзине
	const cartRecords = data?.map<ICartRecord>((dataItem) => ({
		cartPoster: dataItem,
		quantity:
			cartList.find(
				(item) =>
					dataItem._id == item.cartPoster._id &&
					dataItem.dimension._id == item.cartPoster.dimensionId &&
					dataItem.frame._id == item.cartPoster.frameId
			)?.quantity || 1,
	}))

	return { cartRecords, isLoading, isError, error }
}
