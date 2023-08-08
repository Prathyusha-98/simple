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
        <header className="flex justify-between items-center px-8 bg-transparent sm:hidden xs:hidden lg:block">
      <div className="flex items-center">
        <Link href="/">
          <button>
            <Image src={logo} alt="Logo" className="ml-[148px] mr-[782px] w-[66px] h-[66px] " />
          </button>
        </Link>
        <nav className="text-lg flex items-center">
          <Link href="/">
            <button className="text-white hover:font-bold px-4 py-2 rounded-md">Home</button>
          </Link>
          <Link href="/about">
            <button className="text-white hover:font-bold  px-4 py-2 rounded-md">About Us</button>
          </Link>
          <Link href="/contact">
            <button className="text-white hover:font-bold  px-4 py-2 rounded-md">Contact</button>
          </Link>
        </nav>
      </div>
      {/*<div className="flex items-center">
        <Link href="/startnow">
          <button className="bg-[#1D2040] text-white font-semibold px-4 py-2 rounded-md shadow-md">Start Now</button>
        </Link>
        <Link href="/signin">
          <button className="text-white hover:font-bold ml-4 px-4 py-2 rounded-md">Sign In</button>
        </Link>
      </div>*/}
    </header>

    </>
     
  );
}
