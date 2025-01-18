'use client'

import NotFound from '@/components/widgets/not-found/NotFound'
import PageLoading from '@/components/widgets/page-loading/PageLoading'
import useCartPosters from '@/hooks/useCartPosters'
import useCartStore from '@/stores/cart.store'
import cartUtils from '@/utils/cart.utils'
import CartEmpty from './CartEmpty'
import CartHeader from './CartHeader'
import CartPoster from './CartPoster'
import CartSummary from './CartSummary'

const CartPage = () => {
	const { cartRecords, isLoading, isError } = useCartPosters()
	const { cartList } = useCartStore()
	const totalQuantity = cartUtils.getTotalQuantity(cartList)

	if (totalQuantity == 0)
		return (
			<main>
				<CartHeader />
				<CartEmpty />
			</main>
		)

	if (isLoading)
		return (
			<main>
				<CartHeader />
				<PageLoading />
			</main>
		)

	if (isError)
		return (
			<main>
				<CartHeader />
				<NotFound />
			</main>
		)

	return (
		<main>
			<CartHeader />
			<section className='pb-10'>
				<div className='container grid lg:grid-cols-12 gap-[30px] mt-[50px]'>
					<div className='lg:col-span-7 space-y-10'>
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
					<CartSummary className='lg:col-span-5' />
				</div>
			</section>
		</main>
	)
}

export default CartPage
