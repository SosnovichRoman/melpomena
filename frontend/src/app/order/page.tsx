import OrderPage from '@/components/pages/order/OrderPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оформление заказа - Melpomena',
}

export default function page() {
	return <OrderPage />
}
