import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/logo.png';
import { useRouter } from 'next/router';

export default function HeaderMobile() {
  const [openmenu, setOpenmenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenmenu(false);
      }
    };

    const handleScroll = () => {
      setHideOnScroll(window.pageYOffset > 50);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={menuRef} className={`fixed top-0 left-0 right-0 lg:hidden sm:block ${openmenu ? 'z-20' : 'z-10'} ${hideOnScroll ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center px-8 pt-3">
        <div className="flex items-center">
          <Link href="/">
            <button>
              <Image src={logo} alt="Logo" className="w-[66px] h-[66px]" />
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={() => setOpenmenu(!openmenu)} className="text-3xl cursor-pointer">
            <GiHamburgerMenu className="fill-white w-10 h-8" name={openmenu ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {openmenu && (
        <ul className="fixed top-[76px] bg-white w-full h-[calc(100vh-76px)] z-10 p-4 shadow-md overflow-y-auto">
          <li className="my-4">
            <Link href="/">Home</Link>
          </li>
          <li className="my-4">
            <Link href="/aboutus"><button>About us</button></Link>
          </li>
          <li className="my-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
}