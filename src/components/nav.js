import React, { useEffect, useRef, useState } from 'react';
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
    text: 'Comics Templates',
    link: '/comics-templates',
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
  const [scrolling, setScrolling] = useState(false);

  const scrollHandler = useRef(() => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  useEffect(() => {
    const scrollFunc = scrollHandler.current;
    window.addEventListener('scroll', scrollFunc);

    return () => window.removeEventListener('scroll', scrollFunc);
  });

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolling ? 'shadow-sm' : null}`}>
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 text-custom-violet">
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
