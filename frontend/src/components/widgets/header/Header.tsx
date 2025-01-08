'use client'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import categoryLinks from '@/constants/category-links'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const Header = () => {
	const [toggle, setToggle] = useState(false)
	useEffect(() => {
		toggle
			? document.documentElement.classList.add('lock')
			: document.documentElement.classList.remove('lock')
	})

	// const [scroll, setScroll] = useState(false);
	// useEffect(() => {
	//     setScroll(window.scrollY > 200);
	//     function scrollEvent() {
	//         setScroll(window.scrollY > 200);
	//     }
	//     window.addEventListener("scroll", scrollEvent);
	//     return () => {
	//         window.removeEventListener("scroll", scrollEvent);
	//     }
	// }, []);

	return (
		<header className='border-b-[1px] border-black'>
			<div className='container h-20 flex justify-between'>
				<nav className='flex items-center gap-20'>
					<a href='/'>
						<img className='h-20' src='/img/logo.png' alt='logo' />
					</a>
					<ul className='flex items-center gap-12 text-lg'>
						{categoryLinks.map((category) => (
							<li key={category.slug}>
								<a className='link' href={`/category/${category.slug}`}>
									{category.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<Sheet>
					<SheetTrigger className=''>
						<Menu />
					</SheetTrigger>
					<SheetContent className=''>
						<SheetHeader>
							<SheetTitle className='hidden'>Categories</SheetTitle>
							<SheetDescription className='py-10'>
								<ul className='flex items-center flex-col gap-12 text-lg'>
									{categoryLinks.map((category) => (
										<li key={category.slug}>
											<a className='link' href={`/category/${category.slug}`}>
												{category.name}
											</a>
										</li>
									))}
								</ul>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
				{/* <button className={`icon-menu md:hidden ${toggle ? "menu-open" : ""}`} onClick={() => setToggle(!toggle)}><span></span></button> */}

				{/* <nav className={`md:hidden fixed z-[1] overflow-auto overflow-x-hidden left-0
                  w-full h-full bg-slate-100 p-8 pt-20 transition-all duration-300 ease-ease ${toggle ? "top-0" : "-top-full"}`}>
                    <ul className='flex flex-col items-center gap-5'>
                        {
                            navigationLinks.map((link) => <li key={link.href} className=''><Link onClick={() => setToggle(false)} href={link.href}>{link.title}</Link></li>)
                        }
                    </ul>
                </nav> */}
			</div>
		</header>
	)
}

export default Header
