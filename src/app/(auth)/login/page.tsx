'use client'

import Link from 'next/link'

import { LoginForm, LoginSchema } from '@/utils/schemas/auth.schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'email@gmail.com',
      password: 'abc@12345',
    },
  })

  const handleFormSubmit = async () => {
    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      router.push('/dashboard')
    } catch (error) {
      console.error('Erro ao enviar formulário', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mt-36 mb-44 text-center">
        <h1 className={`font-bold text-4xl mb-2`}>CAMIOCA</h1>
        <p className="">Intelligent Service</p>
      </header>

      <div className="text-center">
        <h2 className="font-bold text-[18px] mb-7">Welcome back!</h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col items-center gap-y-2"
        >
          <label
            htmlFor="email"
            className="flex flex-col items-start gap-y-[6px] w-[226px]"
          >
            <span className="inline-block text-xs">Email address</span>
            <input
              {...register('email')}
              type="text"
              id="email"
              placeholder="example@gmail.com"
              className="placeholder:text-[#8E8E93] placeholder:font-light placeholder:font-sm px-[14px] py-[10px] bg-[#F1F1F1] rounded outline-none w-full font-light"
            />
            {errors.email && errors.email.message}
          </label>

          <label
            htmlFor="password"
            className="flex flex-col items-start gap-y-[6px] w-[226px]"
          >
            <span className="inline-block text-xs">Password</span>
            <input
              {...register('password')}
              type="password"
              id="password"
              placeholder="Password"
              className="placeholder:text-[#8E8E93] placeholder:font-light placeholder:font-sm px-[14px] py-[10px] bg-[#F1F1F1] rounded outline-none w-full font-light"
            />
            {errors.password && errors.password.message}
          </label>

          <p className="text-xs text-[#8E8E93] w-[226px] text-left	">
            Use at least 8 characters with 1 number, and one special character.
          </p>

          <button
            type="submit"
            className="cursor-pointer mt-4 w-[226px] font-medium text-white bg-[#27AE60] py-2 rounded-[34px]"
          >
            {loading ? 'Loading...' : 'LOGIN'}
          </button>

          <Link
            href="/forgot-password"
            className="text-[#8E8E93] text-xs underline"
          >
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
