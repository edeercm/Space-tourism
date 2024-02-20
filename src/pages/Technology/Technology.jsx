import React, { useState } from 'react'
import styled from 'styled-components'
import techData from '../../components/TechComps/TechData'
import homedesktopbg from '../../assets/images/technology/technology-desktop.jpg'
import homedetabletbg from '../../assets/images/technology/technology-tablet.jpg'
import homemobilebg from '../../assets/images/technology/technology-mobile.jpg'
import TechNav from '../../components/TechComps/TechNav'

const Section = styled.section`
  width: 100%;
  height: 100svh;
  background-image: url(${homedesktopbg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;
  padding-bottom: 3rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    background-image: url(${homedetabletbg});
  }

  @media (max-width: 575.97px) {
    background-image: url(${homemobilebg});
  }
`

const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 75%;
  /* padding-bottom: 12.5rem; */
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const ContentTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-bottom: 5rem;
  
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

const TechRole = styled.span`
  line-height: 2;
  letter-spacing: 0.170rem;
  text-transform: uppercase;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const TechName = styled.h1`
 font-size: 3.5rem;
 text-transform: uppercase;
 color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const TechDesc = styled.p`
  font-size: 1.125rem;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

// const Image = styled.img`
//   width: auto;
  
//   @media (min-width: 575.98px) and (max-width: 991.98px) {
//   }

//   @media (max-width: 575.97px) {
//   }
// `

const Technology = () => {

  const [selectedTechnology, setSelectedTechnology] = useState('Launch vehicle');
  const technology = selectedTechnology ? techData.technology.find(technology => technology.name === selectedTechnology) : null;

  const handleTechnologySelect = (TechnologyName) => {
    setSelectedTechnology(TechnologyName);
  };

  return <>
    <Section>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-7 d-flex justify-content-center align-items-center">
            <ContentOne>
              <ContentTwo>
                <Number>03</Number>
                <Label>Space launch 101</Label>
              </ContentTwo>
              <div className='d-flex flex-row gap-5'>
                <TechNav onTechnologySelect={handleTechnologySelect} />
                {technology && (
                  <div className='d-flex flex-column gap-3'>
                    <div>
                      <TechRole>The terminology...</TechRole>
                      <TechName>{technology.name}</TechName>
                    </div>
                    <TechDesc>{technology.description}</TechDesc>
                  </div>
                )}
              </div>
            </ContentOne>
          </div>
          <div className="col-5 d-flex justify-content-end px-0">
            <img src={technology.image} alt={technology.name} className='w-auto'/>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Technology