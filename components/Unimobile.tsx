import React, { useState } from 'react'
import Image from 'next/image'
import sl from '@/assets/sl.png'
import sw from "@/assets/sw.png"
import sp from "@/assets/sp.png"
import blue from '@/assets/blue.png'
import arrow from '@/assets/arrow.png'
import logo from '@/assets/logo.png'
import Link from 'next/link'

const Unimobile = ()=>{
    const [selected, setSelected] = useState('write')

    const writeContent = (
      <>
        <div className=''>
            <div className='flex justify-center items-center'>
            <Image className='' src={sw} alt='Learn' />
            </div>
            <div className='flex flex-col justify-center items-center mt-6'>
            <div className='flex flex-col justify-center items-center text-center '><p className='text-white font-montserrat text-xl font-bold leading-normal w-[257px] '>Different writing <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Styles</span> for better output</p></div>
            </div>
        </div>
      </>
    )
  
    const learnContent = (
      <>
        <div className=''>
            <div className='flex justify-center items-center'>
            <Image className='' src={sl} alt='Learn' />
            </div>
            <div className='flex flex-col justify-center items-center mt-6'>
            <div className='flex flex-col justify-center items-center text-center '><p className='text-white font-montserrat text-xl font-bold leading-normal w-[257px] '>Summarized and Explained with <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Learn</span> feature</p></div>
            </div>
        </div>
      </>
    )
  
    const presentContent = (
      <>
        <div className=''>
            <div className='flex justify-center items-center'>
            <Image className='' src={sp} alt='Learn' />
            </div>
            <div className='flex flex-col justify-center items-center mt-6'>
            <div className='flex flex-col justify-center items-center text-center '><p className='text-white font-montserrat text-xl font-bold leading-normal w-[257px] '>Generate quick <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Presentation</span> from pointers</p></div>
            </div>
        </div>
      </>
    )
  
    return (
      <div className='relative'>
        <Image className='w-full sm:h-[620px] xs:h-[620px]' src={blue} alt='' />
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
          <div className='pb-12' ><p className='text-gray-300 text-lg font-normal leading-normal text-center font-poppins'>Simple Uni</p></div>
          <div className='pb-12 w-[294px]'><p className='text-gray-300 text-xs font-normal leading-normal text-center font-poppins'>A powerhouse web application empowering users to excel in writing, learning, and presenting.</p></div>
          <div className='flex  justify-center items-center mb-6'>
            <button onClick={() => setSelected('write')} className='  mr-[14px] w-[110px] h-[29px] flex-shrink-0 rounded-[4px] bg-[rgba(255,255,255,0.2)] '>
              <p className='text-gray-300 text-opacity-70 font-poppins text-xs font-normal leading-normal'>Simple Write</p>
            </button>
            <button onClick={() => setSelected('learn')} className='mr-[14px] w-[110px] h-[29px] flex-shrink-0 rounded-[4px] bg-[rgba(255,255,255,0.2)] '>
              <p className='text-gray-300 text-opacity-70 font-poppins text-xs font-normal leading-normal'>Simple Learn</p>
            </button>
            <button onClick={() => setSelected('present')} className='w-[110px] h-[29px] flex-shrink-0 rounded-[4px] bg-[rgba(255,255,255,0.2)] '>
              <p className='text-gray-300 text-opacity-70 font-poppins text-xs font-normal leading-normal'>Simple Present</p>
            </button>
          </div>
          <div className=''>
          <div className=''>
            {selected === 'write' && writeContent}
            {selected === 'learn' && learnContent}
            {selected === 'present' && presentContent}
          </div>
          </div>
          <div className="flex ubutton mt-6 mb-24">
            <button className=" ebutton1  text-white rounded-md mr-4">
              Try For Free
            </button>
            <button className="ebutton2 text-white rounded-md">
              Learn More
            </button>
          </div>

        </div>
      </div>
    )
}

export default Unimobile