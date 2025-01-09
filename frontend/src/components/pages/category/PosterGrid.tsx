'use client'

import PosterCard from '@/components/widgets/poster-card/PosterCard'
import usePostersByCategory from '@/hooks/usePosters'
import { useParams } from 'next/navigation'

const PosterGrid = () => {
	const { slug } = useParams()
	const category = slug?.toString()
	const { posters, isLoading, isError } = usePostersByCategory(category!)

	if (isLoading)
		return (
			<div className='grid-cols-3 flex justify-center py-[200px]'>
				loading...
			</div>
		)

	if (posters?.length == 0 || posters == undefined)
		return (
			<div className='grid-cols-3 text-center py-[200px]'>
				<p className='heading-3'>Упс! Товаров не найдено</p>
				<p className='text-body mt-4'>Попробуйте изменить параметры поиска</p>
			</div>
		)

	return (
		<div className={`mt-[30px] grid grid-cols-3 gap-x-[30px] gap-y-[50px]`}>
			{posters?.map((poster) => (
				<PosterCard key={poster.slug} poster={poster} className='' />
			))}
		</div>
	)
}

export default PosterGrid
