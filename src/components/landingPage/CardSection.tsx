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
  
</section>
  
  )
}  