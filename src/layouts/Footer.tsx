import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <section className='py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
    <section className='w-full main-container flex flex-col lg:flex-row items-center justify-between gap-6 py-12'>
      <div className='w-full flex flex-col items-start justify-start gap-4'>
        <div className='w-full flex items-start justify-start gap-10'>
        <span>
            <h1 className='text-xl font-bold cursor-pointer'>Quick Link</h1>
            <p className='text-lg font-medium cursor-pointer capitalize'>about</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>services</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>blog</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>contact</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>workplace partner</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>events</p>
            <p className='text-lg font-medium cursor-pointer capitalize'>privacy policy</p>
        </span>
      
      
        </div>
        <span className='w-full flex items-center justify-start gap-4'>
            <InstagramIcon className='!text-pink-400 cursor-pointer !text-3xl'/>
            <LinkedInIcon className='!text-blue-600 cursor-pointer !text-3xl'/>
            <YouTubeIcon className='!text-red-600 cursor-pointer !text-3xl'/>
        </span>
      </div>

      <div className='w-full h-64'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.410970674952!2d77.57361881534334!3d13.00948071756463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17df652ee8bd%3A0xfad4d2e0060724d2!2sdRSTi%20Communications!5e0!3m2!1sen!2sin!4v1677754505180!5m2!1sen!2sin" className='w-full h-full' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='w-full flex flex-col items-start justify-center gap-6'>
        <p className='text-lg '> <span className='font-bold'>Address:</span> 31, 8th Main, 10th Cross RMV Extension, Sankey Tank, Sadashiva Nagar, Bengaluru, Karnataka 560080</p>
        <p className='text-lg '> <span className='font-bold'>Phone:</span> 096322 27286</p>
        <p className='text-lg '> <span className='font-bold'>Hours:</span> Hours:10AM - 7:30PM</p>
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
