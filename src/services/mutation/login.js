import api from '@/config/api'
import { useMutation } from '@tanstack/react-query'

const signInAction = async ({ email, password }) => {
  const response = await api.post('/v1/auth/login', {
    email,
    password,
  })
  return response.data
}

export const useLogInMutation = () =>
  useMutation({
    mutationFn: signInAction,
  })
