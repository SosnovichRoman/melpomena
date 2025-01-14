'use client'
import { useParams } from 'next/navigation'
import CategoryGrid from './CategoryGrid'

export default function CategoryPage() {
	const { slug } = useParams()
	const category = slug?.toString() || ''
	return <CategoryGrid category={category} />
}
