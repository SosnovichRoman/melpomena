import { IPosterShort } from '@/types/poster.types'
import Link from 'next/link'

const PosterCard = ({
	poster,
	className,
}: {
	poster: IPosterShort
	className?: string
}) => {
	return (
		<Link
			href={`/poster/${poster.slug}`}
			className={`group/product flex flex-col h-fit hover:scale-105 active:opacity-60 transition-all duration-300 relative ${className} `}
		>
			<img
				className='absolute inset-0 w-full object-cover md:h-[400px] h-[250px] group-hover/product:h-full group-hover/product:opacity-80 group-hover/product:shadow-lg group-active:opacity-60 active:opacity-60 transition-all duration-300'
				src={poster.images[0]}
				alt={poster.name}
			/>
			<div className='md:mt-[400px] mt-[250px] py-3 relative z-10 transition-all duration-300 group-hover/product:p-3 group-hover/product:gap-4'>
				<p className='text-body text-right'>{poster.name}</p>
			</div>
		</Link>
	)
}

export default PosterCard
