import { Button } from '@/components/ui/button'

export default function Hero() {
	return (
		<section className='relative md:h-[720px]'>
			<img
				className='md:absolute inset-0 w-full h-full object-cover'
				src='/img/home/hero-bg.png'
				alt='hero'
			/>
			<div className='container relative z-10 h-full flex items-center'>
				<div className='md:p-10 p-5 md:max-w-[600px] max-md:mt-5 rounded-xl space-y-10 flex flex-col items-start bg-light-bg'>
					<h1 className='heading-2 text-main'>
						Сделайте свой интерьер уникальным
					</h1>
					<p className='text-body-lg'>
						Не соглашайтесь на скучные стены. Украсьте их яркими постерами,
						которые будут вдохновлять вас каждый день и создавать настроение.
					</p>
					<Button asChild className='text-lg' size={'xl'}>
						<a href='/category'>Перейти в каталог</a>
					</Button>
				</div>
			</div>
		</section>
	)
}
