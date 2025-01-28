import { Star } from 'lucide-react'

const comments = [
	{
		title: 'Качественная печать и бумага',
		description:
			'Бумага плотная и приятная на ощупь, а печать четкая и красочная. У меня не было больших ожиданий, так что это был приятный сюрприз :)',
		name: 'Владислав',
	},
	{
		title: 'Прекрасный подарок',
		description:
			'Купила постер в качестве подарка, и он вызвал восторг! Упаковка стильная, а сам постер выглядел как настоящее произведение искусства.',
		name: 'Анастасия',
	},
	{
		title: 'Современный и стильный дизайн',
		description:
			'Долго искала что-то, что дополнит мой интерьер, и нашёл здесь. Постеры смотрятся стильно и дорого, хотя цена более чем приятная.',
		name: 'Полина',
	},
]

export default function Testimonials() {
	return (
		<section className=''>
			<div className='container md:pt-20 pt-5 pb-20'>
				<h2 className='heading-2 border-b-2'>Отзывы покупателей</h2>

				<div className='mt-[50px] grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
					{comments.map((comment) => (
						<div
							key={comment.name}
							className='text-center shadow-sm hover:shadow-md p-5 space-y-5 border-2 bg-light-bg rounded-md'
						>
							<div className='mt-2 flex justify-center gap-1'>
								<Star fill='gold' color='gold' size={16} />
								<Star fill='gold' color='gold' size={16} />
								<Star fill='gold' color='gold' size={16} />
								<Star fill='gold' color='gold' size={16} />
								<Star fill='gold' color='gold' size={16} />
							</div>
							<p className='heading-4'>{comment.title}</p>
							<p className='text-body'>{comment.description}</p>
							<p className='text-body opacity-80 italic'> – {comment.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
