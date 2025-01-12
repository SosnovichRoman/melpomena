import cartService from '@/services/cart.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteCartItem() {
	const client = useQueryClient()
	const { mutate, status } = useMutation({
		mutationKey: ['cart-list'],
		mutationFn: async (_id: string) => await cartService.delete(_id),
		onSuccess: () => client.invalidateQueries({ queryKey: ['cart-list'] }),
	})
	return { deleteCartItem: mutate, status }
}
