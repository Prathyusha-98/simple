import React from 'react'
import Image from 'next/image'
import Asset from '@/assets/Asset.png'
import {BsArrowRight, BsArrowUpRight} from 'react-icons/bs'
import Header from './Header'
import Link from 'next/link'
import arrow from '@/assets/arrow.png'
import blue from '@/assets/blue.png'
import violet from '@/assets/violet.png'
import mobile from '@/assets/mobile.png'
import hand from '@/assets/hand.png'
const Hero =() =>{

    const sections = [
        { title: 'AI email Generation', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
        { title: 'AI Reply', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
        { title: 'AI Summarizee', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
        { title: 'Unread Snaps', text: 'Lorem ipsum dolor sit amet consectetur. Tellus massa dictumst adipiscing' },
      ];
    return(
        <>
        <Header/>
    <div className='relative'>
      <Image className='w-full 1xl:h-[960px] xl:h-[563px]' src={Asset} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <p className='w-[737px] text-[#fff] text-center font-montserrat text-[45px] font-extrabold leading-normal '>Empowering You to <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]' >Excel</span> and Live <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]'>Better</span> Lives</p>
        </div>
        <div className='flex justify-center items-center mt-[36px]'>
          <p className='w-[737px] text-[#fff] text-center font-poppins text-base font-light leading-[28px] '>At Simple AI, we are on a mission to develop AI-driven applications that are user-friendly, accessible to all, and ultimately empower individuals to perform at their best and live better lives.</p>
        </div>
        <div className='flex justify-center items-center mt-[69px] 1xl:mb-[330px] '>
        <div className='w-[191px] h-[50px] text-center bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] rounded-[186px] flex justify-center items-center'>
            <p className='text-white text-center font-poppins text-base font-bold leading-[19px]' >Get started</p>
            <BsArrowRight className='fill-white text-[24px] font-bold ml-4' />
        </div>
        </div>

      </div>
    </div>
    <div className='bg-[#0D0037] h-[472px] mt-[108px]'>
        <div className='flex justify-center items-center '><p className='w-[828px] text-white text-center font-montserrat text-[50px] font-semibold leading-normal'>Unleashing the Power of AI, Simplified</p></div>
        <div className=' flex justify-center items-center mt-6 '><p className='w-[902px] text-[rgba(255,255,255,0.8)] text-center font-poppins text-sm font-medium leading-normal'>Imagine a world where technology seamlessly integrates into your daily life, making complex tasks effortless and enhancing your capabilities. That’s the vision we strive to bring to reality. Our vision is to be a world leader in providing AI-driven applications that empower individuals to reach their full potential and improve the quality of their lives. We strive to make AI accessible to everyone and create user-friendly solutions that simplify complex tasks.</p></div>
        <div className='mt-12'>
            <Link href='/about' className='flex justify-center items-center'>
                <button className='flex justify-center items-center bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent text-center font-montserrat text-base font-medium leading-normal mr-3'>
                <span className='underline mr-3 '>Learn More About Us</span>
                <Image src={arrow} alt='' />
                </button>
            </Link>
        </div>
    </div>
    <div className='relative'>
      <Image className='w-full 1xl:h-[772px] xl:h-[772px]' src={blue} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className='relative'>
      <Image className='w-full 1xl:h-[499px] xl:h-[499px]' src={violet} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <Image src={mobile} alt='' />
            <div className='ml-[139px]'>
                <div className='flex '><p className='text-white font-poppins text-lg font-medium leading-normal'>NEET AI Tutor</p></div>
                <div className='flex justify-center items-center my-[26px] '><p className='w-[487px] text-white font-montserrat text-[30px] font-extrabold leading-normal'>Effortless <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>NEET learning</span> at your fingertips, AI Chat companion on WhatsApp!</p></div>
                <div className="flex items-center">
                    <Link className='mr-2' href="/">
                    <button className="w-[143px] h-[44px] flex-shrink-0 rounded-[22px] bg-[rgba(255,255,255,0.2)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Try For Free</p></button>
                    </Link>
                    <Link className='ml-2' href="/">
                    <button className="w-[130px] h-[44px] flex-shrink-0 rounded-[22px] border border-[rgba(255,255,255,0.7)]"><p className='text-white text-center font-montserrat text-base font-medium leading-normal'>Learn More</p></button>
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </div>

    <div className='relative'>
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





        </>
    )
}
export default Hero