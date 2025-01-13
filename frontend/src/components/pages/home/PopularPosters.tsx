'use client'

import PosterCard from '@/components/widgets/poster-card/PosterCard'
import usePopularPosters from '@/hooks/usePopularPosters'
import { LoaderCircle } from 'lucide-react'

export default function PopularPosters() {
	const { posters, isLoading, isError } = usePopularPosters()

	return (
		<section className=''>
			<div className='container py-20'>
				<h2 className='heading-2 grow border-b-2 border-solid'>
					Популярные постеры
				</h2>
				{isLoading ? (
					<div className='h-96 flex items-center justify-center'>
						<LoaderCircle className='animate-spin' size={60} />
					</div>
				) : isError ? (
					<div className='h-96 flex items-center justify-center'>
						<span className='heading-4'>Произошла ошибка загрузки</span>
					</div>
				) : (
					<div className='mt-[30px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]'>
						{posters?.map((poster) => (
							<PosterCard key={poster.slug} poster={poster} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}
