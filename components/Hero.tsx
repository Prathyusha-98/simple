"use client"
import React from 'react'
import Image from 'next/image'
import screen from '@/assets/screen.png'
import {BsArrowRight, BsArrowUpRight} from 'react-icons/bs'
import Header from './Header'
import Link from 'next/link'
import arrow from '@/assets/arrow.png'
import blue from '@/assets/blue.png'
import violet from '@/assets/violet.png'
import mobile from '@/assets/mobile.png'
import hand from '@/assets/hand.png'
import Uni from './Uni'
import Unimobile from './Unimobile'
import Neetmobile from './Neetmobile'
import Mail from './Mail'
import HeaderMobile from './HeaderMobile'
import Simplemail from './Simplemail'
import EndlessStory from './EndlessStory'
import SlideData from './SlideData'
import Banner from './Banner'
import Contact from './Contact'

const Hero =() =>{

    return (
        <>
    <div className='relative'>
      <Image className='w-full 1xl:h-[960px] xl:h-[563px] sm:h-[600px] xs:h-[700px] sm:w-full' src={screen} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>

        <Header/>
        <HeaderMobile/>

        <div className='flex justify-center items-center '>
          <p className='1xl:w-[737px] sm:w-[443px] sm:h-[114px] xs:w-[283px] xs:h-[114px] text-[#fff] text-center font-montserrat 1xl:text-[45px] sm:text-[30px] xs:text-[25px] font-extrabold leading-normal '>Empowering You to <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]' >Excel</span> and Live <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]'>Better</span> Lives</p>
        </div>
        <div className='flex justify-center items-center 1xl:mt-[36px] xs:mt-6 '>
          <p className='1xl:w-[737px] sm:w-[376px] sm:h-[110px] xs:w-[276px] xs:h-[110px] text-[#fff] text-center font-poppins 1xl:text-base xs:text-[12px] font-light leading-[28px] '>At Simple AI, we are on a mission to develop AI-driven applications that are user-friendly, accessible to all, and ultimately empower individuals to perform at their best and live better lives.</p>
        </div>
        <div className='flex justify-center items-center 1xl:mt-[69px] 1xl:mb-[330px] xs:mt-12'>
        <div className='w-[191px] h-[50px] text-center bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] rounded-[186px] flex justify-center items-center'>
            <p className='text-white text-center font-poppins text-base font-bold leading-[19px]' >Get started</p>
            <BsArrowRight className='fill-white text-[24px] font-bold ml-4' />
        </div>
        </div>

      </div>
    </div>
    <div  className='bg-[#0D0037] h-[472px] xs:h-[420px] sm:h-[420px] pt-14 shadow-[#0D0037] shadow-lg  '>
        <div className='flex justify-center items-center '>
          <p className='1xl:w-[828px] sm:w-[486px] xs:w-[286px] text-white text-center font-montserrat 1xl:text-[50px] sm:text-[30px] xs:text-[20px] font-semibold leading-normal'>
            Unleashing the Power of AI, Simplified
          </p>
        </div>
        <div className=' flex justify-center items-center mt-6 '>
          <p className='lg:block sm:hidden xs:hidden 1xl:w-[902px] sm:w-[492px] xs:w-[292px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal'>
          Imagine a world where technology seamlessly integrates into your daily life, making complex tasks effortless and enhancing your capabilities. That’s the vision we strive to bring to reality. Our vision is to be a world leader in providing AI-driven applications that empower individuals to reach their full potential and improve the quality of their lives. We strive to make AI accessible to everyone and create user-friendly solutions that simplify complex tasks.
          </p>
        </div>
        <div className=' lg:hidden sm:block xs:block '>
          <div className='flex justify-center items-center'>
          <p className=' 1xl:w-[902px] sm:w-[492px] xs:w-[292px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal'>
          Imagine a world where technology seamlessly integrates into your daily life, making complex tasks effortless and enhancing your capabilities. That’s the vision we strive to bring to reality. 
          </p>
          </div>
          <div className='flex justify-center items-center'>
          <p className='mt-6 1xl:w-[902px] sm:w-[492px] xs:w-[292px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal' >Our vision is to be a world leader in providing AI-driven applications that empower individuals to reach their full potential and improve the quality of their lives. We strive to make AI accessible to everyone and create user-friendly solutions that simplify complex tasks.</p>
          </div>        
        </div>
        <div className='mt-12'>
            <Link href='/about' className='flex justify-center items-center'>
                <button className='flex justify-center items-center bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] text-transparent text-center font-montserrat 1xl:text-base xs:text-[12px] sm:text-[12px] font-medium leading-normal mr-3'>
                <span className='underline mr-3 '>Learn More About Us</span>
                <Image className='xs:w-[12px]' src={arrow} alt='' />
                </button>
            </Link>
        </div>
    </div>


    <div className=' lg:block sm:hidden xs:hidden'><Uni/></div>
    <div className=' lg:hidden sm:block xs:block'><Unimobile/></div>

    <div className='relative lg:block sm:hidden xs:hidden'>
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
    <Neetmobile/>

    <Mail/>
    <Simplemail />
    <EndlessStory/>
    <SlideData/>
    <Banner/> 
    <Contact/>




      </>
   )
}
 export default Hero