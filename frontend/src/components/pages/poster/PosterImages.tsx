import { IPosterFull } from '@/types/poster.types'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const PosterImages = ({ poster }: { poster: IPosterFull | undefined }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	return (
		<>
			<div className='md:hidden min-w-0'>
				<Swiper
					scrollbar={{
						hide: true,
					}}
					slidesPerView={1}
					spaceBetween={10}
					modules={[Scrollbar]}
				>
					{poster?.images?.map((image) => (
						<SwiperSlide key={image}>
							<img
								alt={poster?.name}
								className='w-full h-[500px] object-cover'
								src={image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='max-md:hidden'>
				<img
					className='w-full xl:h-[700px] lg:h-[600px] h-[500px] object-cover'
					src={poster?.images?.[currentImageIndex]}
					alt={poster?.name}
				/>
				<div className='grid grid-cols-5 gap-5 mt-10'>
					{poster?.images?.map((image, index) => (
						<img
							src={image}
							key={image}
							onClick={() => setCurrentImageIndex(index)}
							alt={poster?.name}
							className={`w-full aspect-square object-cover ${
								currentImageIndex == index ? 'opacity-100' : 'opacity-40'
							} hover:opacity-100 cursor-pointer`}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default PosterImages
