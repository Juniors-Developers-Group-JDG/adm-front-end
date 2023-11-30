import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProps, schemaForm } from '../zod/loginSchema'
import { useToasts } from './useToast'

export const useLogin = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaForm),
  })
  const { addToast } = useToasts()

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
    addToast({
      title: 'Sucesso!',
      type: 'success',
      durationInMs: 3000,
      closeButton: true,
      content: 'Login realizado com sucesso!',
    })
    reset()
  }

  return {
    errors,
    register,
    reset,
    handleSubmit,
    handleFormSubmit,
  }
}
