"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img2 from "../../public/bangla logo 01.png";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLink = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "/service" },
    { id: 3, name: "Gallery", path: "/Gallery" },
    { id: 4, name: "About us", path: "/AboutUs" },
  ];

  return (
    <>
    <div className="flex bg-white fixed  mb-30 left-0  h-20 z-3000  lg:flex-row items-center justify-between mx-auto w-full px-3 ">
      {/* Logo */}
      <div>
        <Image
          src={img2}
          alt="Logo"
          className="w-60 h-auto rounded-3xl mx-5"
          priority
        />
      </div>

      {/* Navigation + Button */}
      <div className="flex items-center gap-5">
        {/* Desktop Menu */}
        <div className="hidden  lg:flex gap-8 items-center">
          {navLink.map((nav) => (
            <Link
              key={nav.id}
              href={nav.path}
              className={`relative  text-xl menu transition-colors duration-300 hover:text-[var(--primary-color)] ${
                pathname === nav.path
                  ? "text-[var(--primary-color)] font-semibold"
                  : "text-black"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Hire Me Button */}
     <Link href={'/Contact'}>
        <div className="bg-black hidden lg:block hover:bg-[var(--primary-color)] px-4 py-2 text-white font-semibold rounded-xl shadow-[0px_2px_5px_var(--primary-color)] cursor-pointer text-lg">
          Contact 
        </div>
     </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-black ml-2"
        >
          {isMenuOpen ? <FiX /> :  <FiMenu /> }
        </button>
        
      </div>
     
    </div>
     {/* Mobile Menu with Smooth Transition */}
      <div
        className={`lg:hidden top-20 bg-[#1c1b21] text-white space-y-3 z-100 absolute border-y border-[var(--primary-color)] w-full transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-64 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-5  text-center">
          {navLink.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg hover:text-[var(--primary-color)] menu transition-colors hover:font-bold duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
         
        </ul>
         <Link href={'/Contact'}>
          <div onClick={() => setIsMenuOpen(false)} className="bg-black text-center w-[30%] mx-auto hover:bg-[var(--primary-color)] px-4 py-2 text-white font-semibold rounded-xl shadow-[0px_2px_5px_var(--primary-color)] cursor-pointer text-lg">
          Contact 
        </div>
         </Link>
      </div>
    </>
  );
};

export default Navbar;
