import OrderDonePage from '@/components/pages/order-done/OrderDonePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Заказ оформлен - Melpomena',
}

export default function page() {
	return <OrderDonePage />
}
