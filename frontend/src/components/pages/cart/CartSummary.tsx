import { Button } from '@/components/ui/button'
import useCartPosters from '@/hooks/useCartPosters'
import useCartStore from '@/stores/cart.store'
import useOrderStore from '@/stores/order.store'
import cartUtils from '@/utils/cart.utils'
import posterUtils from '@/utils/poster.utils'

const CartSummary = ({
	className,
	isCartPage = true,
}: // handleSubmit,
{
	className?: string
	isCartPage?: boolean
	// handleSubmit?: Function
}) => {
	const { cartRecords } = useCartPosters()
	const { cartList } = useCartStore()
	const { deliveryType } = useOrderStore()
	const totalQuantity = cartUtils.getTotalQuantity(cartList)
	const totalPrice =
		cartRecords
			?.map((cartRecord) =>
				posterUtils.calculateCartPosterPrice(
					cartRecord.cartPoster,
					cartRecord.quantity
				)
			)
			.reduce((acc, quantity) => acc + quantity, 0) || 0
	const orderPrice = totalPrice + deliveryType.price

	return (
		<div
			className={`space-y-4 flex flex-col md:p-6 p-4 border-2 border-solid rounded-[5px] bg-white h-fit ${className}`}
		>
			<h3 className='heading-3 text-main'>Ваш заказ</h3>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body'>Товаров:</span>
				<span className='heading-4'>{totalQuantity}</span>
			</div>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body'>Стоимость товаров:</span>
				<span className='heading-4'>{totalPrice} BYN</span>
			</div>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body'>Стоимость доставки:</span>
				<span className='heading-4'>
					{deliveryType.price == 0 ? 'Бесплатно' : `${deliveryType.price} руб`}
				</span>
			</div>
			<div className='flex justify-between gap-5 heading-3'>
				<span>Итого:</span>
				<span>{orderPrice} BYN</span>
			</div>
			{isCartPage ? (
				<Button type='button' asChild size={'xl'}>
					<a href='/order'>Перейти к оформлению</a>
				</Button>
			) : (
				<Button type='submit' size={'xl'}>
					Оформить заказ
				</Button>
			)}
		</div>
	)
}

export default CartSummary
