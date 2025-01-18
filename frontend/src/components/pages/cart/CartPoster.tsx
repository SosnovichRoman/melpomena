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
		<div className='grid grid-cols-7 md:gap-[30px] gap-3 pb-5 border-b-2 border-solid border-main-3'>
			<img
				className='col-span-2 aspect-square object-cover'
				src={cartPoster?.images?.[0]}
				alt={cartPoster?.name}
			/>
			<div className='col-span-5 flex gap-3'>
				<div className='flex flex-col gap-3 grow'>
					<h4 className='md:heading-4'>Постер {cartPoster?.name}</h4>

					<p className=' space-x-3'>
						<span className='text-[14px] opacity-80'>Размер:</span>
						<span>{cartPoster.dimension.name}</span>
					</p>
					<p className=' space-x-3'>
						<span className='text-[14px] opacity-80'>Рамка:</span>
						<span>{cartPoster.frame.name}</span>
					</p>
					<QuantityInput
						className='md:hidden'
						quantity={quantity}
						onIncrement={() => updateStore(cartPosterSave, quantity + 1)}
						onDecrement={() => updateStore(cartPosterSave, quantity - 1)}
					/>
					<p className='md:heading-4 md:hidden'>
						{posterUtils.calculateCartPosterPrice(cartPoster, quantity)} BYN
					</p>
				</div>
				<div className='h-full flex flex-col justify-between items-end gap-5'>
					<button onClick={() => deleteFromStore(cartPosterSave)}>
						<X />
					</button>
					<QuantityInput
						className='max-md:hidden'
						quantity={quantity}
						onIncrement={() => updateStore(cartPosterSave, quantity + 1)}
						onDecrement={() => updateStore(cartPosterSave, quantity - 1)}
					/>
					<p className='heading-4 text-main max-md:hidden'>
						{posterUtils.calculateCartPosterPrice(cartPoster, quantity)} BYN
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartPoster
