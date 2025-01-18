import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function CartHeader() {
	return (
		<>
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
								<BreadcrumbPage>Корзина</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<section className=''>
				<div className='container'>
					<h1 className='heading-2 grow border-b-2 border-solid border-main-3'>
						Корзина
					</h1>
				</div>
			</section>
		</>
	)
}
