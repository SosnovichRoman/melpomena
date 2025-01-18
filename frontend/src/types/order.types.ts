import { formType } from '@/components/pages/order/OrderPage'
import { deliveryType } from '@/stores/order.store'
import { ICartRecord } from './cart.types'

export interface IOrderBody {
	orderInfo: formType
	cartList: ICartRecord[]
	deliveryType: deliveryType
}
