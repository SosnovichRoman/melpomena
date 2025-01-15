import CategoryPage from '@/components/pages/category/CategoryPage'
import categoryService from '@/services/category.service'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = (await params).slug
	let categoryName = ''
	if (slug == 'all-posters') categoryName = 'Все постеры'
	else categoryName = (await categoryService.getBySlug(slug)).name

	return {
		title: categoryName || '',
		description: 'Постеры Melpomena',
	} satisfies Metadata
}

export default async function page({ params }: { params: { slug: string } }) {
	const slug = (await params).slug
	let category = { name: '', slug }
	if (slug == 'all-posters') category.name = 'Все постеры'
	else category = await categoryService.getBySlug(slug)
	return <CategoryPage category={category} />
}
