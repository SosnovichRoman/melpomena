import { Button } from '@/components/ui/button'

export default function NotFound({ title = 'Страница не найдена' }) {
	return (
		<section className='py-[250px]'>
			<div className='conteiner flex items-center justify-center flex-col'>
				<p className='heading-3'>{title}</p>
				<Button asChild className='mt-5' size={'lg'}>
					<a href='/' className='text-body-sm font-normal'>
						Вернуться на главную
					</a>
				</Button>
			</div>
		</section>
	)
}
