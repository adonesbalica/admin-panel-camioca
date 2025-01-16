import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})

export type LoginForm = z.infer<typeof LoginSchema>
