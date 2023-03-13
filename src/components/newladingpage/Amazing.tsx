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
          <span className='text-black'>Amazing</span> Features
          </h1>
        <p className="text-gray-600 text-lg  font-[Roboto]">Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
        
        <div className='flex items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center gap-6'> 
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3 '>
        <PublicIcon className='!text-[#e2689a]'/>
        <span className='px-8 py-3 font-[Roboto]'>
            <p className='text-[#252d31] text-lg'>Feature Name</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        <SmsIcon className='!text-[#e2689a]'/>
        <span className=' px-8 py-3 font-[Roboto]'>
         <p className='text-[#252d31] text-lg'>Message</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        <AccountBalanceIcon className='!text-[#e2689a]'/>
        <span className='px-8 py-3 font-[Roboto] '>
          <p className='text-[#252d31] text-lg'>Sell Everywhere</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
         </div>
       <div className='w-full '>
       <img src={ features.src} alt="img" className='w-full h-full' />
       </div>
       <div className='w-full flex flex-col items-center justify-center gap-6'>
       <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
       <CreditCardIcon className='!text-[#e2689a]'/>
        <span className='px-8 py-3 font-[Roboto] '>
          <p className='text-[#252d31] text-lg'>Secured Payments</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        <LibraryBooksIcon className='!text-[#e2689a]'/>
        <span className='px-8 py-3 font-[Roboto]'>
         <p className='text-[#252d31] text-lg'>Customer Records</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-[#e2689a4f]  rounded-2xl w-2/3'>
        <DirectionsBusFilledIcon className='!text-[#e2689a]'/>
        <span className='px-8 py-3 font-[Roboto]'>
        <p className='text-[#252d31] text-lg'>Feature Name</p>
            <p className='text-[#adb5bd;] text-lg'>Sub Headline</p>
        </span>
        </span>
       </div>
       </div>
      </section>
    );
}

export default Amazing;