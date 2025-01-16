import { z } from 'zod'

const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z
    .string()
    .regex(
      passwordRegex,
      'A senha deve conter pelo menos 8 caracteres, 1 número e 1 caractere especial'
    ),
})

export type LoginForm = z.infer<typeof LoginSchema>
