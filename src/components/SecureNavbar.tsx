import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SecureNavbar( name:any ) {
  return (
    <nav className="bg-white shadow-lg">
      <div className=" mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="#" className="flex items-center py-4 px-2">
                <Image src="/Assets/secure logo.png" alt="Logo" width={50} height={50} />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/Secure-Helmet" className={`py-4 px-2 text-[#253D55] ${name === "home" ? "font-bold" : ""}`}>
                Home
              </Link>
              <Link href="#link" className="py-4 px-2 text-[#253D55]">Career</Link>
              <Link href="#link" className="py-4 px-2 text-[#253D55]">About</Link>
              <Link href="/Secure-Helmet/contact" className={`py-4 px-2 ${name === "contact" ? "text-[#253D55] font-bold" : "text-[#253D55]"}`}>
                Contact
              </Link>
              <Link href="#link" className="py-4 px-2 text-[#253D55]">Testimonial</Link>
              <Link href="#link" className="py-4 px-2 text-[#253D55]">FAQ</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button className="py-2 px-4 border border-[#EE8D6E] text-[#EE8D6E] rounded hover:bg-[#EE8D6E] hover:text-white transition duration-300">Login</button>
            <button className="py-2 px-4 bg-[#EE8D6E] text-white rounded hover:[#EE8D6E] transition duration-300">Signup</button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="mobile-menu hidden">
        <Link href="/Secure-Helmet" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </Link>
        <Link href="#link" className="block py-2 px-4 text-sm hover:bg-gray-200">Career</Link>
        <Link href="#link" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
        <Link href="/Secure-Helmet/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
        </Link>
        <Link href="#link" className="block py-2 px-4 text-sm hover:bg-gray-200">Testimonial</Link>
        <Link href="#link" className="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</Link>
      </div>
    </nav>
  );
}
