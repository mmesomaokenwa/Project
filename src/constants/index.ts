import { ReactNode } from "react"
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineFire } from "react-icons/hi2";
import { TbSpeakerphone } from "react-icons/tb";
import { VscPercentage } from "react-icons/vsc";
import { FiPhone } from "react-icons/fi";
import { IconType } from "react-icons";

type NavLink = {
  label: string
  route: string
  Icon: IconType
}

export const siteTitle = 'KOMAS500'

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: '/',
    Icon: IoHomeOutline
  },
  {
    label: 'Hot Deals',
    route: '/hot-deals',
    Icon: HiOutlineFire
  },
  // {
  //   label: 'About us',
  //   route: '/about-us',
  //   Icon: VscPercentage
  // },
  // {
  //   label: 'Help',
  //   route: '/help',
  //   Icon: TbSpeakerphone
  // },
  // {
  //   label: 'Support Center',
  //   route: '/support-center',
  //   Icon: FiPhone
  // }
]

type FooterLink = {
  label: string
  route: string
}

export const footerLinks: FooterLink[] = [
  {
    label: 'About Us',
    route: '/about-us',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
  {
    label: 'Hot Deals',
    route: '/hot-deals',
  },
  {
    label: 'Promotions',
    route: '/promotions',
  },
  {
    label: 'New Products',
    route: '/new-products',
  },
  {
    label: 'Privacy Policy',
    route: '/privacy-policy',
  }
]

export const footerHelpLinks: FooterLink[] = [
  {
    label: 'Payments',
    route: '/payments',
  },
  {
    label: 'Refund',
    route: '/refund',
  },
  {
    label: 'Checkout',
    route: '/checkout',
  },
  {
    label: 'Shipping',
    route: '/shipping',
  },
  {
    label: 'Q&A',
    route: '/q-a',
  }
]
