import { tesimonialsCardArr } from '@/src/utils/newlandingpage';
import React from 'react';
import TesimonialsServices from '../card/AddLandingpage/TesimonialsServices';

function Testimonials() {
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-4 my-24 ">
        <div>
          <h1 className="text-4xl text-[#e2689a] font-extrabold text-center font-[Roboto]">
          Testimonials
          </h1>
          <p className="text-gray-600 text-lg my-2 font-[Roboto]">Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
        </div>

        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
     {
       
       tesimonialsCardArr.map((item)=>(
        <div key={item.id}>
            <TesimonialsServices item={item} />

        </div>
     
     ))}
</div>



        </section>
    );
}

export default Testimonials;