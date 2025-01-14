import { IPosterShort } from '@/types/poster.types'
import PosterCard from '../poster-card/PosterCard'

export default function PosterGrid({
	className,
	posters,
}: {
	className?: string
	posters: IPosterShort[] | undefined
}) {
	return (
		<div
			className={`${className} grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-[30px] md:gap-y-[50px] gap-x-5 gap-y-8`}
		>
			{posters?.map((poster) => (
				<PosterCard key={poster.slug} poster={poster} />
			))}
		</div>
	)
}
