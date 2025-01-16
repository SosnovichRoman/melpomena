import QuantityInput from '@/components/ui/quantityInput'
import useCartStore from '@/stores/cart.store'
import { ICartPosterFull } from '@/types/poster.types'
import cartUtils from '@/utils/cart.utils'
import posterUtils from '@/utils/poster.utils'
import { X } from 'lucide-react'

const CartPoster = ({
	cartPosterFull,
}: {
	cartPosterFull: ICartPosterFull
}) => {
	const {
		delete: deleteFromStore,
		cartList,
		update: updateStore,
	} = useCartStore()
	const cartPoster = {
		_id: cartPosterFull._id,
		dimensionId: cartPosterFull.dimension._id,
		frameId: cartPosterFull.frame._id,
	}
	const quantity = cartUtils.getQuantity(cartPoster, cartList)

	return (
		<div className='grid grid-cols-7 gap-[30px] pb-5 border-b-2 border-solid border-main-3'>
			<img
				className='col-span-2 aspect-square object-cover'
				src={cartPosterFull?.images?.[0]}
				alt={cartPosterFull?.name}
			/>
			<div className='col-span-5 flex gap-[30px]'>
				<div className='flex flex-col grow'>
					<h4 className='heading-4 text-main'>Постер {cartPosterFull?.name}</h4>

					<p className='mt-3 space-x-3'>
						<span className='text-[14px] opacity-80'>Размер:</span>
						<span>{cartPosterFull.dimension.name}</span>
					</p>
					<p className='mt-3 space-x-3'>
						<span className='text-[14px] opacity-80'>Рамка:</span>
						<span>{cartPosterFull.frame.name}</span>
					</p>
				</div>
				<div className='h-full flex flex-col justify-between items-end gap-5'>
					<button onClick={() => deleteFromStore(cartPoster)}>
						<X />
					</button>
					<QuantityInput
						quantity={quantity}
						onIncrement={() => updateStore(cartPoster, quantity + 1)}
						onDecrement={() => updateStore(cartPoster, quantity - 1)}
					/>
					<p className='heading-4 text-main'>
						{posterUtils.calculateCartPosterPrice(cartPosterFull, quantity)} BYN
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartPoster
