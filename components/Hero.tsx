"use client"
import React from 'react'
import Image from 'next/image'
import screen from '@/assets/screen.png'
import {BsArrowRight, BsArrowUpRight} from 'react-icons/bs'
import Header from './Header'
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
import what from '@/assets/what.png'
import neetlogo from '@/assets/neetlogo.png'
import small from '@/assets/small.png'
import ContactBG from "../assets/bgcontact.svg"
import Youtube from "../assets/youtube.svg"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"
import Link from 'next/link'
import Footer from './Footer'
import StoryBG from "../assets/endlessbgg.svg";
import StoryBook from "../assets/man.svg";
import StoryR from "../assets/StoryRes.svg";
import GIF from "../assets/story.gif";

const Hero =() =>{

    return (
        <>
    <div className='relative'>
      <Image className='w-full 1xl:h-[960px] xl:h-[563px] xs:hidden sm:hidden lg:block' src={screen} alt='' />
      <Image className='w-full xs:block sm:block lg:hidden' src={small} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>

        <div className="lg:block sm:hidden xs:hidden pt-12">
          <Header />
        </div>
        <div className="lg:hidden sm:block xs:block pt-12">
          <HeaderMobile/>
        </div>

        <div className='flex justify-center items-center '>
          <p className='1xl:w-[737px] sm:w-[443px] sm:h-[114px] xs:w-[283px] xs:h-[114px] text-[#fff] text-center font-montserrat 1xl:text-[45px] sm:text-[30px] xs:text-[25px] font-extrabold leading-normal '>Empowering You to <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]' >Excel</span> and Live <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]'>Better</span> Lives</p>
        </div>
        <div className='flex justify-center items-center 1xl:mt-[36px] xs:mt-6 '>
          <p className='1xl:w-[737px] sm:w-[376px] sm:h-[110px] xs:w-[276px] xs:h-[110px] text-[#fff] text-center font-poppins 1xl:text-base xs:text-[12px] font-light leading-[28px] '>At Simple AI, we are on a mission to develop AI-driven applications that are user-friendly, accessible to all, and ultimately empower individuals to perform at their best and live better lives.</p>
        </div>
        <div className='flex justify-center items-center 1xl:mt-[69px] 1xl:mb-[330px] xs:mt-12'>
        <a href="#unibbudy" rel="noopener noreferrer">
        <button className='w-[191px] h-[50px] text-center bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4] rounded-[186px] flex justify-center items-center'>
            <span className='text-white text-center font-poppins text-base font-bold leading-[19px]' >Know more</span>
            <BsArrowRight className='fill-white text-[24px] font-bold ml-4' />
        </button>
        </a>
        </div>

      </div>
    </div>
    <div  className='bg-[#0D0037] h-[380px] xs:h-[380px] sm:h-[380px] pt-14 shadow-[#0D0037] shadow-lg  '>
        <div className='flex justify-center items-center '>
          <p className='1xl:w-[828px] sm:w-[486px] xs:w-[286px] text-white text-center font-montserrat 1xl:text-[50px] sm:text-[30px] xs:text-[20px] font-semibold leading-normal'>
            Unleashing the Power of AI, Simplified
          </p>
        </div>
        <div className=' flex justify-center items-center mt-6 '>
          <p className='lg:block sm:hidden xs:hidden 1xl:w-[1002px] sm:w-[690px] xs:w-[392px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal'>
          Imagine a world where technology seamlessly integrates into your daily life, making complex tasks effortless and enhancing your capabilities. That&rsquo;s the vision we strive to bring to reality. Our vision is to be a world leader in providing AI-driven applications that empower individuals to reach their full potential and improve the quality of their lives. We strive to make AI accessible to everyone and create user-friendly solutions that simplify complex tasks.
          </p>
        </div>
        <div className=' lg:hidden sm:block xs:block '>
          <div className='flex justify-center items-center'>
          <p className=' 1xl:w-[902px] sm:w-[492px] xs:w-[292px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal'>
          Imagine a world where technology seamlessly integrates into your daily life, making complex tasks effortless and enhancing your capabilities. That&rsquo;s the vision we strive to bring to reality. 
          </p>
          </div>
          <div className='flex justify-center items-center'>
          <p className='mt-6 1xl:w-[902px] sm:w-[492px] xs:w-[292px] text-[rgba(255,255,255,0.8)] text-center font-poppins 1xl:text-sm sm:text-[10px] xs:text-[10px] font-medium leading-normal' >Our vision is to be a world leader in providing AI-driven applications that empower individuals to reach their full potential and improve the quality of their lives. We strive to make AI accessible to everyone and create user-friendly solutions that simplify complex tasks.</p>
          </div>        
        </div>
        <div className='mt-12'>
            <Link href='https://www.thesimpleai.com/aboutus' className='flex justify-center items-center'>
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
      <Image className='w-full lg:h-[599px] 1xl:h-[499px] xl:h-[499px]' src={violet} alt='' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
          <Image className='absolute lg:top-[180px] lg:left-[0px] xl:top-[110px] xl:left-[103px] 1xl:top-[110px] 1xl:left-[173px] 2xl:top-[110px] 2xl:left-[223px] 3xl:top-[110px] 3xl:left-[323px] w-[80px] h-[80px] ' src={neetlogo} alt=''/>
          <Image className='absolute lg:top-[351px] lg:left-[323px] xl:top-[351px] xl:left-[429px] 1xl:top-[351px] 1xl:left-[529px] 2xl:top-[351px] 2xl:left-[609px] 3xl:top-[351px] 3xl:left-[689px] w-[80px] h-[80px] ' src={what} alt=''/>
        <div className='flex justify-center items-center'>
            <Image src={mobile} alt='' />
            <div className='ml-[139px]'>
                <div className='flex '><p className='text-white font-poppins text-lg font-medium leading-normal'>NEET AI Tutor</p></div>
                <div className='flex justify-center items-center my-[26px] '><p className='w-[487px] text-white font-montserrat text-[30px] font-extrabold leading-normal'>Effortless <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>NEET learning</span> at your fingertips, AI Chat companion on WhatsApp!</p></div>
                <div className="flex nbutton">
<Link href="https://neetaitutor.thesimpleai.com/signup" className='' target='_blank'>
            <button className=" ebutton1  text-white rounded-md mr-4">
              Try For Free
            </button>
            </Link>
            <Link href="https://neetaitutor.thesimpleai.com/" className='' target='_blank'>
            <button className="ebutton2 text-white rounded-md">
              Learn More
            </button>
            </Link>
          </div>
            </div>
        </div>
      </div>
    </div>
    <Neetmobile/>

    {/* <Mail/> */}
    {/* <Simplemail /> */}
    <EndlessStory/>
    
   


    <SlideData/>
    <Banner/> 
    <Footer/>




      </>
   )
}
 export default Hero