'use client'

import NotFound from '@/components/widgets/not-found/NotFound'
import PageLoading from '@/components/widgets/page-loading/PageLoading'
import usePosterBySlug from '@/hooks/usePosterBySlug'
import { useParams } from 'next/navigation'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import PosterView from './PosterView'

const PosterPage = () => {
	const { slug } = useParams()
	const posterSlug = slug?.toString() || ''

	const { poster, isLoading, isError } = usePosterBySlug(posterSlug)

	if (isLoading) return <PageLoading />
	if (isError) return <NotFound />

	return (
		<main>
			<PosterView poster={poster!} />
		</main>
	)
}

export default PosterPage
