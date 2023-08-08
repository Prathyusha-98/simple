import React from 'react'
import violetmobile from '@/assets/violetmobile.png'
import mobilen from '@/assets/mobilen.png'
import what from '@/assets/what.png'
import neetlogo from '@/assets/neetlogo.png'
import Image from 'next/image'
import Link from 'next/link'
const Neetmobile = () => {
    return(
        <>
            <div className='relative lg:hidden sm:block xs:block'>
            <Image className='w-full h-[681px]' src={violetmobile} alt='' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <div className='pt-20' ><p className='text-white font-poppins text-lg font-medium leading-normal'>NEET AI Tutor</p></div>
                <div className='py-10'><p className='w-[289px] text-white font-montserrat text-[20px] font-extrabold leading-normal'>Effortless <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>NEET learning</span> at your fingertips, AI Chat companion on WhatsApp!</p></div>
                <div className="flex items-center pb-6">
                    <Link className='mr-2' href="/">
                    <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
                    </Link>
                    <Link className='ml-2' href="/">
                    <button className="w-[130px] h-[44px] flex-shrink-0 rounded-[22px] border border-[rgba(255,255,255,0.7)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Learn More</p></button>
                    </Link>
                </div>
                <div><Image src={mobilen} alt='' /></div>
            </div>
            <Image className='absolute top-[385px] left-[0] w-[45px] h-[45px] ' src={neetlogo} alt=''/>
            <Image className='absolute top-[581px] left-[329px] w-[45px] h-[45px] ' src={what} alt=''/>
            </div>
        </>
    )
}
export default Neetmobile