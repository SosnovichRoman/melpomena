import QuantityInput from '@/components/ui/quantityInput'
import useCartStore from '@/stores/cart.store'
import { ICartRecord } from '@/types/cart.types'
import posterUtils from '@/utils/poster.utils'
import { X } from 'lucide-react'

const CartPoster = ({ cartRecord }: { cartRecord: ICartRecord }) => {
	const { cartPoster, quantity } = cartRecord
	const { delete: deleteFromStore, update: updateStore } = useCartStore()
	const cartPosterSave = {
		_id: cartPoster._id,
		dimensionId: cartPoster.dimension._id,
		frameId: cartPoster.frame._id,
	}

	return (
		<div className='grid grid-cols-7 gap-[30px] pb-5 border-b-2 border-solid border-main-3'>
			<img
				className='col-span-2 aspect-square object-cover'
				src={cartPoster?.images?.[0]}
				alt={cartPoster?.name}
			/>
			<div className='col-span-5 flex gap-[30px]'>
				<div className='flex flex-col grow'>
					<h4 className='heading-4 text-main'>Постер {cartPoster?.name}</h4>

					<p className='mt-3 space-x-3'>
						<span className='text-[14px] opacity-80'>Размер:</span>
						<span>{cartPoster.dimension.name}</span>
					</p>
					<p className='mt-3 space-x-3'>
						<span className='text-[14px] opacity-80'>Рамка:</span>
						<span>{cartPoster.frame.name}</span>
					</p>
				</div>
				<div className='h-full flex flex-col justify-between items-end gap-5'>
					<button onClick={() => deleteFromStore(cartPosterSave)}>
						<X />
					</button>
					<QuantityInput
						quantity={quantity}
						onIncrement={() => updateStore(cartPosterSave, quantity + 1)}
						onDecrement={() => updateStore(cartPosterSave, quantity - 1)}
					/>
					<p className='heading-4 text-main'>
						{posterUtils.calculateCartPosterPrice(cartPoster, quantity)} BYN
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartPoster
