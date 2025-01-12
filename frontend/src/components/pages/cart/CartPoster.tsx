import useDeleteCartItem from '@/hooks/useDeleteCartItem'
import { ICartPoster } from '@/types/poster.types'
import posterUtils from '@/utils/poster.utils'
import { X } from 'lucide-react'

const CartPoster = ({ cartPoster }: { cartPoster: ICartPoster }) => {
	const { deleteCartItem } = useDeleteCartItem()

	return (
		<div className='grid grid-cols-7 gap-[30px] pb-5 border-b-2 border-solid border-main-3'>
			<img
				className='col-span-2 aspect-square object-cover'
				src={cartPoster?.images?.[0]}
				alt={cartPoster?.name}
			/>
			<div className='col-span-5 flex gap-[30px]'>
				<div className='flex flex-col grow'>
					<div className='grow'>
						<h4 className='heading-4 text-main'>{cartPoster?.name}</h4>
					</div>
					{/* <div className='mt-10 flex items-baseline gap-[10px]'>
						<span className='text-body-sm text-main-3'>Размер:</span>
						<span className='text-body-lg font-semibold'>
							{poster?.product.size?.name}
						</span>
					</div> */}
				</div>
				<div className='h-full flex flex-col justify-between items-end gap-5'>
					<button onClick={() => deleteCartItem(cartPoster._id)}>
						<X />
					</button>
					{/* <Icon
						icon='prime:times'
						className='cursor-pointer text-[1.5rem]'
						onClick={deleteProduct}
					/> */}
					{/* <CountPicker onChange={updateCount} value={item?.count} /> */}
					<p className='heading-4 text-main'>
						{posterUtils.calculatePosterPrice(cartPoster)} BYN
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartPoster
