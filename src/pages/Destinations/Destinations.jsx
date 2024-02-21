import React, { useState } from 'react'
import styled from 'styled-components'
import destData from '../../components/DestComps/DestData';
import homedesktopbg from '../../assets/images/destination/destination-desktop.jpg'
import homedetabletbg from '../../assets/images/destination/destination-tablet.jpg'
import homemobilebg from '../../assets/images/destination/destination-mobile.jpg'
import { Number, Label } from '../../components/GloblalStyles';
import DestNav from '../../components/DestComps/DestNav'

const Section = styled.section`
  width: 100%;
  height: 100svh;
  background-image: url(${homedesktopbg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  /* padding-bottom: 5.5rem; */

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding-top: 6.25rem;
    background-image: url(${homedetabletbg});
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 0;
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

const Image = styled.img`
  width: 75%;
  margin-top: 5rem;
  margin-left: 1.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin: 0;
    width: 50%;
  }

  @media (max-width: 575.97px) {
  }
`

const DestName = styled.h1`
 font-size: 6rem;
 text-transform: uppercase;
 color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 3.5rem;
  }
`

const DestDesc = styled.p`
  font-size: 1.25rem;
  color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 1rem;
  }
`

const DistLabel = styled.span`
 font-size: 0.875rem;
 text-transform: uppercase;
 color: var(--second-color);
 letter-spacing: 0.15rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const DistNum = styled.h4`
  font-size: 1.75rem;
  text-transform: uppercase;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Destinations = () => {

  const [selectedDestination, setSelectedDestination] = useState('Moon');
  const destination = selectedDestination ? destData.destinations.find(dest => dest.name === selectedDestination) : null;

  const handleDestinationSelect = (destinationName) => {
    setSelectedDestination(destinationName);
  };

  return <>
    <Section>
      <Container className="container">
        <div className="d-flex flex-row gap-4">
          <Number>01</Number>
          <Label>Pick your destination</Label>
        </div>
        <div className="row mt-md-5 mt-xl-0 gap-4 gap-xl-0">
          <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start">
            <Image src={destination.image} alt={destination.name} />
          </div>
          <div className="col-12 col-xl-6 d-flex align-items-end">
            <div className='d-flex flex-column text-center text-xl-start align-items-center align-items-xl-start gap-5'>
              <DestNav onDestinationSelect={handleDestinationSelect} />
              {destination && (
                <div className='d-flex flex-column align-items-center align-items-xl-start gap-5'>
                  <div>
                    <DestName>{destination.name}</DestName>
                    <DestDesc>{destination.description}</DestDesc>
                  </div>
                  <div className='d-flex flex-row gap-5'>
                    <div className='d-flex flex-column gap-2'>
                      <DistLabel>Avg. distance</DistLabel>
                      <DistNum>{destination.distance}</DistNum>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                      <DistLabel>Est. travel time</DistLabel>
                      <DistNum>{destination.travel}</DistNum>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </>
}

export default Destinations