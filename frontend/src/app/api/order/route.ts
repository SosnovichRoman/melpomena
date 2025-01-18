import { formType } from '@/components/pages/order/OrderPage'
import { deliveryType } from '@/stores/order.store'
import { ICartRecord } from '@/types/cart.types'
import cartUtils from '@/utils/cart.utils'
import posterUtils from '@/utils/poster.utils'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const data = (await request.json()) as {
			orderInfo: formType
			cartList: ICartRecord[]
			deliveryType: deliveryType
		}
		const message = `
Поступил заказ: %0A
Имя: ${data.orderInfo.name} %0A
Фамилия: ${data.orderInfo.surname} %0A
Номер телефона: ${data.orderInfo.phone} %0A
Доставка: ${data.orderInfo.deliveryType} %0A
Дата доставки: ${data.orderInfo.deliveryDate} %0A
${
	data.orderInfo.deliveryTime
		? `Время доставки: ${data.orderInfo.deliveryTime} %0A`
		: ''
}
${
	data.orderInfo.deliveryAddress
		? `Адрес доставки: ${data.orderInfo.deliveryAddress} %0A`
		: ''
}%0A
Заказаны товары:%0A
${data.cartList
	.map(
		(record) =>
			`Название: ${record.cartPoster.name}, размер: ${
				record.cartPoster.dimension.name
			}, рамка: ${
				record.cartPoster.frame.name
			}, общая цена: ${posterUtils.calculateCartPosterPrice(
				record.cartPoster,
				record.quantity
			)} количество: ${record.quantity}`
	)
	.join('%0A')}%0A%0A
Цена товаров: ${cartUtils.getTotalPrice(data.cartList)}руб.%0A
Цена доставки: ${data.deliveryType.price}руб.%0A
Итоговая цена: ${
			data.deliveryType.price + cartUtils.getTotalPrice(data.cartList)
		}руб.`
		fetch(
			`https://api.telegram.org/bot${process.env.BOT_API_TOKEN}/sendMessage?chat_id=-4673291479&text=${message}`
		)
	} catch (error) {
		console.log(error)
		return new NextResponse(JSON.stringify(error), { status: 500 })
	}

	return new NextResponse(JSON.stringify('Done'), { status: 200 })
}
