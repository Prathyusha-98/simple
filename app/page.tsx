// import Hero from '@/components/Hero'
import Image from 'next/image'
import Banner from '@/components/Banner'
import Contact from '../components/Contact'
import EndlessStory from '@/components/EndlessStory'
import Simplemail from '@/components/Simplemail'
import SlideData from '@/components/SlideData'


export default function Page() {
  return (
    <>
     {/* <Hero/>  */}
     <Simplemail />
     <EndlessStory/>
     <SlideData/>
    <Banner/> 
    <Contact/>
    </>
  )
}
