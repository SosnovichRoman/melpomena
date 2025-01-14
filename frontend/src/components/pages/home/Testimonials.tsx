import { Star } from 'lucide-react'

const comments = [
	{
		title: 'Качество лучше, чем ожидалось',
		description:
			'Я был просто поражен качеством бумаги и рамки за такую ​​цену. У меня не было больших ожиданий, так что это был приятный сюрприз :)',
		name: 'Александр',
	},
	{
		title: 'Отличный выбор!',
		description:
			'Выбор в Мельпомене на уровень выше, чем в других магазинах, которые я просматривала. Мне хотелось чего-то уникального, и они это предоставили. Я определенно рекомендую!',
		name: 'Анастасия',
	},
	{
		title: 'Обычно я беру свои работы из галерей',
		description:
			'Задумалась о том, чтобы попробовать что-то новое и отважилась на штуки от Melpomena, очень доволен. Вышло даже лучше, чем ожидалось',
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
