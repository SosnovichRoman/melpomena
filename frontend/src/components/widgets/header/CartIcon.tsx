import useCartStore from '@/stores/cart.store'
import cartUtils from '@/utils/cart.utils'
import { ShoppingCart } from 'lucide-react'

export default function CartIcon() {
	const { cartList } = useCartStore()

	return (
		<a href='/cart' className='relative hover:opacity-70 active:opacity-40'>
			<ShoppingCart />
			<span className='absolute -right-1 -top-1 text-[10px] text-white text-bold leading-none rounded-full bg-primary h-[14px] w-[14px] flex justify-center items-center'>
				{cartUtils.getTotalQuantity(cartList)}
			</span>
		</a>
	)
}
