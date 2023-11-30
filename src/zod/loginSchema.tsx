import { z } from 'zod'

export const schemaForm = z
  .object({
    email: z.string().email('E-mail inválido.'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres.'),
  })
  .transform((field) => ({
    email: field.email,
    password: field.password,
  }))

export type FormProps = Zod.infer<typeof schemaForm>
