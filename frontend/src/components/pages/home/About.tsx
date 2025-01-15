import { Button } from '@/components/ui/button'

export default function About() {
	return (
		<section className='py-10'>
			<div className='container grid md:grid-cols-2 gap-10'>
				<div className='text-body space-y-8 flex flex-col items-start'>
					<h2 className='heading-2'>Немного о нас</h2>
					<p>
						Melpomena - это магазин постеров, в котором каждая деталь имеет
						значение. Мы стремимся создать для вас коллекцию, которая будет
						вдохновлять, удивлять и приносить радость. Наши постеры — это не
						просто украшение стен, это возможность выразить себя и создать
						уникальную атмосферу в любом пространстве.
					</p>
					<p>Вы найдете в нашем каталоге постеры на любой вкус и цвет!</p>
					<Button className='text-lg' size={'xl'} asChild>
						<a href='/category'>Перейти в каталог</a>
					</Button>
				</div>
				<div className='relative'>
					<img
						src='/img/home/about.png'
						alt='Суккулент'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
