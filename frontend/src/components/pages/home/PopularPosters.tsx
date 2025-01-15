'use client'

import PosterGrid from '@/components/widgets/poster-grid/PosterGrid'
import usePopularPosters from '@/hooks/usePopularPosters'
import { LoaderCircle } from 'lucide-react'

export default function PopularPosters() {
	const { posters, isLoading, isError } = usePopularPosters()

	return (
		<section className=''>
			<div className='container pt-20 md:pb-20 pb-5'>
				<h2 className='heading-2 border-b-2 border-solid'>
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
					<PosterGrid posters={posters} className=' mt-[30px]' />
				)}
			</div>
		</section>
	)
}
