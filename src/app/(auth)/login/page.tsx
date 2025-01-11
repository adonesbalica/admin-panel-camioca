import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mt-36 mb-44 text-center">
        <h1 className="font-bold text-4xl mb-2">CAMIOCA</h1>
        <p className="">Intelligent Service</p>
      </header>

      <div className="text-center">
        <h2 className="font-bold text-[18px] mb-7">Welcome back!</h2>
        <form action="" className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="email"
            className="flex flex-col w-56 items-start gap-x-2"
          >
            <span className="text-xs">Email address</span>
            <input
              type="email"
              id="email"
              className="bg-[#F1F1F1] h-9 w-[226px] rounded placeholder:text-sm placeholder:text-[#8E8E93] placeholder:px-[10px] placeholder:py-14px"
              placeholder="example@mail.com"
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col w-56 items-start gap-x-2"
          >
            <span className="text-xs">Password</span>
            <input
              type="password"
              id="password"
              className="bg-[#F1F1F1] h-9 w-[226px] rounded placeholder:text-sm placeholder:text-[#8E8E93] placeholder:px-[10px] placeholder:py-14px"
              placeholder="Password"
            />
          </label>
          <p className="text-xs text-[#8E8E93] w-[226px] text-left	">
            Use at least 8 characters with 1 number, and one special character.
          </p>

          <input
            type="submit"
            value="LOGIN IN"
            className="cursor-pointer mt-4 w-[226px] text-medium text-white bg-[#27AE60] py-2 rounded-[34px]"
          />

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
