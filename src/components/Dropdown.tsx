import { Calendar, FileUser, Rocket, Umbrella, User } from 'lucide-react'
import Link from 'next/link'

export const Dropdown = () => {
  return (
    <div className="absolute w-56 bg-white top-24 left-5 rounded-xl ">
      <ul className="flex flex-col py-3 px-5 gap-y-3">
        <li className="font-medium text-sm">
          <Link href="/" className="flex items-center gap-x-5">
            <User stroke="#828282" />
            My Details
          </Link>
        </li>
        <li className="font-medium text-sm">
          <Link href="/" className="flex items-center gap-x-5">
            <Calendar stroke="#828282" />
            My Calendar
          </Link>
        </li>
        <li className="font-medium text-sm">
          <Link href="/" className="flex items-center gap-x-5">
            <Umbrella stroke="#828282" />
            Vacations
          </Link>
        </li>
        <li className="font-medium text-sm">
          <Link href="/" className="flex items-center gap-x-5">
            <FileUser stroke="#828282" />
            Corporative CV
          </Link>
        </li>
        <li className="font-medium text-sm">
          <Link href="/" className="flex items-center gap-x-5">
            <Rocket stroke="#828282" />
            Performance Review
          </Link>
        </li>
      </ul>
    </div>
  )
}
