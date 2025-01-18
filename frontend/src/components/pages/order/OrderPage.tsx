'use client'
import useCartPosters from '@/hooks/useCartPosters'
import useCartStore from '@/stores/cart.store'
import useOrderStore from '@/stores/order.store'
import cartUtils from '@/utils/cart.utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import CartEmpty from '../cart/CartEmpty'
import CartSummary from '../cart/CartSummary'
import ContactInfo from './ContactInfo'
import DeliveryCourier from './DeliveryCourier'
import DeliverySelf from './DeliverySelf'
import DeliveryTypePicker from './DeliveryTypePicker'
import OrderHeader from './OrderHeader'

export type formType = {
	name: string
	surname: string
	phone: string
	deliveryType: string
	deliveryDate: Date
	deliveryTime?: string
	deliveryAddress?: string
}

export default function OrderPage() {
	const { deliveryType } = useOrderStore()
	const { cartRecords } = useCartPosters()
	const { cartList } = useCartStore()
	const totalQuantity = cartUtils.getTotalQuantity(cartList)
	const {
		register,
		handleSubmit,
		control,
		// formState: { isValid, isSubmitting },
	} = useForm<formType>()

	const onSubmit: SubmitHandler<formType> = (data) => {
		fetch('/api/order', {
			method: 'POST',
			body: JSON.stringify({
				orderInfo: data,
				cartList: cartRecords,
				deliveryType: deliveryType,
			}),
		})
	}

	if (totalQuantity == 0)
		return (
			<main>
				<OrderHeader />
				<CartEmpty />
			</main>
		)

	return (
		<main>
			<OrderHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<section className='pb-10'>
					<div className='container grid lg:grid-cols-12 gap-10 mt-12'>
						<div className='lg:col-span-7'>
							<ContactInfo register={register} />
							<DeliveryTypePicker className='mt-12' control={control} />
							{deliveryType.name == 'Самовывоз' ? (
								<DeliverySelf control={control} className='mt-12' />
							) : (
								<DeliveryCourier
									control={control}
									register={register}
									className='mt-12'
								/>
							)}
						</div>
						<CartSummary isCartPage={false} className='lg:col-span-5' />
					</div>
				</section>
			</form>
		</main>
	)
}
