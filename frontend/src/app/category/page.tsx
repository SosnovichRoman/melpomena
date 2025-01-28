import CategoryPage from '@/components/pages/category/CategoryPage'
import type { Metadata } from 'next'

export async function generateMetadata() {
	return {
		title: 'Все постеры',
	} satisfies Metadata
}

export default async function page() {
	const category = { name: 'Все постеры', slug: '' }
	return <CategoryPage category={category} />
}
