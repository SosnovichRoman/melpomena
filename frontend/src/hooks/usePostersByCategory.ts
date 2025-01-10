import posterService from '@/services/poster.service'
import { useQuery } from '@tanstack/react-query'

export default function usePostersByCategory(category: string) {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['posters', category],
		queryFn: async () => await posterService.getAllByCategory(category),
		enabled: !!category,
	})

	return { posters: data, isLoading, isError, error }
}
