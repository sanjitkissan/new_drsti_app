import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <section className='py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
    <section className='w-full main-container flex flex-col lg:flex-row items-center justify-between gap-6 py-12'>
      <div className='w-full flex items-start justify-start gap-10'>
        <span>
            <h1 className='text-xl font-bold cursor-pointer'>Quick Link</h1>
            <p className='text-lg font-medium cursor-pointer capitalize'>about</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>services</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>blog</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>contact</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>pricing</p>
        </span>
        <span>
        <h1 className='text-xl font-bold cursor-pointer'>Support</h1>
        <p className='text-lg font-medium cursor-pointer capitalize'>privacy policy</p>
        <p className='text-lg font-medium cursor-pointer capitalize'>support</p>
        <p className='text-lg font-medium cursor-pointer capitalize'>disclaimer</p>
        <p className='text-lg font-medium cursor-pointer capitalize'>FAQ</p>
        <p className='text-lg font-medium cursor-pointer capitalize'>terms & conditions</p>
        </span>
      </div>

      <div className='w-full  flex flex-col items-center justify-start gap-6 bg-black p-6 py-9'>
        <p className='text-lg font-medium tracking-wider text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt odit libero, reiciendis magnam natus.</p>
        <span className='w-full center gap-6'>
            <FacebookIcon className='!text-white cursor-pointer'/>
            <InstagramIcon className='!text-white cursor-pointer'/>
            <WhatsAppIcon className='!text-white cursor-pointer'/>
            <YouTubeIcon className='!text-white cursor-pointer'/>
        </span>
      </div>

      <div className='w-full flex flex-col items-start justify-start gap-6'>
        <h1 className='text-2xl font-bold capitalize'>subscribe our newsletter</h1>
        <p className='text-lg font-medium tracking-wider'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vel ratione qui.</p>
        <span className='w-full flex flex-col md:flex-row items-center justify-start gap-6'>
            <input type="email" name="email" id="" className='px-6 border border-gray-400 py-3' placeholder='Your Email' />
            <button className='uppercase text-white font-bold px-8 py-3 bg-red-500'>subscribe</button>
        </span>
      </div>
      
    </section>
    <section className='w-full center'>
    <h1 className="p-4  w-full text-center main-container text-base fount-bold text-gray-800 ">
          Copyright &copy; {new Date().getFullYear()} dRSTi Communications
        
        </h1>
    </section>
    </section>
  )
}
