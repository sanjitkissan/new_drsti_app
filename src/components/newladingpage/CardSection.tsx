import React from 'react';
import { web1 } from '@/src/assets/newladingpage';
import { newCardArr } from '@/src/utils/newlandingpage';
import OurServices from '../card/AddLandingpage/OurServices';
function CardSection() {
    return (
        <section className={`w-full main-container overflow-hidden flex flex-col items-center justify-between leading-3 my-24`} >       
    <div className='w-full center'>
        <h1 className='w-3/5 text-4xl text-[#e2689a] font-bold text-center font-[Roboto]'><span className='text-black'>Our</span> Services</h1>
    </div>
     <div className='w-full flex items-center justify-center gap-6'>
     <p className='text-center text-lg  text-gray-600 my-2 font-[Roboto]'>coveted audience to get engage with each other to experience the product or services at their workspaces.</p>
</div>
<div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
     {
       
       newCardArr.map((item)=>(
        <div key={item.id}>
            <OurServices item={item} />

        </div>
     
     ))}
</div>
</section>
    );
}

export default CardSection;