import { features } from '@/src/assets/newladingpage';
import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import PublicIcon from '@mui/icons-material/Public';
import SmsIcon from '@mui/icons-material/Sms';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Amazing() {
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-4 my-24">
        
         <h1 className="text-4xl text-[#e2689a] font-extrabold text-center font-[Roboto]">
          <span className='text-black'>Amazing</span> Facts
          </h1>
        <p className="text-gray-600 text-lg  font-[Roboto]">This is the opportunity for your brand to influence the workplace!</p>
        
        <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center gap-6'> 
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3 '>
        {/* <PublicIcon className='!text-[#e2689a]'/> */} 
        <span className='px-8 py-3 font-[Roboto]'>
            <p className='text-[#252d31] text-lg'>DOOH is 382% more effective than TV, 200% more effective than print.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        {/* <SmsIcon className='!text-[#e2689a]'/> */}
        <span className=' px-8 py-3 font-[Roboto]'>
         <p className='text-[#252d31] text-lg'>91% have more positive feelings about brands after experiencing events.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        {/* <AccountBalanceIcon className='!text-[#e2689a]'/> */}
        <span className='px-8 py-3 font-[Roboto] '>
          <p className='text-[#252d31] text-lg'>94% of hybrid spaces offer amenities like networking, events, gyms and more.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
         </div>
       <div className='w-full '>
       <img src={ features.src} alt="img" className='w-full h-full' />
       </div>
       <div className='w-full flex flex-col items-center justify-center gap-6'>
       <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
       {/* <CreditCardIcon className='!text-[#e2689a]'/> */}
        <span className='px-8 py-3 font-[Roboto] '>
          <p className='text-[#252d31] text-lg'> 5+ Million The number of corporate employees will cross by 2024.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        {/* <LibraryBooksIcon className='!text-[#e2689a]'/> */}
        <span className='px-8 py-3 font-[Roboto]'>
         <p className='text-[#252d31] text-lg'>67% Increase in working professionals in flexible working spaces.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        {/* <DirectionsBusFilledIcon className='!text-[#e2689a]'/> */}
        <span className='px-8 py-3 font-[Roboto]'>
        <p className='text-[#252d31] text-lg'>10.3 mn seats are projected to be taken up by elite audiences in IT parks.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
       </div>
       </div>
      </section>
    );
}

export default Amazing;