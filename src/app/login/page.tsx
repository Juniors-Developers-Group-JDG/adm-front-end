'use client'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineLockClosed,
} from 'react-icons/hi2'
import { HiOutlineEyeOff } from 'react-icons/hi'
import { useToasts } from '@/hooks/useToast'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const { errors, handleSubmit, handleFormSubmit, register } = useLogin()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <main className="flex h-screen w-full items-center justify-center bg-primary-700">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex max-w-sm flex-col justify-center gap-4 md:w-full md:max-w-2xl"
      >
        <TextInput
          label="Email"
          id="email"
          {...register('email')}
          placeholder="anaclaraaraujo@email.com"
          type="email"
          iconLeft={<HiOutlineEnvelope />}
        />
        {errors.email?.message && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}

        <TextInput
          label="Senha"
          id="password"
          {...register('password')}
          placeholder="****"
          type={showPassword ? 'text' : 'password'}
          iconLeft={<HiOutlineLockClosed />}
          iconRight={
            showPassword ? (
              <HiOutlineEyeOff
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <HiOutlineEye
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )
          }
        />
        {errors.password?.message && (
          <p className="text-red-600">{errors.password?.message}</p>
        )}

        <Button variant="primary" type="submit" className="rounded-sm">
          Entrar
        </Button>
      </form>
    </main>
  )
}
