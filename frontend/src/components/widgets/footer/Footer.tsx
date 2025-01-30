'use client'

import categoryLinks from '@/constants/category-links'
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
	return (
		<section className='bg-light-bg'>
			<div className='container'>
				<div className='md:pt-20 pt-10 pb-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 max-md:text-center'>
					<div>
						<a href='/' className='max-md:flex max-md:justify-center'>
							<img className='h-12' src='/img/logo.svg' alt='logo' />
						</a>
						<h4 className='heading-4 mt-6'>Подпишитесь на наш инстаграм</h4>
						<a
							href='https://www.instagram.com/melpomena.by/'
							className='mt-3 flex items-center gap-4 link max-md:justify-center'
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
									<a href='/contacts' className='link'>
										Контакты
									</a>
								</li>
								<li>
									<a href='/about' className='link'>
										О нас
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className=''>
						<h3 className='heading-3'>Контакты</h3>
						<ul className='mt-6 space-y-4 text-body'>
							<li className='flex gap-4 items-center max-md:justify-center'>
								<MapPin className='shrink-0' />
								<span>
									Минский район, Боровлянский сельсовет, 74к2, павильон 146
								</span>
							</li>
							<li>
								<a
									href='tel:+375(25)521-62-68'
									className='hover:underline flex gap-4 items-center max-md:justify-center'
								>
									<Phone className='shrink-0' />
									<span>+375 (25) 521-62-68</span>
								</a>
							</li>
							<li>
								<a
									href='mailto:melpomena.by@gmail.com'
									className='hover:underline flex gap-4 items-center max-md:justify-center'
								>
									<Mail className='shrink-0' />
									<span>melpomena.by@gmail.com</span>
								</a>
							</li>
							<li className='flex gap-4 items-center max-md:justify-center'>
								<Clock className='shrink-0' />
								<span>Пн-пт 08:00 - 16:00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
