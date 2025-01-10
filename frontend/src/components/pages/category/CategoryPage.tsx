'use client'
import { useParams } from 'next/navigation'
import PosterGrid from './CategoryGrid'

export default function CategoryPage() {
	const { slug } = useParams()
	const category = slug?.toString() || ''
	return <PosterGrid category={category} />
}
