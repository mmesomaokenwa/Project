import React, { ReactNode } from "react";
import NavItem from "./NavItem";
import { navLinks, siteTitle } from "@/constants";
import Profile_1 from "./Profile_1";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import { FiGrid } from "react-icons/fi";

const Menubar = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="flex rounded items-center justify-between p-4 lg:py-0 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-xl">{siteTitle}</h1>
          <div className="flex items-center gap-2 bg-green-500 border text-white py-2 px-4 rounded">
            <FiGrid />
            <span>Shopping by location</span>
          </div>
        </div>
        <nav>
          <ul className="hidden gap-4 lg:flex">
            {navLinks.map(({ label, route, Icon }) => (
              <NavItem
                key={label}
                label={label}
                Icon={(<Icon />) as ReactNode}
                route={route}
              />
            ))}
            <Cart />
            <Profile_1 />
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Menubar;
