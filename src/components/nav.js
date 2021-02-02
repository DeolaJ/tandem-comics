import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import DesktopMenu from './partials/desktop-menu';
import MobileMenu from './partials/mobile-menu';

const navItems = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'Meet the Characters',
    link: '/meet-the-characters',
  },
  {
    id: 3,
    text: 'Art',
    link: '/art',
  },
  {
    id: 4,
    text: 'Comics',
    link: '/comics',
  },
  {
    id: 5,
    text: 'About',
    link: '/about',
  },
];

const Nav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-6 py-8 md:px-10">
        <Image
          src="/logo-red.png"
          width={50}
          height={50}
          alt="Tandem Comics Logo"
          className="block"
        />
        <DesktopMenu navItems={navItems} path={path} />
        <MobileMenu navItems={navItems} path={path} />
      </nav>
    </header>
  );
};

export default Nav;
