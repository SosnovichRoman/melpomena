import NotFound from '@/app/not-found'
import PosterPage from '@/components/pages/poster/PosterPage'
import posterService from '@/services/poster.service'
import { Metadata } from 'next'

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = (await params).slug
	const poster = await posterService.getBySlug(slug)

	return {
		title: `Постер ${poster?.name}` || '',
		description: 'Постеры Melpomena',
	} satisfies Metadata
}

export default async function page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const poster = await posterService.getBySlug(slug)
	if (!poster) return <NotFound />
	return <PosterPage poster={poster} />
}
