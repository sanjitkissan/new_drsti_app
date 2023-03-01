import { homeCardArr } from '@/src/utils/landingpage'
import React from 'react'
import HomeCard from '../card/landingPage/HomeCard'

export default function CardSection() {
  return (
    <section className={`w-full main-container overflow-hidden flex flex-col items-center justify-between leading-3 my-24 gap-4 lg:gap-0`} >       
    <div className='w-full center'>
        <h1 className='w-3/5 text-5xl text-[#204991] font-bold text-center'>Bringing office buildings to life with dynamic content.</h1>
    </div>
     <div className='w-full flex lg:flex-row flex-col items-center justify-between gap-6'>
     {
       
       homeCardArr.map((item)=>(
        <div key={item.id}>
            <HomeCard item={item} />

        </div>
     
     ))}
</div>
  <div className='w-full flex flex-col items-center justify-center gap-4 mt-4'>
     <p className='text-center text-xl tracking-wide  w-2/3 text-gray-800'>ECN content engages & keeps office professionals informed throughout their working day. </p>
     <button type='button' className='rounded-full text-white font-bold py-3 px-8 bg-gradient-to-r from-red-600 to-blue-600 '>Contact us</button>
 </div>
</section>
  
  )
}  