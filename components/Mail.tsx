"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '@/assets/arrow.png'
import hand from '@/assets/hand.png'
import handmobile from '@/assets/handmobile.png'
const sections = [
    { title: 'AI email Generation', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
    { title: 'AI Reply', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
    { title: 'AI Summarizee', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
    { title: 'Unread Snaps', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
  ];
const Mail = () => {
    return(
        <>
    <div className='relative lg:block sm:hidden xs:hidden'>
      <Image className='w-full 1xl:h-[963px] xl:h-[963  px]' src={hand} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            
            <div className='mr-[535px] mb-[355px]'>
                <div className='flex '><p className='text-white font-poppins text-lg font-medium leading-normal'>Simplemail</p></div>
                <div className='flex justify-center items-center my-[26px] '><p className='w-[322px] h-[111px] text-white font-montserrat text-[30px] font-extrabold leading-normal'>AI powered E-mail App for <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>quicker</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>easy </span>response</p></div>
                <div className="flex items-center">
                    <Link className='mt-6' href="/">
                    <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
                    </Link>
                </div>
            </div>
            <div className='items-start'>
            {sections.map((section) => (
            <>
                <div className='flex'>
                <p className='text-white font-poppins text-lg font-medium w-[180px] h-[27px] mb-[12px]'>{section.title}</p>
                </div>
                <div>
                <p className='text-gray-400 font-poppins text-lg font-normal w-[382px] h-[54px] mb-4'>{section.text}</p>
                </div>
            </>
            ))} 
                <div className='mt-12 mb-[130px]'>
                <Link href='/about' className='flex '>
                    <button className='flex justify-center items-center bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent text-center font-montserrat text-base font-medium leading-normal mr-3'>
                    <span className='underline mr-3 '>Learn More About Us</span>
                    <Image src={arrow} alt='' />
                    </button>
                </Link>
                 </div>            
            </div>
        </div>

      </div>
    </div>


{/****************************************Mobile design start **********************************/}
    <div className='relative lg:hidden sm:block xs:block'>
      <Image className='w-full ' src={handmobile} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center pt-24 '>
            <p className='text-white font-poppins text-lg font-medium leading-normal'>Simplemail</p>
        </div>
        <div className='flex justify-center items-center'>
           <p className='w-[322px] h-[111px] text-white text-center font-montserrat text-[20px] font-extrabold leading-normal'>AI powered E-mail App for <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>quicker</span> & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>easy </span>response</p>
        </div>
        <div className="flex items-center">
            <Link className='' href="/">
                <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
            </Link>
        </div>
        <div className='pt-[396px] flex-col justify-center items-center'>
        {sections.map((section) => (
            <>
                <div className='flex'>
                <p className='text-white font-poppins text-xs font-medium w-[147px] mb-[6px]'>{section.title}</p>
                </div>
                <div>
                <p className='text-gray-400 font-poppins text-xs font-normal w-[290px]  mb-5'>{section.text}</p>
                </div>
            </>
            ))} 

        <div className='mt- mb-[100px]'>
            <Link href='/about' className=' '>
                <button className='flex justify-center items-center bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent text-center font-montserrat text-base font-medium leading-snug mr-3'>
                <span className='underline mr-3 '>Learn More About Us</span>
                <Image src={arrow} alt='' />
                </button>
            </Link>
        </div>  
        </div>

      </div>
    </div>
        </>
    )
}
export default Mail