import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactsPage() {
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
								<BreadcrumbPage>Контакты</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<section className='pb-20'>
				<div className='container'>
					<h2 className='heading-2 border-b-2 border-solid'>Контакты</h2>
					<div className='grid md:grid-cols-2 gap-10 mt-10'>
						<ul className='space-y-10 text-lg'>
							<li>
								<h3 className='heading-3 mb-3'>Адрес самовывоза</h3>
								<div className='flex items-center gap-4'>
									<MapPin className='shrink-0' />
									<span>
										Минский район, Боровлянский сельсовет, 74к2, павильон 146
									</span>
								</div>
							</li>
							<li>
								<h3 className='heading-3 mb-3'>Время работы</h3>
								<div className='flex items-center gap-4'>
									<Clock className='shrink-0' />
									<span>Пн-пт 08:00 - 16:00</span>
								</div>
							</li>

							<li>
								<h3 className='heading-3 mb-3'>Телефон</h3>
								<a
									className='flex items-center gap-4 link'
									href='tel:+375 (25) 521-62-68'
								>
									<Phone className='shrink-0' />
									<span>+375 (25) 521-62-68</span>
								</a>
							</li>
							<li>
								<h3 className='heading-3 mb-3'>Наш инстаграм</h3>
								<a
									href='https://www.instagram.com/melpomena.by/'
									className='flex items-center gap-4 link'
								>
									<Instagram className='shrink-0' />
									<span>@melpomena.by</span>
								</a>
							</li>
							<li>
								<h3 className='heading-3 mb-3'>Электронная почта</h3>
								<a
									className='flex items-center gap-4 link'
									href='mailto:melpomena.by@gmail.com'
								>
									<Mail />
									<span>melpomena.by@gmail.com</span>
								</a>
							</li>
						</ul>
						<div className='overflow-hidden'>
							<iframe
								src='https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.628917%2C53.963334&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=27.629187%2C53.963516&whatshere%5Bzoom%5D=17&z=16.8'
								className='relative w-full md:h-[600px] h-[500px] border-2'
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
