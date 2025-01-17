import { Calendar, FileUser, Rocket, Umbrella, User } from 'lucide-react'
import Link from 'next/link'

export const Dropdown = () => {
  return (
    <div className="absolute w-56 bg-white top-[85px] left-5 rounded-xl">
      <ul className="flex flex-col py-3 px-5 gap-y-3">
        <li className="group font-medium text-sm hover:bg-[rgba(47,128,237,0.3)] rounded">
          <Link
            href="/"
            className="flex items-center gap-x-2 py-[7px] px-[11px] hover:text-[#2F80ED]"
          >
            <User
              stroke="#828282"
              className="transition-colors duration-300 group-hover:stroke-[#2F80ED]" // Aplica a cor no hover
            />
            My Details
          </Link>
        </li>
        <li className="group font-medium text-sm hover:bg-[rgba(47,128,237,0.3)] rounded">
          <Link
            href="/"
            className="flex items-center gap-x-2 py-[7px] px-[11px] hover:text-[#2F80ED]"
          >
            <Calendar
              stroke="#828282"
              className="transition-colors duration-300 group-hover:stroke-[#2F80ED]" // Aplica a cor no hover
            />
            My calendar
          </Link>
        </li>
        <li className="group font-medium text-sm hover:bg-[rgba(47,128,237,0.3)] rounded">
          <Link
            href="/"
            className="flex items-center gap-x-2 py-[7px] px-[11px] hover:text-[#2F80ED]"
          >
            <Umbrella
              stroke="#828282"
              className="transition-colors duration-300 group-hover:stroke-[#2F80ED]" // Aplica a cor no hover
            />
            Vacations
          </Link>
        </li>
        <li className="group font-medium text-sm hover:bg-[rgba(47,128,237,0.3)] rounded">
          <Link
            href="/"
            className="flex items-center gap-x-2 py-[7px] px-[11px] hover:text-[#2F80ED]"
          >
            <FileUser
              stroke="#828282"
              className="transition-colors duration-300 group-hover:stroke-[#2F80ED]" // Aplica a cor no hover
            />
            Corporate CV
          </Link>
        </li>
        <li className="group font-medium text-sm hover:bg-[rgba(47,128,237,0.3)] rounded">
          <Link
            href="/"
            className="flex items-center gap-x-2 py-[7px] px-[11px] hover:text-[#2F80ED]"
          >
            <Rocket
              stroke="#828282"
              className="transition-colors duration-300 group-hover:stroke-[#2F80ED]" // Aplica a cor no hover
            />
            Performance review
          </Link>
        </li>
      </ul>
    </div>
  )
}
