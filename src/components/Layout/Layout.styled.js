import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #f8f8f8;
  box-shadow: 0px 7px 10px #f8f8f8;
  padding: 20px 0;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #242424;
  &.active {
    color: green;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  `;