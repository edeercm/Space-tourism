import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import homedesktopbg from '../../assets/images/home/home-desktop.jpg'
import homedetabletbg from '../../assets/images/home/home-tablet.jpg'
import homemobilebg from '../../assets/images/home/home-mobile.jpg'

const Section = styled.section`
  display: flex;
  align-items: end;
  padding-bottom: 7.5rem;
  width: 100%;
  height: 100svh;
  background-image: url(${homedesktopbg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    align-items: center;
    padding-top: 15rem;
    background-image: url(${homedetabletbg});
  }

  @media (max-width: 575.97px) {
    align-items: center;
    padding-top: 10.5rem;
    background-image: url(${homemobilebg});
  }
`

const Container = styled.div`
  width: 80%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const Label = styled.h6`
  font-size: 1.65rem;
  text-transform: uppercase;
  color: var(--second-color);
  letter-spacing: 0.05rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 1rem;
  }
`

const Place = styled.h1`
  font-size: 10rem;
  text-transform: uppercase;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 5rem;
  }
`

const Description = styled.span`
  display: flex;
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 70%;
  }

  @media (max-width: 575.97px) {
  }
`

const Button = styled.button`
  width: 17.5rem;
  height: 17.5rem;
  border-radius: 50%;
  background-color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 15rem;
    height: 15rem;
  }
`

const BtnLabel = styled.h5`
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--first-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Home = () => {
  return <>
    <Section>
      <Container className="container">
        <div className="row gap-5 gap-xl-0">
          <div className="col-md-12 col-xl-6">
            <div className='d-flex flex-column text-center text-xl-start align-items-md-center align-items-xl-start'>
              <Label>So, you want to travel to</Label>
              <Place>Space</Place>
              <Description>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Description>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 d-flex justify-content-center justify-content-xl-end align-items-end">
            <Button>
              <Link to={'destinations'} >
                <BtnLabel>Explore</BtnLabel>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  </>
}

export default Home