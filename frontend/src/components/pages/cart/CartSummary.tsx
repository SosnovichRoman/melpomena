import useCartPosters from '@/hooks/useCartPosters'
import useCartStore from '@/stores/cart.store'
import cartUtils from '@/utils/cart.utils'
import posterUtils from '@/utils/poster.utils'

const CartSummary = ({ className }: { className?: string }) => {
	const { cartRecords } = useCartPosters()
	const { cartList } = useCartStore()
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
	const orderPrice = totalPrice + 50

	return (
		<div
			className={`space-y-5 flex flex-col p-10 border-2 border-solid rounded-[5px] bg-white h-fit ${className}`}
		>
			<h3 className='heading-3 text-main'>Ваш заказ</h3>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body-sm'>Товаров:</span>
				<span className='text-body-lg font-semibold'>{totalQuantity}</span>
			</div>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body-sm'>Стоимость товаров:</span>
				<span className='text-body-lg font-semibold'>{totalPrice} BYN</span>
			</div>
			<div className='flex justify-between gap-5 items-baseline'>
				<span className='text-body-sm'>Стоимость доставки:</span>
				<span className='text-body-lg font-semibold'>
					Бесплатно
					{/* {orderInfo.deliveryType == 'Самовывоз'
						? 'Бесплатно'
						: `${DELIVERY_COST} BYN`} */}
				</span>
			</div>
			{/* <div className='flex text-body-sm gap-5'>
							<input className='input-lg grow' />
							<button className='button-main-sm'>Применить</button>
					</div> */}
			<div className='flex justify-between gap-5 heading-3'>
				<span>Итого:</span>
				<span>{orderPrice} BYN</span>
			</div>
			{/* {page == 'cart' ? (
				<button className='button-main-filled' onClick={() => setPage('order')}>
					Перейти к оформлению
				</button>
			) : (
				<button className='button-main-filled' onClick={makeOrder}>
					Оформить заказ
				</button>
			)} */}
		</div>
	)
}

export default CartSummary
