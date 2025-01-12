import { LoaderCircle } from 'lucide-react'

export default function PageLoading() {
	return (
		<section className='py-[250px]'>
			<div className='container flex justify-center'>
				<LoaderCircle className='animate-spin' size={60} />
			</div>
		</section>
	)
}
