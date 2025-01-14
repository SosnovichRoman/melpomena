import { Scroll, ShieldCheck, Truck } from 'lucide-react'

export default function Advantages() {
	return (
		<section className='pt-10 md:pb-20 pb-10'>
			<div className='container'>
				<h2 className='heading-2 text-center'>
					Почему выбитают постеры Melpomena?
				</h2>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 md:mt-16 mt-10'>
					<div className='space-y-5 flex flex-col items-center'>
						<Scroll strokeWidth={1} className='h-16 w-16' />
						<h3 className='heading-4 text-main text-center'>
							Качественные материалы
						</h3>
						<p className='text-body text-center'>
							Мы используем высококачественные бумагу и чернила, благодаря чему
							наши постеры остаются яркими спустя года.
						</p>
					</div>
					<div className='space-y-5 flex flex-col items-center'>
						<ShieldCheck strokeWidth={1} className='h-16 w-16' />
						<h3 className='heading-4 text-main text-center'>
							Гарантия защиты от повреждений
						</h3>
						<p className='text-body text-center'>
							Мы отправляем все постеры в защитной упаковке. Если Ваш постер
							прибудет поврежденным, свяжитесь с нами, и мы быстро решим эту
							проблему.
						</p>
					</div>
					<div className='space-y-5 flex flex-col items-center'>
						<Truck strokeWidth={1} className='h-16 w-16' />
						<h3 className='heading-4 text-main text-center'>
							Доставка по всей Беларуси
						</h3>
						<p className='text-body text-center'>
							Мы доставим Ваш заказ в любую точку Беларуси в кратчайшие сроки.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
