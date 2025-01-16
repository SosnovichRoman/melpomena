'use client'

import useCartPosters from '@/hooks/useCartPosters'
import useCartStore from '@/stores/cart.store'
import CartPoster from './CartPoster'
import CartSummary from './CartSummary'

const CartPage = () => {
	const { cartRecords } = useCartPosters()
	const { cartList } = useCartStore()
	console.log('cr:', cartRecords)
	console.log('cl:', cartList)

	return (
		<main>
			<section className=''>
				<div className='container py-[90px]'>
					<h1 className='heading-2 grow border-b-2 border-solid border-main-3'>
						Корзина
					</h1>
					<div className='grid grid-cols-12 gap-[30px] mt-[50px]'>
						<div className='col-span-7 space-y-10'>
							{cartRecords?.map((cartRecord) => (
								<CartPoster
									key={
										cartRecord.cartPoster._id +
										cartRecord.cartPoster.dimension._id +
										cartRecord.cartPoster.frame._id
									}
									cartRecord={cartRecord}
								/>
							))}
						</div>
						<CartSummary />
					</div>
				</div>
			</section>
		</main>
	)
}

export default CartPage
