'use client'

import { navLinks } from '@/constants';
import React, { ReactNode, useEffect, useState } from 'react'
import { FiAlignRight, FiX } from 'react-icons/fi';
import NavItem from './NavItem';
import Cart from './Cart';
import Profile_1 from './Profile_1';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [isOpen])
  return (
    <>
      <FiAlignRight
        className="text-green-500 block md:hidden"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`overflow-clip fixed inset-0 z-50 bg-black/20 transition-all ${
          isOpen ? "opacity-1 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div
          className={`bg-white w-1/2 flex flex-col gap-4 p-4 h-full ml-auto`}
        >
          <FiX className="ml-auto" onClick={() => setIsOpen(false)} />
          <div className="grid gap-2">
            <Profile_1 />
            <nav>
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, route, Icon }) => (
                  <NavItem
                    key={label}
                    label={label}
                    Icon={(<Icon />) as ReactNode}
                    route={route}
                    className='!justify-start'
                  />
                ))}
                <Cart />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav