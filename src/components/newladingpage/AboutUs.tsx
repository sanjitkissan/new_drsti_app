import React, { useState } from 'react';
import { web2 } from '@/src/assets/newladingpage';
import { aboutusArr } from '@/src/utils/newlandingpage';
import AboutUsCard from '../card/AddLandingpage/AboutUsCard';
function AboutUs() {
   const [isActiveIndex, setIsActiveIndex]=useState<number>(1)
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-6 my-24">
        <div>
          <h1 className="text-4xl text-[#e2689a] font-extrabold text-center font-[Roboto]">
          Why Workplace <span className='text-black'>Marketing?</span>
          
          </h1>
          <p className="text-gray-600 text-lg my-2 font-[Roboto]">Target corporate officers and business executives who influence the brand selection and procurement decisions.</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 ">
          {
            aboutusArr.map((val:any,index:number)=>(

            <span className={`${isActiveIndex == index && " border-2 !border-[#e2689a] text-[#e2689a]"} center rounded-md hover:text-[#493d69] text-black-600 border-transparent cursor-pointer  border-2 hover:border-[#493d69] px-20 py-4 active:scale-95 bg-white-500 shadow-lg shadow-red-100/50`} key={val.id}
            onClick={()=>{
              setIsActiveIndex(index)
            }}
            > 
              <button className="font-[Roboto]  text-lg ">{val.title}</button>
            </span>
            ))
          }

          </div>
          <div className='w-full'>
            {
              <AboutUsCard item={aboutusArr[isActiveIndex].list}/>
            }
          </div>

        
      </section>
    );
}

export default AboutUs;