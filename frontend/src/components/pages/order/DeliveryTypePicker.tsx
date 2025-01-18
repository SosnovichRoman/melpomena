import { Button } from '@/components/ui/button'
import { deliveryTypes } from '@/constants/delivery-types'
import useOrderStore from '@/stores/order.store'
import { Control, Controller } from 'react-hook-form'
import { formType } from './OrderPage'

export default function DeliveryTypePicker({
	control,
	className,
}: {
	control: Control<formType, any>
	className?: string
}) {
	const { deliveryType, setDeliveryType } = useOrderStore()
	return (
		<div className={className}>
			<h3 className='heading-3 text-main'>Способ доставки</h3>
			<Controller
				control={control}
				name='deliveryType'
				defaultValue={deliveryType.name}
				render={({ field: { onChange, value } }) => (
					<div className={`mt-6 grid md:grid-cols-2 gap-x-10 gap-y-5`}>
						{deliveryTypes.map((type) => (
							<Button
								type='button'
								key={type.name}
								size={'xl'}
								variant={value == type.name ? 'default' : 'outline'}
								onClick={() => {
									onChange(type.name)
									setDeliveryType(type)
								}}
							>
								{type.name}
							</Button>
						))}
					</div>
				)}
			/>
		</div>
	)
}
