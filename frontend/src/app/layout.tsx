import Footer from '@/components/widgets/footer/Footer'
import Header from '@/components/widgets/header/Header'
import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Melpomena',
	description:
		'Интернет-магазин постеров melpomena.by. Приятно выбрать и купить постер, букет с доставкой по Минску и Беларуси +375 (25) 521-62-68',
}

const libre = Libre_Franklin({ subsets: ['cyrillic', 'latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={libre.className}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
