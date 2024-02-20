import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/header/logo.svg'
import NavBar from './NavBar';

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

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-4">
            <Link to={'/'} >
              <img src={logo} alt="Logo" className='w-auto ms-5' />
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-end px-0">
            <NavBar />
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;