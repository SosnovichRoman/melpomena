'use client'

import NotFound from '@/components/widgets/not-found/NotFound'
import PageLoading from '@/components/widgets/page-loading/PageLoading'
import PosterCard from '@/components/widgets/poster-card/PosterCard'
import usePostersByCategory from '@/hooks/usePostersByCategory'

const PosterGrid = ({ category }: { category: string }) => {
	const { posters, isLoading, isError } = usePostersByCategory(category)

	if (isLoading) return <PageLoading />
	if (isError) return <NotFound />

	if (posters?.length == 0 || (posters == undefined && !isLoading))
		return <NotFound title='Товаров не найдено' />

	return (
		<section className='py-[30px]'>
			<div className='container mt-[30px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]'>
				{posters?.map((poster) => (
					<PosterCard key={poster.slug} poster={poster} className='' />
				))}
			</div>
		</section>
	)
}

export default PosterGrid
