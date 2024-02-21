import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: var(--third-color);
`

const Footer = () => {
  return <>
    <FooterStyle>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center fs-5 gap-1">
            <span>Challenge by</span>
            <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" target='_blank' className='text-decoration-underline'>Frontend Mentor</a>
            <span>coded by</span>
            <a href="https://edercmportfolio.netlify.app/" target='_blank' className='text-decoration-underline'>Eder.</a>
          </div>
        </div>
      </div>
    </FooterStyle>
  </>
}

export default Footer