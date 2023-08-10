"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/logo.png';


export default function Header() {

  const [openmenu, setOpenmenu] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (openmenu) {
        setOpenmenu(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openmenu]);
  return (
    <>
<header className="fixed top-0 left-0 right-0 bg-transparent px-8 mt-4 lg:block sm:hidden xs:hidden max-w-full">
  <div className="flex justify-between items-center">
    <div className="flex items-center">
      <Link href="/">
        <button>
          <Image src={logo} alt="Logo" className="w-[66px] h-[66px]" />
        </button>
      </Link>
    </div>
    <nav className="text-lg flex items-center">
      <Link href="/">
        <button className="text-white hover:font-bold px-4 py-2 rounded-md">Home</button>
      </Link>
      <Link href="/about">
        <button className="text-white hover:font-bold px-4 py-2 rounded-md">About Us</button>
      </Link>
      <Link href="/contact">
        <button className="text-white hover:font-bold px-4 py-2 rounded-md">Contact</button>
      </Link>
    </nav>
  </div>
</header>


    </>
     
  );
}
