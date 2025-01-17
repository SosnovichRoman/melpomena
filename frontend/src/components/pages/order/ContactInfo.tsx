import { Input } from '@/components/ui/input'
import { UseFormRegister } from 'react-hook-form'
import { formType } from './OrderPage'

export default function ContactInfo({
	register,
	className,
}: {
	register: UseFormRegister<formType>
	className?: string
}) {
	return (
		<div className={className}>
			<h3 className='heading-3 text-main'>Контактная информация</h3>
			<div className={`mt-6 grid grid-cols-2 gap-x-10 gap-y-5 text-body`}>
				<label>
					<span>Имя</span>
					<Input
						className='mt-2'
						required
						{...register('name', { required: true })}
					/>
				</label>
				<label>
					<span>Фамилия</span>
					<Input
						className='mt-2'
						required
						{...register('surname', { required: true })}
					/>
				</label>
				<label>
					<span>Контактный телефон</span>
					<Input
						className='mt-2'
						required
						{...register('phone', { required: true })}
					/>
				</label>
			</div>
		</div>
	)
}
