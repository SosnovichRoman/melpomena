import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'

export default function OrderDonePage() {
	return (
		<main>
			<section>
				<div className='container'>
					<Breadcrumb className=' py-10'>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink className='link' href='/'>
									Главная
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Оформление заказа</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<section className='py-[250px]'>
				<div className='conteiner flex items-center justify-center flex-col'>
					<p className='heading-3'>Ваш заказ успешно оформлен!</p>
					<Button asChild className='mt-5' size={'lg'}>
						<a href='/' className='text-body-sm font-normal'>
							Вернуться на главную
						</a>
					</Button>
				</div>
			</section>
		</main>
	)
}
