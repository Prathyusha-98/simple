import Link from 'next/link'
import logo from '@/assets/logo.png'
import Image from 'next/image'
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#050116] ">
      <div className="flex items-center">
        <Link href="/">
          <button>
            <Image src={logo} alt="Logo" className="ml-[148px] mr-[339px] w-[66px] h-[66px] "  />
          </button>
        </Link>
        <nav className="text-lg flex justify-center">
          <Link href="/">
            <button className="text-white hover:font-bold px-4 py-2 rounded-md">Home</button>
          </Link>
          <Link href="/About">
            <button className="text-white hover:font-bold  px-4 py-2 rounded-md">About Us</button>
          </Link>
          <Link href="/contact">
            <button className="text-white hover:font-bold  px-4 py-2 rounded-md">Contact</button>
          </Link>
        </nav>
      </div>
      <div className="flex items-center">
        <Link href="/startnow">
          <button className="bg-[#1D2040] text-white font-semibold px-4 py-2 rounded-md shadow-md ">Start Now</button>
        </Link>
        <Link href="/signin">
          <button className="text-white hover:font-bold ml-4 px-4 py-2 rounded-md">Sign In</button>
        </Link>
      </div>
    </header>
  )
}
