import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Collapse } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import { Main_Logo } from '../assets/navbar';
import { navArr } from '../utils/Navbar';
export default function ResponsiveNaveBar() {
const [isOpen, setIsOpen] = useState<boolean>(false)


    const router = useRouter()

  return (
    <>
    <section className=' main-container w-full h-16 flex items-center justify-between bg-white lg:hidden sticky top-0 z-50 '>
        <div>
          <img src={Main_Logo.src} alt="" className='w-32 h-12' />
        </div>
        <div >
          {
            !isOpen ? (
            
              <MenuIcon onClick={()=>{setIsOpen(true)}}/>
            ):(
            
              <ClearIcon className='!text-red-600' onClick={()=>{setIsOpen(false)}}/>
            )
          }
        </div>
        
    </section>
    <section className='z-[999]'>
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      {
        navArr.map((item)=>(
<div className='w-full p-4 border border-gray-200 flex items-center justify-between ' onClick={()=>{
  router.push(`${item.path}`)
}} key={item.id}>
            <h1 className='text-lg font-bold text-red-600 '>{item.title}</h1>
            <ArrowForwardIosIcon className='!text-red-600'/>
    </div>
        ))
      }
    
    </Collapse>
    </section>
    </>
  )
}
