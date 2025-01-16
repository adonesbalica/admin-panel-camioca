'use client'

import { Bell, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { ProfilePicture } from './ProfilePicture'
import { useState } from 'react'
import { Dropdown } from './Dropdown'

export const SearchNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="flex items-center px-4 py-5 w-screen">
      <div className="flex items-center gap-x-4 mr-8">
        <ProfilePicture src="/avatar.png" alt="profile pic" size={40} />
        <p className="font-medium text-xl max-w-xs truncate">Dominique Ch.</p>
        <div onClick={handleOpenDropdown} className="cursor-pointer">
          {isDropdownOpen ? (
            <ChevronUp size={20} stroke="#2F80ED" />
          ) : (
            <ChevronDown size={20} stroke="#8E8E93" />
          )}
        </div>
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
            className="pl-10 pr-4 py-2 rounded-lg focus:outline-none w-full md:w-1/2 lg:w-2/3 xl:w-1/2"
          />
        </div>

        <div className="flex items-center justify-center ml-4">
          <Bell size={20} stroke="#2F80ED" fill="#2F80ED" />
        </div>
      </div>

      {isDropdownOpen && <Dropdown />}
    </div>
  )
}
