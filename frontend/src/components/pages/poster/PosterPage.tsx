import { IPosterFull } from '@/types/poster.types'
import PosterView from './PosterView'

const PosterPage = ({ poster }: { poster: IPosterFull }) => {
	return (
		<main>
			<PosterView poster={poster} />
		</main>
	)
}

export default PosterPage
