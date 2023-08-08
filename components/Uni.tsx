import { useState } from 'react'
import Image from 'next/image'
import learn from '@/assets/learn.png'
import write from "@/assets/write.png"
import present from "@/assets/present.png"
import blue from '@/assets/blue.png'
import arrow from '@/assets/arrow.png'
import logo from '@/assets/logo.png'
import Link from 'next/link'
export default function Uni() {
  const [selected, setSelected] = useState('write')

  const writeContent = (
    <>
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center'>
      <div className='w-[399px] h-[364px]  '>
      <div ><p className='text-white font-poppins text-base font-medium leading-normal mb-[26px]'>Simple Uni</p></div>
      <div ><p className='text-white font-montserrat text-2xl font-bold leading-normal w-[399px] h-[74px] mb-[24px] pr-[100px] '>Different writing <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Styles</span> for better output</p></div>
      <div ><p className='text-white text-opacity-50 font-poppins text-sm font-normal leading-normal w-[314px] h-[72px] pr-[24px]'>A powerhouse web application empowering users to excel in writing, learning, and presenting.</p></div>
      <div className="flex items-center mt-[32px]">
        <Link className='mr-2' href="/">
          <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
        </Link>
        <Link className='ml-2' href="/">
          <button className="w-[130px] h-[44px] flex-shrink-0 rounded-[22px] border border-[rgba(255,255,255,0.7)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Learn More</p></button>
        </Link>
      </div>
      </div>
      </div>
      <div className=''>
      <Image className='' src={write} alt='Learn' />
      </div>
    </div>
    </>
  )

  const learnContent = (
    <>
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center'>
      <div className='w-[399px] h-[364px]  '>
      <div ><p className='text-white font-poppins text-base font-medium leading-normal mb-[26px]'>Simple Uni</p></div>
      <div ><p className='text-white font-montserrat text-2xl font-bold leading-normal w-[399px] h-[74px] mb-[38px] pr-[100px] '>Summarized and Explained with <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Learn</span> feature</p></div>
      <div ><p className='text-white text-opacity-50 font-poppins text-sm font-normal leading-normal w-[314px] h-[72px] pr-[24px]'>A powerhouse web application empowering users to excel in writing, learning, and presenting.</p></div>
      <div className="flex items-center mt-[32px]">
        <Link className='mr-2' href="/">
          <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
        </Link>
        <Link className='ml-2' href="/">
          <button className="w-[130px] h-[44px] flex-shrink-0 rounded-[22px] border border-[rgba(255,255,255,0.7)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Learn More</p></button>
        </Link>
      </div>
      </div>
      </div>
      <div className=''>
      <Image className='' src={learn} alt='Learn' />
      </div>
    </div>
    </>
  )

  const presentContent = (
    <>
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center'>
      <div className='w-[399px] h-[364px]  '>
      <div ><p className='text-white font-poppins text-base font-medium leading-normal mb-[26px]'>Simple Uni</p></div>
      <div ><p className='text-white font-montserrat text-2xl font-bold leading-normal w-[399px] h-[74px] mb-[38px] pr-[100px] '>Generate quick <span className='bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent'>Presentation</span> from pointers</p></div>
      <div ><p className='text-white text-opacity-50 font-poppins text-sm font-normal leading-normal w-[314px] h-[72px] pr-[24px]'>A powerhouse web application empowering users to excel in writing, learning, and presenting.</p></div>
      <div className="flex items-center mt-[32px]">
        <Link className='mr-2' href="/">
          <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
        </Link>
        <Link className='ml-2' href="/">
          <button className="w-[130px] h-[44px] flex-shrink-0 rounded-[22px] border border-[rgba(255,255,255,0.7)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Learn More</p></button>
        </Link>
      </div>
      </div>
      </div>
      <div className=''>
      <Image className='' src={present} alt='Learn' />
      </div>
    </div>
    </>
  )

  return (
    <div className='relative'>
      <Image className='w-full 1xl:h-[772px] xl:h-[772px]' src={blue} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center mb-12'>
          <button onClick={() => setSelected('write')} className=' ml-[380px] mr-[14px] w-[110px] h-[29px] flex-shrink-0 rounded-[4px] bg-[rgba(255,255,255,0.2)] '>
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
      </div>
    </div>
  )
  
}
