import posterService from '@/services/poster.service'
import { useQuery } from '@tanstack/react-query'

export default function usePosterBySlug(slug: string) {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['poster', slug],
		queryFn: async () => await posterService.getBySlug(slug),
		enabled: !!slug,
	})

	return { poster: data, isLoading, isError, error }
}
