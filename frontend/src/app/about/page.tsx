import AboutPage from '@/components/pages/about/AboutPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О нас - Melpomena',
}

export default function page() {
	return <AboutPage />
}
