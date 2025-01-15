import CategoryPage from '@/components/pages/category/CategoryPage'
import categoryService from '@/services/category.service'
import type { Metadata } from 'next'

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = (await params).slug
	const category = await categoryService.getBySlug(slug)

	return {
		title: category.name || '',
		description: 'Постеры Melpomena',
	} satisfies Metadata
}

export default async function page({ params }: { params: { slug: string } }) {
	const slug = (await params).slug
	const category = await categoryService.getBySlug(slug)
	return <CategoryPage category={category} />
}
