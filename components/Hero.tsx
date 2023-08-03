import React from 'react'
import Image from 'next/image'
import Groupw from '@/assets/Groupw.png'
const Hero =() =>{
    return(
        <>
    <div className=' w-full h-[960px] bg-wave bg-cover bg-no-repeat'>
       <div className='flex justify-center items-center'><p className='w-[737px] text-[#fff] text-center font-montserrat text-[45px] font-extrabold leading-normal '>Empowering You to <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]' >Excel</span> and Live <span className='text-transparent bg-clip-text bg-gradient-to-b to-[#3A07E1] from-[#A010E0]'>Better</span> Lives</p></div>
       <div className='flex justify-center items-center'>
        <p className='w-[737px] text-[#fff] text-center font-poppins text-base font-light leading-[28px] '>At Simple AI, we are on a mission to develop AI-driven applications that are user-friendly, accessible to all, and ultimately empower individuals to perform at their best and live better lives.</p>
       </div>
    </div>

    <div className='bg-[#0D0037] w-full h-[472px] '></div>
    <div className='bg-[#0D0037] w-full h-[772px] '></div>


        </>
    )
}
export default Hero