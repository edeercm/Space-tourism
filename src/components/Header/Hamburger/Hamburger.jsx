import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Icons from '../Hamburger/Icons'
import close from '../../../assets/images/header/icon-close.svg'
import hamburger from '../../../assets/images/header/icon-hamburger.svg'

const Container = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    margin-right: 2.25rem;

    .offcanvas.offcanvas-end {
      width: 75%;
      backdrop-filter: blur(1rem);
      background: hsl(0 0% 100% / 0.05);
    }

    .offcanvas-backdrop {
      display: none;
    }
  }
`;

const Hamburguer = () => {
  return <>
    <Container>
      <div 
        className="navbar-toggle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <img src={hamburger} alt="hamburger" />
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <img src={close} alt="close" className="w-auto mt-2" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-start align-items-center mt-5 gap-5">
          <Menu />
          <Icons />
        </div>
      </div>
    </Container>
  </>
}

export default Hamburguer