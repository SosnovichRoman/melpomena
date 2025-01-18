import orderService from '@/services/order.service'
import useCartStore from '@/stores/cart.store'
import { IOrderBody } from '@/types/order.types'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from './use-toast'

export default function useMakeOrder() {
	const { toast, dismiss, toasts } = useToast()
	const router = useRouter()
	const resetCart = useCartStore((store) => store.reset)

	const { mutate, isPending, isError } = useMutation({
		mutationKey: ['order'],
		mutationFn: async (orderBody: IOrderBody) =>
			await orderService.post(orderBody),
		onMutate: () => {
			toast({
				description: (
					<div className='flex gap-5 items-center'>
						<LoaderCircle className='animate-spin' size={24} />
						<p className='text-sm'>Отправка данных...</p>
					</div>
				),
				duration: 5000,
			})
		},
		onSuccess: () => {
			resetCart() // Сбрасываю корзину
			dismiss(toasts[0].id) // Закрываю тостер отправки данных
			router.push('/order-done')
		},
		onError: () => {
			toast({
				variant: 'destructive',
				description: (
					<p className='text-sm'>
						Произошла ошибка во время оформления заказа.
					</p>
				),
				duration: 5000,
			})
		},
	})

	return { mutate, isPending, isError }
}
