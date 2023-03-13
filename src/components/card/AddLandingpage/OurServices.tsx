import { newArrCard } from '@/src/types';
import React from 'react';

type prop={
    item:newArrCard
}
function OurServices({item}:prop) {
    return (
        <section className='flex flex-col items-center justify-center w-full gap-6  bg-white hover:scale-[1.1] transition-all duration-300 border-2 my-10'>
      
        <div className=" w-14 h-14 mt-6 ">                                                 
        <img src={ item?.img?.src} alt="img" className='w-full h-full' />
        </div>
        <h4 className='text-2xl font-[Roboto]'>{item?.title}</h4>
        <p className='text-xl text-center text-gray-600 mb-6 font-[Roboto]'>{item?.content}</p>
       
        </section>
    );
}

export default OurServices;