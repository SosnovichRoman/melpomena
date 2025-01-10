'use client'

import { Button } from '@/components/ui/button'
import PosterCard from '@/components/widgets/poster-card/PosterCard'
import usePostersByCategory from '@/hooks/usePostersByCategory'
import { LoaderCircle } from 'lucide-react'

const PosterGrid = ({ category }: { category: string }) => {
	const { posters, isLoading, isError } = usePostersByCategory(category)

	if (isLoading)
		return (
			<section className='py-[250px]'>
				<div className='container flex justify-center'>
					<LoaderCircle className='animate-spin' size={60} />
				</div>
			</section>
		)
	if (isError) return <div className=''>loading...</div>

	if (posters?.length == 0 || (posters == undefined && !isLoading))
		return (
			<section className='py-[250px]'>
				<div className='conteiner flex items-center justify-center flex-col'>
					<p className='heading-3'>Упс! Товаров не найдено</p>
					<Button asChild className='mt-5' size={'lg'}>
						<a href='/' className='text-body-sm font-normal'>
							Вернуться на главную
						</a>
					</Button>
					{/* <p className='text-body mt-4'>Попробуйте изменить параметры поиска</p> */}
				</div>
			</section>
		)

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
