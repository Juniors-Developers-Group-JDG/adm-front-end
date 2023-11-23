import { zodResolver } from '@hookform/resolvers/zod'
import { FormProps } from '../types/login'
import { useForm } from 'react-hook-form'
import { schemaForm } from '../zod/loginSchema'

export const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
  }

  return {
    errors,
    register,
    handleSubmit,
    handleFormSubmit,
  }
}
