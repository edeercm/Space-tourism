import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.p`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0;
  cursor: pointer;
`;

const NavNumber = styled.span`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--third-color);
`

const NavLabel = styled.span`
  position: relative;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--third-color);
`

const Menu = ({ toggle }) => {

  return <>
    <div className='d-flex flex-column gap-4'>
      <li>
        <Link to={'/'}>
          <NavItem onClick={() => toggle && toggle.click()}>
            <NavNumber>00</NavNumber>
            <NavLabel>Home</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'destinations'}>
          <NavItem onClick={() => toggle && toggle.click()}>
            <NavNumber>01</NavNumber>
            <NavLabel>Destination</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'crew'}>
          <NavItem onClick={() => toggle && toggle.click()}>
            <NavNumber>02</NavNumber>
            <NavLabel>Crew</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'technology'}>
          <NavItem onClick={() => toggle && toggle.click()}>
            <NavNumber>03</NavNumber>
            <NavLabel>Technology</NavLabel>
          </NavItem>
        </Link>
      </li>
    </div>
  </>
}

export default Menu