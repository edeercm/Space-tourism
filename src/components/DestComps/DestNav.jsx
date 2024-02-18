import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
  letter-spacing: 0.170rem;
  text-transform: uppercase;
  color: var(--second-color);
  cursor: pointer;


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const DestNav = ({ onDestinationSelect }) => {

  const handleSelect = (destinationName) => {
    onDestinationSelect(destinationName);
  };

  return <>
    <div className='d-flex flex-row gap-4'>
      <Label onClick={() => handleSelect('Moon')}>Moon</Label>
      <Label onClick={() => handleSelect('Mars')}>Mars</Label>
      <Label onClick={() => handleSelect('Europa')}>Europa</Label>
      <Label onClick={() => handleSelect('Titan')}>Titan</Label>
    </div>
  </>

}

export default DestNav