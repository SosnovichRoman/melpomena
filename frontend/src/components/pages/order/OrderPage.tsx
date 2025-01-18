'use client'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import useCartPosters from '@/hooks/useCartPosters'
import useOrderStore from '@/stores/order.store'
import { SubmitHandler, useForm } from 'react-hook-form'
import CartSummary from '../cart/CartSummary'
import ContactInfo from './ContactInfo'
import DeliveryCourier from './DeliveryCourier'
import DeliverySelf from './DeliverySelf'
import DeliveryTypePicker from './DeliveryTypePicker'

export type formType = {
	name: string
	surname: string
	phone: string
	deliveryType: string
	deliveryDate: Date
	deliveryTime?: string
	deliveryAddress?: string
	// deliveryCommentary?: string
}

export default function OrderPage() {
	const { deliveryType } = useOrderStore()
	const { cartRecords } = useCartPosters()
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

	return (
		<main>
			<section>
				<div className='container'>
					<Breadcrumb className=' py-10'>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink className='link' href='/'>
									Главная
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Оформление заказа</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<section className=''>
					<div className='container pb-20'>
						<h1 className='heading-2 border-b-2 border-solid'>
							Оформление заказа
						</h1>
						<div className='grid lg:grid-cols-12 gap-10 mt-12'>
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
					</div>
				</section>
			</form>
		</main>
	)
}
