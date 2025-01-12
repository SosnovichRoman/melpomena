'use client'

import categoryLinks from '@/constants/category-links'
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
	return (
		<section className='bg-light-bg'>
			<div className='container'>
				<div className='pt-[90px] pb-[50px] grid grid-cols-4 gap-7'>
					<div className='pr-10'>
						<a href='/'>
							<img className='h-12' src='/img/logo.svg' alt='logo' />
						</a>
						{/* <p className='text-body mt-6'>
							Melpomena - магазин постеров. <br />
							Мы создаем стильные постеры, которые наполняют интерьер новыми
							красками.
						</p> */}
						<h4 className='heading-4 mt-6'>Подпишитесь на наш инстаграм</h4>
						<a
							href='https://www.instagram.com/melpomena.by/'
							className='mt-3 flex items-center gap-4 link'
						>
							<Instagram />
							<span className='text-body font-medium'>@melpomena.by</span>
						</a>
					</div>
					<div className=''>
						<h3 className='heading-3'>Постеры</h3>
						<nav>
							<ul className='mt-6 space-y-4 text-body'>
								{categoryLinks.map((link) => (
									<li key={link.slug}>
										<a href={link.slug} className='link'>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className=''>
						<h3 className='heading-3'>Покупателям</h3>
						<nav>
							<ul className='mt-6 space-y-4 text-body'>
								<li>
									<a href='' className='link'>
										Контакты
									</a>
								</li>
								<li>
									<a href='' className='link'>
										О нас
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className=''>
						<h3 className='heading-3'>Контакты</h3>
						<ul className='mt-6 space-y-4 text-body'>
							<li className='flex gap-4 items-center'>
								<MapPin />
								<span>г. Минск, ул. П. Бровки, дом 52а, офис 36</span>
							</li>
							<li>
								<a
									href='tel:+375 (44) 573-89-29'
									className='hover:underline flex gap-4 items-center'
								>
									<Phone />
									<span>+375 (44) 573-89-29</span>
								</a>
							</li>
							<li>
								<a
									href='mailto:sosnovichroman@gmail.com'
									className='hover:underline flex gap-4 items-center'
								>
									<Mail />
									<span>sosnovichroman@gmail.com</span>
								</a>
							</li>
							<li className='flex gap-4 items-center'>
								<Clock />
								<span>Пн-пт 10:00 - 18:00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
