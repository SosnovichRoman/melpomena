'use client'
import { Button } from '@/components/ui/button'
import usePosterBySlug from '@/hooks/usePosterBySlug'
import cartService from '@/services/cart.service'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import PosterImages from './PosterImages'

const PosterPage = () => {
	const { poster, isLoading, isError } = usePosterBySlug('alaindelon')
	const [selectedDimention, setSelectedDimension] = useState(0)
	const [selectedFrame, setSelectedFrame] = useState(0)
	console.log(poster)
	const isInCart = cartService.isInCart(poster?._id || '')
	const client = useQueryClient()

	const addPosterToCart = (_id: string) => {
		cartService.add(_id)
		client.invalidateQueries({ queryKey: 'cart-list' })
	}

	// const [loading, setLoading] = useState(true)
	// const [error, setError] = useState(false)
	// const [inCart, setInCart] = useState(false)
	// const id = useParams().id

	// const addToCart = () => {
	// 	const cartList = JSON.parse(localStorage.getItem('cartList')) || []

	// 	if (!cartList.find((item) => item?.product?._id == id)) {
	// 		cartList.push({ product, count: 1 })
	// 		localStorage.setItem('cartList', JSON.stringify(cartList))
	// 		setInCart(true)
	// 	}
	// }

	// useEffect(() => {
	// 	const cartList = JSON.parse(localStorage.getItem('cartList')) || []
	// 	if (cartList.find((item) => item?.product?._id == id)) setInCart(true)
	// }, [])

	// if (error)
	// 	return (
	// 		<main className='bg-accent-1'>
	// 			<section className='__container py-52 flex flex-col items-center'>
	// 				<h2 className='heading-2 text-main text-center'>Ошибка</h2>
	// 				<p className='text-body-lg mt-15'>Произошла ошибка загрузки товара</p>
	// 				<Link href='/' className='button-main-filled mt-15'>
	// 					Перейти в каталог
	// 				</Link>
	// 			</section>
	// 		</main>
	// 	)

	return (
		<main>
			<section className=''>
				<div className='container py-[90px]'>
					<div className='grid grid-cols-2 gap-20'>
						<PosterImages poster={poster} />
						<div className=''>
							<h1 className='heading-2 text-main'>{poster?.name}</h1>
							<div className='mt-5'>
								<p className='text-body-lg font-medium'>Размеры:</p>
								<div className='mt-2 flex gap-5'>
									{poster?.dimensions?.map((dimension, index) => (
										<Button
											className='text-base'
											onClick={() => setSelectedDimension(index)}
											key={dimension._id}
											variant={
												index == selectedDimention ? 'default' : 'outline'
											}
										>
											{dimension?.name}
										</Button>
									))}
								</div>
							</div>
							<div className='mt-5'>
								<p className='text-body-lg font-medium'>Рамки:</p>
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

							<pre className='mt-10 text-body-lg'>{poster?.description}</pre>

							{/* <div className='mt-10 flex items-baseline gap-[10px]'>
								<span className='text-body-sm text-main-3'>Размер:</span>
								<span className='text-body-lg font-semibold'>
									{poster?.size?.name}
								</span>
							</div> */}

							{isInCart ? (
								<Button asChild>
									<a href='/cart'>Перейти в корзину</a>
								</Button>
							) : (
								<Button
									onClick={() => {
										if (poster?._id) addPosterToCart(poster?._id)
									}}
								>
									Добавить в корзину
								</Button>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default PosterPage
