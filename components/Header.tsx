import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
function Header() {
  return (
    <div>
        <nav className=' w-[100%] h-[70px] bg-stone-300 flex items-center justify-evenly '>
            <span className='font-bold text-3xl text-white'>Purity.</span>
            <ul className='flex flex-row'>
                <input type="text" placeholder='Search for Gold jewelery,Diamond Jewelery and more... ' className='sm:h-[40px] sm:w-[600px] rounded-xl rounded-r-none sm:pl-6 pl-2 h-[40px] w-[190px] lg:w-[600px] md:w-[350px]' />
                <button className='bg-white rounded-xl h-[40px] rounded-l-none pr-3 pl-3'><BsSearch/></button>
            </ul>
            <ul className='flex flex-row space-x-10 text-white'>   
                <li className='hidden md:hidden lg:block sm:hidden'>
                <BiHeart className='h-7 w-7'/>
                </li>
                <li className='hidden md:hidden lg:block sm:hidden'>
                  <CgProfile className='h-6 w-6' />
                </li>
                <li className='hidden md:hidden lg:block sm:hidden'>
                <BsCart  className='h-6 w-6'/>  
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header