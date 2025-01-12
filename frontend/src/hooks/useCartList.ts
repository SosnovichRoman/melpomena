import cartService from '@/services/cart.service'
import { useQuery } from '@tanstack/react-query'

export default function useCartList() {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['cart-list'],
		queryFn: async () => cartService.getAll(),
	})

	return { cartList: data, isLoading, isError, error }
}
