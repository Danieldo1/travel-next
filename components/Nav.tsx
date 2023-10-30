'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import Button from './Button'

const Nav = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
 
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5  '>
        <Link href={'/'} >
            <Image src='hilink-logo.svg' alt='logo' width={74} height={29} />
        </Link>
                <ul className='hidden h-full gap-12 lg:flex'>
                    {NAV_LINKS.map((link) => (
                      <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' >
                       {link.label}
                      </Link>
                    ))}
                </ul>
                <div className='lg:flexCenter hidden'>
                    <Button type='button' title='Get Started' icon='./user.svg' variant='btn_dark_green' />
                </div>

                <Image src='menu.svg' alt='menu' width={32} height={32} className='inline-block lg:hidden cursor-pointer' onClick={() => setToggle(!toggle)} />
                <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4 ">
              {NAV_LINKS.map((Link) => (
                <li
                  key={Link.label}
                  className={`${
                    active === Link.label ? "text-green-50" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setActive(Link.label);
                    setToggle(!toggle);
                  }}
                >
                  <a href='/'>{Link.label}</a>
                </li>
              ))}
            </ul>
          </div>
    </nav>
  )
}

export default Nav