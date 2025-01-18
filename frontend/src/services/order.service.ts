import { IOrderBody } from '@/types/order.types'
import axios from 'axios'

class OrderService {
	async post(orderBody: IOrderBody) {
		const response = await axios.post('/api/order', JSON.stringify(orderBody))
		return response
	}
}

export default new OrderService()
