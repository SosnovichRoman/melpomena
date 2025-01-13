import posterService from '@/services/poster.service'
import { useQuery } from '@tanstack/react-query'

export default function usePopularPosters() {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['popular-posters'],
		queryFn: async () => await posterService.getPopularPosters(),
	})

	return { posters: data, isLoading, isError, error }
}
