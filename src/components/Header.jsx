import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/images/header/logo.svg'

const HeaderStyle = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: transparent;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

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

const Header = () => {
  return <>
    <HeaderStyle>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-4">
            <img src={logo} alt="Logo" className='w-auto ms-5' />
          </div>
          <div className="col-8 d-flex justify-content-end px-0">
            <InnerWrapper>
              <NavBg />
              <li>
                <Link to={'/'}>
                  <div className='d-flex flex-row gap-2'>
                    <NavNumber>00</NavNumber>
                    <NavLabel>Home</NavLabel>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={'destinations'}>
                  <div className='d-flex flex-row gap-2'>
                    <NavNumber>01</NavNumber>
                    <NavLabel>Destination</NavLabel>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={'crew'}>
                  <div className='d-flex flex-row gap-2'>
                    <NavNumber>02</NavNumber>
                    <NavLabel>Crew</NavLabel>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={'technology'}>
                  <div className='d-flex flex-row gap-2'>
                    <NavNumber>03</NavNumber>
                    <NavLabel>Technology</NavLabel>
                  </div>
                </Link>
              </li>
            </InnerWrapper>
          </div>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header