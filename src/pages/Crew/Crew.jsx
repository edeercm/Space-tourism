import React, { useState } from 'react'
import styled from 'styled-components'
import crewData from '../../components/CrewComps/CrewData'
import homedesktopbg from '../../assets/images/crew/crew-desktop.jpg'
import homedetabletbg from '../../assets/images/crew/crew-tablet.jpg'
import homemobilebg from '../../assets/images/crew/crew-mobile.jpg'
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
    background-image: url(${homemobilebg});
  }
`

const Container = styled.div`
  width: 75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const ContentOne = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-bottom: 12.5rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Number = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  opacity: 0.5;
  letter-spacing: 0.295rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.span`
  text-transform: uppercase;
  font-size: 1.75rem;
  letter-spacing: 0.295rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewRole = styled.h4`
  opacity: 0.5;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewName = styled.h1`
 font-size: 3rem;
 text-transform: uppercase;
 color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewDesc = styled.p`
  width: 70%;
  font-size: 1.125rem;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Image = styled.img`
  width: auto;
  height: 75vh;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
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
        <div className="row d-flex align-items-end">
          <div className="col-6">
            <ContentOne>
              <Number>02</Number>
              <Label>Meet your crew</Label>
            </ContentOne>
            <div className='d-flex flex-column gap-5 mb-4 pb-5'>
              {crew && (
                <div className='d-flex flex-column gap-3'>
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
          <div className="col-6 d-flex justify-content-end">
            <Image src={crew.image} alt={crew.name} />
          </div>
        </div>
      </Container>
    </Section>
  </>
}

export default Crew