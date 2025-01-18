import { Button } from '@/components/ui/button'
import OrderHeader from '../order/OrderHeader'

export default function OrderDonePage() {
	return (
		<main>
			<OrderHeader />
			<section className='py-[250px]'>
				<div className='conteiner flex items-center justify-center flex-col'>
					<p className='heading-3'>Ваш заказ успешно оформлен!</p>
					<Button asChild className='mt-5' size={'lg'}>
						<a href='/' className='text-body-sm font-normal'>
							Вернуться на главную
						</a>
					</Button>
				</div>
			</section>
		</main>
	)
}
