import About from './About'
import Advantages from './Advantages'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'

export default function HomePage() {
	return (
		<main>
			<Hero />
			<PopularProducts />
			<Advantages />
			<About />
			<Subscribe />
			<Testimonials />
		</main>
	)
}
