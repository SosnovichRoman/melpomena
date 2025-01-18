import { Minus, Plus } from 'lucide-react'

export default function QuantityInput({
	quantity,
	onIncrement,
	onDecrement,
	className,
}: {
	quantity: number
	onIncrement: () => void
	onDecrement: () => void
	className?: string
}) {
	return (
		<div
			className={`py-2 px-2 text-body leading-none inline-flex gap-12 items-center relative border-[1px] border-solid rounded-sm w-fit ${className}`}
		>
			<button
				disabled={quantity <= 1}
				onClick={() => onDecrement()}
				className='disabled:opacity-40 hover:opacity-80 active:opacity-60 transition-opacity'
			>
				<Minus size={20} />
			</button>
			<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				{quantity}
			</span>
			<button
				onClick={() => onIncrement()}
				className=' hover:opacity-80 active:opacity-60 transition-opacity'
			>
				<Plus size={20} />
			</button>
		</div>
	)
}
