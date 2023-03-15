import { ourWorkImgOne, ourWorkImgThree, ourWorkImgTwo } from '@/src/assets/landinPage'
import React from 'react'

export default function Brandactivation() {
  return (
    <section className='w-full main-container flex lg:flex-row flex-col items-center justify-between h-[60vh] gap-4 lg:gap-24  my-24 mt-52 '>
         <div className='w-full relative h-full'>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute bottom-0 left-0 rounded-lg !overflow-hidden bg-white !p-2 z-50'>
              <img src={ourWorkImgOne.src} alt="" className='w-full h-full rounded-lg' />
          </div>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-16 lg:left-48 bottom-10 left-24 rounded-lg overflow-hidden z-30 bg-white !p-2 '>
          <img src={ourWorkImgTwo.src} alt="" className='w-full h-full rounded-lg' />
          </div>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-32 lg:left-96 bottom-16 left-44 rounded-lg overflow-hidden '>
          <img src={ourWorkImgThree.src} alt="" className='w-full h-full' />
          </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center lg:pl-28 lg:ml-44 lg:p-10 gap-6'>
      <span className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='text-4xl lg:text-7xl font-bold capitalize'>brand</h1>
          <h1 className='text-4xl lg:text-7xl font-bold capitalize ml-20 text-red-600'>activation</h1>
      </span>
      <div className='w-full lg:w-1/2 flex flex-col items-start  justify-center gap-4'>
          <h1 className='text-3xl text-gray-700 capitalize'>out of home</h1>
          <div className='w-full flex item-end justify-start gap-4'>
              <span className='w-6 h-auto bg-red-600'></span>
              <p className='text-gray-700 '>We create and execute innovative and inspiring campaigns domestically and globally for our clients. Our case studies are a selection of the amazing work we have co-ordinand alongside our trusted partners.</p>
          </div>
      </div>
    </div>
   
  </section>
  )
}
