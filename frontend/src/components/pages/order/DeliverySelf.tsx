import { Control } from 'react-hook-form'
import DeliveryDatePicker from './DeliveryDatePicker'
import { formType } from './OrderPage'

export default function DeliverySelf({
	className,
	control,
}: {
	control: Control<formType, any>
	className?: string
}) {
	return (
		<div className={className}>
			<h4 className='heading-3'>Самовывоз</h4>
			<div className='mt-6'>
				<label>
					<span className='text-body-sm'>Дата доставки</span>
					<div className='grid md:grid-cols-2 gap-x-10 mt-2'>
						<DeliveryDatePicker control={control} />
					</div>
				</label>
			</div>
			<p className='text-body mt-6'>
				Самовывоз осуществляется по адресу: Минский район, Боровлянский
				сельсовет, 74к2, павильон 146.
				<br />
				Время работы: 08:00-16:00, пн-пт.
			</p>
			<div className='overflow-hidden mt-5'>
				<iframe
					src='https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.628917%2C53.963334&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=27.629187%2C53.963516&whatshere%5Bzoom%5D=17&z=16.8'
					className='relative w-full md:h-[600px] h-[500px] border-2'
				></iframe>
			</div>
		</div>
	)
}
