import HomePage from '@/components/pages/home/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Главная - Melpomena',
}

export default function Home() {
	return <HomePage />
}
