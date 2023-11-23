import { schemaForm } from '../zod/loginSchema'

export type FormProps = Zod.infer<typeof schemaForm>
