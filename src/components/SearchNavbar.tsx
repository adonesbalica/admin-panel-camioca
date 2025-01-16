import { Bell, ChevronDown, Search } from 'lucide-react'
import ProfilePicture from './ProfilePicture'

export const SearchNavbar = () => {
  return (
    <div className="flex items-center px-4 py-5 w-screen">
      <div className="flex items-center gap-x-4 mr-8">
        <ProfilePicture src="/avatar.png" alt="profile pic" size={40} />
        <p className="font-medium text-xl max-w-xs truncate">Dominique Ch.</p>
        <ChevronDown size={20} className="cursor-pointer" stroke="#8E8E93" />
      </div>
      <div className="flex items-center w-full">
        <div className="flex items-center relative flex-1">
          <Search
            size={20}
            stroke="#2F80ED"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          />
          <input
            type="text"
            placeholder="Quick search"
            className="pl-10 pr-4 py-2 rounded-lg focus:outline-none w-1/2"
          />
        </div>

        <div className="flex items-center justify-center ml-4">
          <Bell size={20} stroke="#2F80ED" fill="#2F80ED" />
        </div>
      </div>
    </div>
  )
}
