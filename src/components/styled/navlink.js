import styled from 'styled-components';

const NavLink = styled.a`
  color: #222;
  transition: ease-in-out border-bottom 300ms;

  ${(props) =>
    props.active &&
    `
    border-bottom: 2px solid rgb(31, 32, 68);
  `};

  &:hover {
    border-bottom: 2px solid rgb(31, 32, 68);
  }
`;

export default NavLink;
