'use client'
import { Button } from '@/components/ui/button'

import useCartStore from '@/stores/cart.store'
import { IPosterFull } from '@/types/poster.types'
import cartUtils from '@/utils/cart.utils'
import posterUtils from '@/utils/poster.utils'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import PosterImages from './PosterImages'

export default function PosterView({ poster }: { poster: IPosterFull }) {
	const { cartList, add: addToStore } = useCartStore()

	const [selectedDimention, setSelectedDimension] = useState(0)
	const [selectedFrame, setSelectedFrame] = useState(0)

	const isInCart = cartUtils.isInCart(
		{
			_id: poster._id,
			dimensionId: poster.dimensions[selectedDimention]._id,
			frameId: poster.frames[selectedFrame]._id,
		},
		cartList
	)
	const price = posterUtils.calculatePosterPrice(
		poster!,
		selectedDimention,
		selectedFrame
	)

	return (
		<section className=''>
			<div className='container pb-20'>
				<div className='grid grid-cols-2 gap-20'>
					<PosterImages poster={poster} />
					<div className=''>
						<h1 className='heading-2 text-main'>{poster?.name}</h1>
						<div className='mt-5 heading-3 font-normal'>{price} руб.</div>
						<div className='mt-5'>
							<p className='heading-4'>Размеры:</p>
							<div className='mt-2 flex gap-5'>
								{poster?.dimensions?.map((dimension, index) => (
									<Button
										className='text-base'
										onClick={() => setSelectedDimension(index)}
										key={dimension._id}
										variant={index == selectedDimention ? 'default' : 'outline'}
									>
										{dimension?.name}
									</Button>
								))}
							</div>
						</div>
						<div className='mt-5'>
							<p className='heading-4'>Рамки:</p>
							<div className='mt-2 flex gap-5'>
								{poster?.frames?.map((frame, index) => (
									<Button
										className='text-base'
										onClick={() => setSelectedFrame(index)}
										key={frame._id}
										variant={index == selectedFrame ? 'default' : 'outline'}
									>
										{frame?.name}
									</Button>
								))}
							</div>
						</div>

						<p className='mt-10 text-body-lg whitespace-pre-wrap'>
							{poster?.description}
						</p>

						{isInCart ? (
							<Button className='mt-5 w-full' size={'xl'} asChild>
								<a href='/cart'>Перейти в корзину</a>
							</Button>
						) : (
							<Button
								className='mt-5 w-full'
								size={'xl'}
								onClick={() => {
									if (poster?._id)
										addToStore({
											_id: poster._id,
											dimensionId: poster.dimensions[selectedDimention]._id,
											frameId: poster.frames[selectedFrame]._id,
										})
								}}
							>
								Добавить в корзину
							</Button>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
