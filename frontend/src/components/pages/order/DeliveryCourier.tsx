import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Control, Controller, UseFormRegister } from 'react-hook-form'
import DeliveryDatePicker from './DeliveryDatePicker'
import { formType } from './OrderPage'

export default function DeliveryCourier({
	className,
	control,
	register,
}: {
	register: UseFormRegister<formType>
	control: Control<formType, any>
	className?: string
}) {
	return (
		<div className={className}>
			<h4 className='heading-3'>Доставка курьером</h4>
			<p className='text-body mt-6'>
				Доставка осуществляется только в пределах города Минска. Курьер позвонит
				перед доставкой. При необходимости, он может оставить заказ у двери,
				либо передать вам лично в руки.
			</p>
			<div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-6'>
				<label className='col-span-2'>
					<span className='text-body'>Адрес доставки</span>
					<Input
						className='mt-2'
						required
						{...register('deliveryAddress', { required: true })}
					/>
				</label>
				<label>
					<span className='text-body'>Дата доставки</span>
					<DeliveryDatePicker className='mt-2 w-full' control={control} />
				</label>
				<label>
					<span className='text-body'>Время доставки</span>
					<Controller
						control={control}
						name='deliveryTime'
						render={({ field: { onChange } }) => (
							<Select onValueChange={onChange} required>
								<SelectTrigger className='mt-2'>
									<SelectValue placeholder='Выберите время доставки' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='10:00-14:00'>10:00-14:00</SelectItem>
									<SelectItem value='14:00-18:00'>14:00-18:00</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
				</label>
			</div>
		</div>
	)
}
