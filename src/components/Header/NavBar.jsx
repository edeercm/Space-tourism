import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 50rem;
  height: 5.5rem;
  gap: 5rem;
  padding-right: 5.75rem;
  
  @media (min-width: 576px) and (max-width: 992px) {}

  @media (max-width: 575px) {

  }
`;

const NavBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(1rem);
  background: hsl(0 0% 100% / 0.05);
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const NavItem = styled.p`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.75rem; /* Ajusta la distancia del borde inferior */
    width: 100%;
    height: 0.225rem;
    background-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
    transition: height 0.35s, background-color 0.35s; /* Agrega una transición suave */
  }
`;

const NavNumber = styled.span`
  position: relative;
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--third-color);
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const NavLabel = styled.span`
  position: relative;
  font-size: 1.125rem;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--third-color);
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const NavBar = () => {

  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelectedItem(0);
        break;
      case '/destinations':
        setSelectedItem(1);
        break;
      case '/crew':
        setSelectedItem(2);
        break;
      case '/technology':
        setSelectedItem(3);
        break;
      default:
        setSelectedItem(0);
        break;
    }
  }, [location.pathname]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return <>
    <InnerWrapper>
      <NavBg />
      <li>
        <Link to={'/'}>
          <NavItem 
            isSelected={selectedItem === 0} 
            onClick={() => handleItemClick(0)}
          >
            <NavNumber>00</NavNumber>
            <NavLabel>Home</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'destinations'}>
          <NavItem 
            isSelected={selectedItem === 1} 
            onClick={() => handleItemClick(1)}
          >
            <NavNumber>01</NavNumber>
            <NavLabel>Destination</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'crew'}>
          <NavItem 
            isSelected={selectedItem === 2} 
            onClick={() => handleItemClick(2)}
          >
            <NavNumber>02</NavNumber>
            <NavLabel>Crew</NavLabel>
          </NavItem>
        </Link>
      </li>
      <li>
        <Link to={'technology'}>
          <NavItem 
            isSelected={selectedItem === 3} 
            onClick={() => handleItemClick(3)}
          >
            <NavNumber>03</NavNumber>
            <NavLabel>Technology</NavLabel>
          </NavItem>
        </Link>
      </li>
    </InnerWrapper>
  </>
}

export default NavBar