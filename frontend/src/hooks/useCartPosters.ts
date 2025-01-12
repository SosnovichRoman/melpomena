import posterService from '@/services/poster.service'
import useCartStore from '@/stores/cart.store'
import { ICartPoster } from '@/types/poster.types'
import { useQuery } from '@tanstack/react-query'

export default function useCartPosters() {
	const { cartList } = useCartStore()
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['cart-list', cartList], // TODO: могут быть проблемы с производительностью (постоянные запросы при изменении колва КАЖДОГО товара)
		queryFn: async () => {
			// Загружаю все постеры по id в корзине
			const response = await posterService.getAllByIds(
				cartList.map((item) => item._id)
			)
			return response
		},
		select: (data) => {
			// Совмещаю загруженные постеры с их количеством
			const cartPosters = data.map<ICartPoster>((dataItem) => ({
				...dataItem,
				quantity:
					cartList.find((item) => dataItem._id == item._id)?.quantity || 1,
			}))
			return cartPosters
		},
	})

	return { cartPosters: data, isLoading, isError, error }
}
