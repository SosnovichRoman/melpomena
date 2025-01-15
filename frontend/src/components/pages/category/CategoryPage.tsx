import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import CategoryGrid from './CategoryGrid'

export default function CategoryPage({
	category,
}: {
	category: { name: string; slug: string }
}) {
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
							{category.slug ? (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink className='link' href='/category'>
											Все постеры
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
									<BreadcrumbItem>
										<BreadcrumbPage>{category.name}</BreadcrumbPage>
									</BreadcrumbItem>
								</>
							) : (
								<BreadcrumbItem>
									<BreadcrumbPage>{category.name}</BreadcrumbPage>
								</BreadcrumbItem>
							)}
						</BreadcrumbList>
					</Breadcrumb>
					<h2 className='heading-2 border-b-2 border-solid'>
						Популярные постеры
					</h2>
				</div>
			</section>
			<CategoryGrid category={category.slug} />
		</main>
	)
}
