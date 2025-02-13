
"use client"
 import Link from 'next/link';
import { useState } from 'react'
const Navbar = () => {
const [isClick,setClick] = useState(false)
const toggleNav = () =>{
  setClick(!isClick)
}
  return (
    <div>
       <header>
            <nav className=' justify-between flex bg-[#101010] h-[90px] text-white px-20 w-full mx-auto max-w-[1440px] '>
                  <div className='flex  pt-[20px]'>
                    <p className='text-3xl font-bold md:text-4xl '>audiophile</p>
                </div>
                <div className='md:flex gap-8 pt-8 hidden'>
                <Link href="/">Home</Link>
            <Link href="/About" className='text-[#D87D4A]'>About Us</Link>
            <Link href="/Contact">Contact</Link>
                </div>
                <div className='pt-9 gap-5 md:flex hidden  '>
                <Link href="/Signup">Signup</Link>
            <Link href="/Login">Login</Link>
                </div>     
              <div className='md:hidden flex items-center'>
                <button className='inline-flex items-center justify-center p-2  rounded-md text-white md:text-white
                hover:text-white focus:outline-none focus:ring-inset focus:ring-white' onClick={toggleNav}
                >
{isClick ? (
<svg className='h-6 w-6'
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox='0 0 24 24'
stroke='currentColor'
>
  <path
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth={2}
  d='M6 18L18 6M6 6l12 12'
  />
</svg>
):(
  <svg className='h-6 w-6'
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox='0 0 24 24'
stroke='currentColor'
>
  <path
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth={2}
  d='M4 6h16M4 12h16m-7 b 6h7'
  />
  </svg>
)}
                </button>

              </div>
            </nav>
        </header>
         <hr/>
        {isClick && (
          <div>
            <div className=' flex px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-col  md:hidden'>
            <Link href="/">Home</Link>
            <Link href="/About" className='text-[#D87D4A]'>About Us</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Signup">Signup</Link>
            <Link href="/Login">Login</Link>
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar



