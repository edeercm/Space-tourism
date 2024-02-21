import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 0.125rem solid var(--third-color);
  background-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  transition: background-color 0.375s; /* Agrega una transición suave */
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 3rem;
    height: 3rem;
  }
`

const BtnLabel = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.isSelected ? 'var(--first-color)' : 'var(--third-color)')};
  
  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`

const TechNav = ({ onTechnologySelect }) => {

  const [selectedTechnology, setSelectedTechnology] = useState('Launch vehicle');

  const handleSelect = (technologyName) => {
    setSelectedTechnology(technologyName);
    onTechnologySelect(technologyName);
  };

  return <>
    <div className='d-flex flex-md-row flex-xl-column gap-4'>
      <Button
        isSelected={selectedTechnology === 'Launch vehicle'}
        onClick={() => handleSelect('Launch vehicle')}
      >
        <BtnLabel isSelected={selectedTechnology === 'Launch vehicle'}>
          1
        </BtnLabel>
      </Button>
      <Button
        isSelected={selectedTechnology === 'Spaceport'}
        onClick={() => handleSelect('Spaceport')}
      >
        <BtnLabel isSelected={selectedTechnology === 'Spaceport'}>
          2
        </BtnLabel>
      </Button>
      <Button
        isSelected={selectedTechnology === 'Space capsule'}
        onClick={() => handleSelect('Space capsule')}
      >
        <BtnLabel isSelected={selectedTechnology === 'Space capsule'}>
          3
        </BtnLabel>
      </Button>
    </div>
  </>
}

export default TechNav