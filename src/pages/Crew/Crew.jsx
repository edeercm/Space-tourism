import React, { useState } from 'react'
import styled from 'styled-components'
import crewData from '../../components/CrewComps/CrewData'
import homedesktopbg from '../../assets/images/crew/crew-desktop.jpg'
import homedetabletbg from '../../assets/images/crew/crew-tablet.jpg'
import homemobilebg from '../../assets/images/crew/crew-mobile.jpg'
import { Number, Label } from '../../components/GloblalStyles';
import CrewNav from '../../components/CrewComps/CrewNav'

const Section = styled.section`
  width: 100%;
  height: 100svh;
  background-image: url(${homedesktopbg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    background-image: url(${homedetabletbg});
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 10rem 0 2.5rem;
    align-items: center;
    background-image: url(${homemobilebg});
  }
`

const Container = styled.div`
  width: 75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const LabelCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-bottom: 12.5rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    position: absolute;
    top: 17.5%;
    left: 5%;
    padding-bottom: 0;
  }

  @media (max-width: 575.97px) {
    position: absolute;
    top: 12.5%;
    padding: 1.5rem 0;
  }
`

const CrewRole = styled.h4`
  opacity: 0.5;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 1rem;
  }
`

const CrewName = styled.h1`
 font-size: 3rem;
 text-transform: uppercase;
 color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 2.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 1.5rem;
  }
`

const CrewDesc = styled.p`
  width: 70%;
  font-size: 1.25rem;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
    font-size: 1rem;
  }
`

const Image = styled.img`
  width: auto;
  height: 75vh;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 45svh;
  }

  @media (max-width: 575.97px) {
    height: 40svh;
  }
`

const Crew = () => {

  const [selectedCrew, setSelectedCrew] = useState('Douglas Hurley');
  const crew = selectedCrew ? crewData.crew.find(crew => crew.name === selectedCrew) : null;

  const handleCrewSelect = (CrewName) => {
    setSelectedCrew(CrewName);
  };

  return <>
    <Section>
      <Container className="container">
        <div className="row d-flex flex-column-reverse flex-md-column flex-xl-row align-items-end gap-md-5 gap-xl-0">
          <div className="col-md-12 col-xl-6 d-flex flex-column text-center text-xl-start align-items-center align-items-xl-start">
            <LabelCont>
              <Number>02</Number>
              <Label>Meet your crew</Label>
            </LabelCont>
            <div className='d-flex flex-column-reverse flex-md-column align-items-center align-items-xl-start gap-4 gap-md-3 gap-xl-5 mb-xl-4 pb-xl-5'>
              {crew && (
                <div className='d-flex flex-column align-items-center align-items-xl-start gap-1 gap-md-3'>
                  <div>
                    <CrewRole>{crew.role}</CrewRole>
                    <CrewName>{crew.name}</CrewName>
                  </div>
                  <CrewDesc>{crew.bio}</CrewDesc>
                </div>
              )}
              <CrewNav onCrewSelect={handleCrewSelect} />
            </div>
          </div>
          <div className="col-md-12 col-xl-6 d-flex justify-content-center justify-content-xl-end mb-5 mb-md-0">
            <Image src={crew.image} alt={crew.name} />
          </div>
        </div>
      </Container>
    </Section>
  </>
}

export default Crew