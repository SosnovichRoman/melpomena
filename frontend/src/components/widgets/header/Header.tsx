'use client'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import categoryLinks from '@/constants/category-links'
import { Menu } from 'lucide-react'
import CartIcon from './CartIcon'

const Header = () => {
	return (
		<header className='bg-light-bg'>
			<div className='container h-20 flex justify-between'>
				<nav className='flex items-center gap-20'>
					<a href='/'>
						<img className='h-12' src='/img/logo.svg' alt='Логотип' />
					</a>
					<ul className='flex items-center gap-12 text-lg max-md:hidden'>
						{categoryLinks.map((category) => (
							<li key={category.slug}>
								<a className='link' href={`/category/${category.slug}`}>
									{category.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div className='flex items-center gap-6'>
					<CartIcon />
					<Sheet>
						<SheetTrigger className='md:hidden'>
							<Menu />
						</SheetTrigger>
						<SheetContent className=''>
							<SheetHeader>
								<SheetTitle className='hidden'>Categories</SheetTitle>
								<ul className='py-10 flex items-center flex-col gap-12 text-lg'>
									{categoryLinks.map((category) => (
										<li key={category.slug}>
											<a className='link' href={`/category/${category.slug}`}>
												{category.name}
											</a>
										</li>
									))}
								</ul>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}

export default Header
