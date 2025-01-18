import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function OrderHeader() {
	return (
		<>
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
			<section className=''>
				<div className='container'>
					<h1 className='heading-2 border-b-2 border-solid'>
						Оформление заказа
					</h1>
				</div>
			</section>
		</>
	)
}
