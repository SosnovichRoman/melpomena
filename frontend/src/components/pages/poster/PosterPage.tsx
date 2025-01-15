import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { IPosterFull } from '@/types/poster.types'
import PosterView from './PosterView'
import SimilarPosters from './SimilarPosters'

const PosterPage = ({ poster }: { poster: IPosterFull }) => {
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
								<BreadcrumbLink className='link' href='/category'>
									Все постеры
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{poster.name}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>
			<PosterView poster={poster} />
			<SimilarPosters poster={poster} />
		</main>
	)
}

export default PosterPage
