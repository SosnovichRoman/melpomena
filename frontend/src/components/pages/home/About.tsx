import { Button } from '@/components/ui/button'

export default function About() {
	return (
		<section className='py-10'>
			<div className='container grid md:grid-cols-2 gap-10'>
				<div className='text-body md:space-y-8 space-y-5 flex flex-col items-start'>
					<h2 className='heading-2'>Немного о нас</h2>
					<p>
						Melpomena - это магазин постеров, в котором каждая деталь имеет
						значение. Мы стремимся создать для вас коллекцию, которая будет
						вдохновлять, удивлять и приносить радость. Наши постеры — это не
						просто украшение стен, это возможность выразить себя и создать
						уникальную атмосферу в любом пространстве.
					</p>
					<p>
						В нашем магазине вы найдете коллекции постеров, которые подойдут для
						самых разных стилей и настроений. Мы с любовью подбираем каждую
						работу, чтобы ваши стены стали отражением вашего характера и вкуса.
					</p>
					<p>Вы найдете в нашем каталоге постеры на любой вкус и цвет!</p>
					<Button className='text-lg' size={'xl'} asChild>
						<a href='/category'>Перейти в каталог</a>
					</Button>
				</div>
				<div className='relative max-md:h-[300px]'>
					<img
						src='/img/home/about.png'
						alt='Постер'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
