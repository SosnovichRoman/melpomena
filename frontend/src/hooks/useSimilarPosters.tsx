import posterService from '@/services/poster.service'
import { IPosterFull } from '@/types/poster.types'
import { useQuery } from '@tanstack/react-query'

export default function useSimilarPosters(poster: IPosterFull) {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['poster', poster._id],
		queryFn: async () =>
			await posterService.getByCategories(
				poster?.categories?.map((c) => c.slug)
			),
	})

	return { posters: data, isLoading, isError, error }
}
