import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import NavLink from '../styled/navlink';

const slides = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 25px;
  }
`;

const MobileButton = styled.button`
  .top {
    width: 12px;
  }

  .middle {
    width: 20px;
  }

  .bottom {
    margin-bottom: 0;
  }

  &:hover {
    span {
      animation: ${slides} 1s cubic-bezier(0.39, 0.58, 0.57, 1) alternate-reverse both;
      animation-iteration-count: infinite;
    }
    .top {
      animation-delay: 0s;
    }
    .middle {
      animation-delay: 0.3s;
    }
    .bottom {
      animation-delay: 0.6s;
    }
  }
`;

const MobileMenuWrapper = styled.div`
  top: 70px;
  z-index: 3;
  transform: translateX(200px);
  width: 200px;
  transition: transform 400ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &.true {
    transform: translateX(0px);
  }
`;

const MobileMenuList = styled.ul`
  box-shadow: 0 0 11px 3px rgba(0, 0, 0, 0.1);
`;

const MobileMenu = ({ navItems, path }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <MobileButton
        className="bg-transparent border-none shadow-none outline-none cursor-pointer menu-button w-11 md:hidden focus:outline-none"
        onClick={toggleOpen}
        // eslint-disable-next-line prettier/prettier
      >
        {open ? (
          <p className="m-0 text-3xl font-medium">&times;</p>
        ) : (
          <>
            <span className="block w-6 mb-2 border-t-2 border-black border-solid top" />
            <span className="block w-6 mb-2 border-t-2 border-black border-solid middle" />
            <span className="block w-6 mb-2 border-t-2 border-black border-solid bottom" />
          </>
        )}
      </MobileButton>
      <MobileMenuWrapper
        className={`mobile-menu shadow-sm fixed right-0 top-16 text-black bg-white md:hidden ${open}`}
        // eslint-disable-next-line prettier/prettier
      >
        <MobileMenuList className="p-2 m-0">
          {navItems.map((navItem) => (
            <li className="block p-2 mx-0 my-2" key={navItem.id}>
              <Link
                className="p-0 text-sm font-medium no-underline uppercase"
                href={navItem.link}
                // eslint-disable-next-line prettier/prettier
              >
                <NavLink
                  active={path === navItem.link}
                  className="p-0 text-sm font-medium no-underline uppercase cursor-pointer hover:border hover:border-solid"
                  // eslint-disable-next-line prettier/prettier
                >
                  <span>{navItem.text}</span>
                </NavLink>
              </Link>
            </li>
          ))}
        </MobileMenuList>
      </MobileMenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};

export default MobileMenu;
