import About from './About'
import Advantages from './Advantages'
import Hero from './Hero'
import PopularPosters from './PopularPosters'
import Testimonials from './Testimonials'

export default function HomePage() {
	return (
		<main>
			<Hero />
			<PopularPosters />
			<Advantages />
			<About />
			{/* <Subscribe /> */}
			<Testimonials />
		</main>
	)
}
