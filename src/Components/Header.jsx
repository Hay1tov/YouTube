import React from 'react'
import YouTube from '../images/youTube.png'
import profile from '../images/Profile.png'

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between items-center px-6 py-2'>
        <div className='flex gap-6 items-center'>
          <i className='bx  bx-menu-wider text-2xl text-gray-500'  ></i>
          <img src={YouTube} alt="" className='w-[90px] h-[20px]' />
        </div>
        <div className='flex relative'>
          <input type="text" placeholder='Search' className='w-[602px] h-[40px] border-2 border-gray-300 rounded-[2px] outline-none placeholder:text-gray-600 pl-2' />
          <button className='w-[64px] h-[40px] border-2 border-gray-300 rounded-[2px] flex justify-center items-center absolute right-0'><i class='bx  bx-search outline-none text-[18px]'  ></i> </button>
        </div>
        <div>
          <img src={profile} alt="" className='w-8 h-8 rounded-full'/>
        </div>
      </nav>
    </header>
  )
}

export default Header