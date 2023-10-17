import React from 'react'
import {
  Button,
} from "../materialTailwind/MaterialComponents";
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className='bg-[#002147] p-3'>
      <form className='max-w-screen-2xl mx-auto'>
        <div className=" h-[48px] flex items-center justify-center">
          <div className='relative'>
            <span className="absolute text-slate-400 text-xl inset-y-0 left-2 flex items-center pl-2">
              <CiSearch />
            </span>
            <input className="placeholder:text-slate-400 md:w-[506px] h-[48px] bg-white  border border-slate-300 rounded-sm rounded-r-none py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search course and discount courses" type="text" name="search" />
          </div>
          <Button className='h-[48px] bg-[#e25f30] rounded-sm rounded-l-none'>
            Search Course
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar