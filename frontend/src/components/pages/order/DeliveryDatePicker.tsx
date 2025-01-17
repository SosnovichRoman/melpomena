import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { add, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Control, Controller } from 'react-hook-form'
import { formType } from './OrderPage'

export default function DeliveryDatePicker({
	control,
	className,
}: {
	control: Control<formType, any>
	className?: string
}) {
	const tomorrowDate = add(new Date(), { days: 1 })
	return (
		<Controller
			name='deliveryDate'
			control={control}
			defaultValue={tomorrowDate}
			render={({ field: { value, onChange } }) => (
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								'justify-start text-left items-center font-normal',
								className
							)}
						>
							<CalendarIcon />
							{value ? format(value, 'dd-MM-yyyy') : <span>Выберите дату</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0' align='start'>
						<Calendar
							mode='single'
							selected={value}
							onSelect={onChange}
							initialFocus
							disabled={(date) =>
								date < new Date() || date > new Date('2100-01-01')
							}
						/>
					</PopoverContent>
				</Popover>
			)}
		/>
	)
}
