'use client'
import PageLoading from '@/components/widgets/page-loading/PageLoading'
import PosterGrid from '@/components/widgets/poster-grid/PosterGrid'
import useSimilarPosters from '@/hooks/useSimilarPosters'
import { IPosterFull } from '@/types/poster.types'

export default function SimilarPosters({ poster }: { poster: IPosterFull }) {
	const { posters, isLoading } = useSimilarPosters(poster)

	if (isLoading) return <PageLoading />

	return (
		<section>
			<div className='container pb-20'>
				<h2 className='heading-2 border-b-2 border-solid'>Похожие постеры</h2>
				{<PosterGrid className='mt-[30px]' posters={posters} />}
			</div>
		</section>
	)
}
