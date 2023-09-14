"use client"
import React, { useState, useEffect, useRef  } from 'react';
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
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/logo.png';
import { useRouter } from 'next/router';
import HeaderMobile from '@/components/HeaderMobile';
import About from '@/components/About';


const about = () => { 
  return(
    <>
    <About/>
    </>
  )
};

export default about;
