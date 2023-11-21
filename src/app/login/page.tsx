import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineLockClosed,
} from 'react-icons/hi2'

export default function Login() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-primary-700">
      <form className="flex w-full max-w-2xl flex-col justify-center gap-4">
        <TextInput
          label="Email"
          placeholder="anaclaraaraujo@email.com"
          type="email"
          iconLeft={<HiOutlineEnvelope />}
        />
        <TextInput
          label="Senha"
          placeholder="****"
          type="password"
          iconLeft={<HiOutlineLockClosed />}
          iconRight={<HiOutlineEye />}
        />

        <Button variant="primary" className="rounded-sm">
          Entrar
        </Button>
      </form>
    </main>
  )
}
