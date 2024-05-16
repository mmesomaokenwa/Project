"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavItemProps = {
  Icon?: ReactNode
  label: string
  route: string
  className?: string
}

function NavItem({ Icon, label, route, className }: NavItemProps) {
  const pathname: string = usePathname()

  const isActive: boolean = pathname === route
  return (
    <Link
      href={route}
      className={`mr-3 flex justify-between items-center gap-3 bg-white-500 p-2 rounded transition-colors hover:text-green-500 ${isActive && 'text-green-500'} ${className && className}`}
    >
      {Icon && Icon}
      <span>{label}</span>
    </Link>
  );
}

export default NavItem;
