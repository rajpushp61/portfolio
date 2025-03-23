import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  const[isScroll,setIsScroll] = useState(false)
    const sideMenuRef = useRef()
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY >50)
          {
            setIsScroll(true)
          }
          else{
            setIsScroll(false)
          }
      })
    },[])
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center  z-50 ${isScroll?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href='#top'>
            <h2 className='w-28 cursor-pointer mr-14' alt='logo'>My Portfolio</h2>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll?"":"bg-white shadow-sm"} bg-opacity-50 `}>
            <li><a className="font-Ovo"href= "#top">Home</a></li>
            <li><a className="font-Ovo"href= "#about">About</a></li>
            <li><a className="font-Ovo"href= "#skills">Skills</a></li>
            <li><a className="font-Ovo"href= "#project">Projects</a></li>
            <li><a className="font-Ovo"href= "#contact">Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
        <button className='block md:hidden ml-3'onClick={openMenu}>
        <Image src={assets.menu_black} alt='menu' className='w-6'/>
        </button>           
        </div>
        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute top-5 right-5'onClick={closeMenu}>
                <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer' />
            </div>
            <li><a className="font-Ovo"onClick={closeMenu} href= "#top">Home</a></li>
            <li><a className="font-Ovo"onClick={closeMenu} href= "#about">About</a></li>
            <li><a className="font-Ovo"onClick={closeMenu} href= "#skills">Skills</a></li>
            <li><a className="font-Ovo"onClick={closeMenu} href= "#project">Projects</a></li>
            <li><a className="font-Ovo"onClick={closeMenu} href= "#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
