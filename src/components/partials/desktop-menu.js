import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavLink from '../styled/navlink';

const DesktopNavWrapper = styled.ul``;

const DesktopMenu = ({ navItems, path }) => (
  <DesktopNavWrapper className="hidden p-0 m-0 bg-white md:block">
    {navItems.map((navItem) => (
      <li className="inline-block p-2 mx-2 my-0" key={navItem.id}>
        <Link
          href={navItem.link}
          // eslint-disable-next-line prettier/prettier
        >
          <NavLink
            active={path === navItem.link}
            className="p-1 mr-2 text-sm font-medium no-underline uppercase cursor-pointer hover:border hover:border-solid"
            // eslint-disable-next-line prettier/prettier
          >
            <span>{navItem.text}</span>
          </NavLink>
        </Link>
      </li>
    ))}
  </DesktopNavWrapper>
);

DesktopMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};

export default DesktopMenu;
