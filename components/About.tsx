import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import kin from '@/assets/kin.png';
import hena from '@/assets/hena.png';
import praveen from '@/assets/praveen.png';
import amarjeet from '@/assets/amarjeet.png';
import karun from '@/assets/karun.png';
import akshay from '@/assets/akshay.png';
import vikrant from '@/assets/vikrant.png';
import prathyu from '@/assets/prathyu.png';
import sohail from '@/assets/sohail.png';
import manu from '@/assets/manu.png';
import prabakar from '@/assets/prabakar.png';
import sonu from '@/assets/sonu.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="about">
        <div className="lg:block sm:hidden xs:hidden pt-12">
          <Header />
        </div>

        <div className="about-text ">
          <h1>Simple AI Enterprise</h1>
          <h4>Empowering AI Application Specialists</h4>
          <div className="about-content-title">
            <h3>
              What motivates our behavior <br></br>and actions?
            </h3>
          </div>
          <div className="about-content">
            <p>
              At Simple AI, we strongly believe in the power of understanding to
              drive better decision-making. We recognize that involving those
              closest to the challenges AI systems aim to solve leads to
              improved outcomes. With this in mind, we have developed a product
              that empowers individuals to see, describe, and comprehend AI
              systems using natural language.
            </p>
            <br></br>
            <br></br>
            <p>
              Our easy-to-use AI tools provide clear insights into AI systems,
              allowing users to validate and correct those insights. This not
              only generates a wealth of new data but also enhances predictive
              capabilities. We are taking the human-AI relationship to new
              heights, combining understanding and performance for optimal
              results.
            </p>
            <br></br>
            <br></br>
            <p>
              If you share our passion for unlocking the true potential of AI,
              we invite you to connect with us. This is an exciting era for AI,
              and we believe in building AI that people can trust. It goes
              beyond being responsible and ethical - it`&apos;`s about fostering good
              business practices and shaping the future of intelligence. Join us
              in this remarkable AI journey.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[945px]">
        <div className="team-heading">
          <h1>Our Team</h1>
          <h3>Meet the team transforming our AI relationship.</h3>
        </div>
        <div className='lg:mx-24 sm:mx-0 mt-[108px]'>
        <Carousel responsive={responsive} className='h-[455px] '>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={kin} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Kin Cheung</div>
              <div className="text-gray-700 text-center font-poppins text-lg font-medium leading-normal">Founder </div>
              <div className="w-[240px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Founded 4 Successful Companies Co-founder of a U+0020multi-million dollar business</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={hena} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Heena Sinha</div>
              <div className="text-gray-700 text-center font-poppins text-lg font-medium leading-normal">Co-Founder </div>
              <div className="w-[197px] h-[42px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Co-founder of a multi-million dollar business</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={praveen} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Praveen Dommalapati</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Product Manager</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center rounded-full'>
              <Image src={amarjeet} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Amarjeet Sandhu</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Human Resource Manager </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={karun} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Karun Kumar</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Senior Software Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={akshay} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Akshay Kumar</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Software Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={vikrant} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Vikrant Singh</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={prathyu} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Prathyusha Ponnaganti</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={prabakar} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Prabhakar Singh</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={manu} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Manu Goel</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={sohail} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Sohail Khan</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={sonu} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Sonu Kumari</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">UX/UI Designer</div>
            </div>
          </div>
        </Carousel>;
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
