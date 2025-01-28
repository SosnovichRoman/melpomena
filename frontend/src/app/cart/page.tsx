import CartPage from '@/components/pages/cart/CartPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Корзина - Melpomena',
}

export default function page() {
	return <CartPage />
}
