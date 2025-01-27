import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
	return (
		<main>
			<section>
				<div className='container'>
					<Breadcrumb className='py-10'>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink className='link' href='/'>
									Главная
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>О нас</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<section className='pb-20'>
				<div className='container'>
					<h2 className='heading-2 border-b-2 border-solid'>О нас</h2>
					<div className='mt-10 grid md:grid-cols-2 gap-10'>
						<div className='text-body md:space-y-8 space-y-5 flex flex-col items-start'>
							<h3 className='heading-3'>О нашем магазине</h3>
							<p>
								Melpomena - это магазин постеров, которые оживляют пространоство
								и вдохновляют каждый день. Наша коллекция постеров вдохновлена
								тематикой ретро, однако мы постоянно расширяем ассортимент. Наши
								постеры найдут отклик у людей с разными вкусами, интересами и
								стилями.
							</p>
							<p>
								В Melpomena мы тщательно подбираем коллекции, чтобы предложить
								вам уникальные и стильные изображения, которые вдохновляют,
								украшают и помогают выразить себя. Искусство доступно каждому, и
								мы рады помочь вам найти тот самый постер, который станет
								акцентом вашего интерьера.
							</p>
							<p>Вы найдете в нашем каталоге постеры на любой вкус и цвет!</p>
							<Button className='text-lg' size={'xl'} asChild>
								<a href='/category'>Перейти в каталог</a>
							</Button>
						</div>
						<div className='relative max-md:h-[300px]'>
							<img
								src='/img/about/monica.webp'
								alt='Постер'
								className='absolute inset-0 w-full h-full object-cover'
							/>
						</div>
					</div>
					<div className='md:mt-32 mt-16 grid md:grid-cols-2 gap-10'>
						<div className='relative md:h-[550px] h-[400px] max-md:order-last'>
							<img
								src='/img/about/melpomene.jpg'
								alt='Мельпомена'
								className='absolute inset-0 w-full h-full object-cover '
							/>
						</div>
						<div className='text-body md:space-y-8 space-y-5 flex flex-col items-start'>
							<h3 className='heading-3'>Что значит Melpomena?</h3>
							<p>
								Мельпомена - одна из девяти муз древнегреческой мифологии,
								отождествляемая с трагедией, творчеством и эмоциональной
								глубины. Как и Мельпомена, мы стремимся передать историю,
								вдохновение и яркие чувства через наши постеры.
							</p>
							<p>
								Каждое изображение из нашей коллекции — это маленький шедевр,
								который способен преобразить пространство, наполнить его
								настроением и смыслом. Melpomena приглашает вас прикоснуться к
								искусству, которое оживляет стены и дарит новую глубину вашему
								интерьеру.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
