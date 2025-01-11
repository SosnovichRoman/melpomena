import cartService from '@/services/cart.service'
import posterService from '@/services/poster.service'
import { ICartPoster } from '@/types/poster.types'
import { useQuery } from '@tanstack/react-query'

export default function useCartPosters() {
	const cartList = cartService.getAll()
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['cart-list'],
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
