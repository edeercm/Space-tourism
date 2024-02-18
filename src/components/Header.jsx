import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/images/header/logo.svg'

const HeaderStyle = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: transparent;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Header = () => {
  return <>
    <HeaderStyle>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-4">
            <img src={logo} alt="Logo" className='w-auto' />
          </div>
          <div className="col-8 d-flex justify-content-end">
            <ul className="d-flex flex-row text-white gap-5">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'destinations'}>Destination</Link>
              </li>
              <li>
                <Link to={'crew'}>Crew</Link>
              </li>
              <li>
                <Link to={'technology'}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header