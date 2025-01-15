'use client'

import NotFound from '@/components/widgets/not-found/NotFound'
import PageLoading from '@/components/widgets/page-loading/PageLoading'
import PosterGrid from '@/components/widgets/poster-grid/PosterGrid'
import usePostersByCategory from '@/hooks/usePostersByCategory'

const CategoryGrid = ({ category }: { category: string }) => {
	const { posters, isLoading, isError } = usePostersByCategory(category)

	if (isLoading) return <PageLoading />
	if (isError) return <NotFound />

	if (posters?.length == 0 || (posters == undefined && !isLoading))
		return <NotFound title='Товаров не найдено' />

	return (
		<section className='py-[30px]'>
			<div className='container'>
				<PosterGrid className='' posters={posters} />
			</div>
		</section>
	)
}

export default CategoryGrid
