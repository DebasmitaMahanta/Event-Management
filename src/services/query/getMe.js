import api from '@/config/api'
import { queryOptions, useQuery } from '@tanstack/react-query'

const fetchMe = async () => {
  const response = await api.get('/v1/auth/me')

  return response.data
}

export const useMeQueryOptions = () => {
  return queryOptions({
    queryKey: ['me'],
    queryFn: () => fetchMe(),
    staleTime: 1000 * 60 * 5,
    retry: 0,
  })
}

export const useMeQuery = () => {
  return useQuery(useMeQueryOptions())
}
