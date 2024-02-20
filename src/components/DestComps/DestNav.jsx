import React, { useState } from 'react';
import styled from 'styled-components'

const Label = styled.span`
  position: relative;
  letter-spacing: 0.170rem;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? 'var(--third-color)' : 'var(--second-color)')};
  transition: color 0.35s; /* Agrega una transición suave */

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.25rem; /* Ajusta la distancia del borde inferior */
    width: 100%;
    height: 0.2rem;
    background-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
    transition: height 0.35s, background-color 0.35s; /* Agrega una transición suave */
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const DestNav = ({ onDestinationSelect }) => {

  const [selectedItem, setSelectedItem] = useState(0);

  const handleSelect = (destinationName, index) => {
    setSelectedItem(index);
    onDestinationSelect(destinationName);
  };

  return <>
    <div className='d-flex flex-row gap-4'>
      <Label isSelected={selectedItem === 0} onClick={() => handleSelect('Moon', 0)}>Moon</Label>
      <Label isSelected={selectedItem === 1} onClick={() => handleSelect('Mars', 1)}>Mars</Label>
      <Label isSelected={selectedItem === 2} onClick={() => handleSelect('Europa', 2)}>Europa</Label>
      <Label isSelected={selectedItem === 3} onClick={() => handleSelect('Titan', 3)}>Titan</Label>
    </div>
  </>

}

export default DestNav