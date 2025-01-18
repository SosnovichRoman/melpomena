import { Button } from '@/components/ui/button'

export default function CartEmpty() {
	return (
		<section className='py-[250px]'>
			<div className='conteiner flex items-center justify-center flex-col'>
				<h3 className='heading-3'>Ваша корзина пустая</h3>
				<p className='text-body mt-5'>Добавьте товары и оформите заказ</p>
				<Button asChild className='mt-5' size={'lg'}>
					<a href='/category' className='text-body-sm font-normal'>
						Перейти в каталог товаров
					</a>
				</Button>
			</div>
		</section>
	)
}
