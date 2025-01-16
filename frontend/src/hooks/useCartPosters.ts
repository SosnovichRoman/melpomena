import posterService from '@/services/poster.service'
import useCartStore from '@/stores/cart.store'
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
		// select: (data) => {
		// 	// Совмещаю загруженные постеры с их количеством (можно в теории вынести в сервис...)
		// 	const cartPosters = data.map<ICartPosterFull>((dataItem) => ({
		// 		...dataItem,
		// 		quantity:
		// 			cartList.find((item) => dataItem._id == item.cartPoster._id)
		// 				?.quantity || 1,
		// 	}))
		// 	return cartPosters
		// },
	})

	return { cartPosters: data, isLoading, isError, error }
}
