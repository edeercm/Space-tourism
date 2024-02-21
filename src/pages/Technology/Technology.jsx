import React, { useState } from 'react'
import styled from 'styled-components'
import techData from '../../components/TechComps/TechData'
import homedesktopbg from '../../assets/images/technology/technology-desktop.jpg'
import hometabletbg from '../../assets/images/technology/technology-tablet.jpg'
import homemobilebg from '../../assets/images/technology/technology-mobile.jpg'
import { Number, Label } from '../../components/GloblalStyles';
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
    align-items: center;
    padding-top: 8.5rem;
    padding-bottom: 0;
    background-image: url(${hometabletbg});
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

const LabelCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-bottom: 5rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    position: absolute;
    top: 15%;
    left: 5%;
  }

  @media (max-width: 575.97px) {
  }
`

const TechRole = styled.span`
  line-height: 2;
  font-size: 1.25rem;
  letter-spacing: 0.170rem;
  text-transform: uppercase;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    line-height: 2.5;
  }

  @media (max-width: 575.97px) {
  }
`

const TechName = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 3rem;
  }

  @media (max-width: 575.97px) {
  }
`

const TechDesc = styled.p`
  font-size: 1.25rem;
  color: var(--second-color);
`

const Img = styled.img`
  width: auto;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
  }
`

const Technology = () => {

  const [selectedTechnology, setSelectedTechnology] = useState('Launch vehicle');
  const technology = selectedTechnology ? techData.technology.find(technology => technology.name === selectedTechnology) : null;

  const handleTechnologySelect = (TechnologyName) => {
    setSelectedTechnology(TechnologyName);
  };

  return <>
    <Section>
      <div className='container-fluid'>
        <div className="row d-flex flex-md-column-reverse flex-xl-row gap-md-5 gap-xl-0">
          <div className="col-md-12 col-xl-7 d-flex justify-content-center align-items-center">
            <ContentOne>
              <LabelCont>
                <Number>03</Number>
                <Label>Space launch 101</Label>
              </LabelCont>
              <div className='d-flex flex-md-column flex-xl-row text-md-center text-xl-start align-items-md-center align-items-xl-start gap-md-4 gap-xl-5'>
                <TechNav onTechnologySelect={handleTechnologySelect} />
                {technology && (
                  <div className='d-flex flex-column gap-md-2 gap-xl-3'>
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
          <div className="col-md-12 col-xl-5 d-flex justify-content-md-center justify-content-xl-end px-0">
            <Img
              src={window.innerWidth <= 991.98 ? technology.image.mobile : technology.image.desktop}
              alt={technology.name}
            />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Technology