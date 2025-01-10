'use client'
import IPosterShort from '@/types/poster.types'
import Link from 'next/link'
import { useState } from 'react'

const PosterCard = ({
	poster,
	className,
	height = 400,
}: {
	poster: IPosterShort
	className: string
	height?: number
}) => {
	const [hovered, setHovered] = useState(false)

	return (
		<Link
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			href={`/catalog/${poster.slug}`}
			className={`group/product flex flex-col h-fit hover:scale-105 active:opacity-60 transition-all duration-300 relative ${className} `}
		>
			<img
				style={{ height: hovered ? '100%' : height }}
				className='absolute inset-0 w-full object-cover group-hover/product:opacity-80 group-hover/product:shadow-lg group-active:opacity-60 active:opacity-60 transition-all duration-300'
				src={poster.images[0]}
				alt={poster.name}
			/>
			<div
				className='text-main gap-10 py-3 relative z-10 transition-all duration-300 group-hover/product:p-3 group-hover/product:gap-4'
				style={{ marginTop: height }}
			>
				<p className='text-body text-right'>{poster.name}</p>
			</div>
		</Link>
	)
}

export default PosterCard
