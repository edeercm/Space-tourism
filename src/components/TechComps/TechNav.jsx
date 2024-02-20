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
  }
`

const ButtonLabel = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.isSelected ? 'var(--first-color)' : 'var(--third-color)')};
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const TechNav = ({ onTechnologySelect }) => {

  const [selectedTechnology, setSelectedTechnology] = useState('Launch vehicle');

  const handleSelect = (technologyName) => {
    setSelectedTechnology(technologyName);
    onTechnologySelect(technologyName);
  };

  return <>
    <div className='d-flex flex-column gap-4'>
      <Button isSelected={selectedTechnology === 'Launch vehicle'} onClick={() => handleSelect('Launch vehicle')}>
        <ButtonLabel isSelected={selectedTechnology === 'Launch vehicle'}>1</ButtonLabel>
      </Button>
      <Button isSelected={selectedTechnology === 'Spaceport'} onClick={() => handleSelect('Spaceport')}>
        <ButtonLabel isSelected={selectedTechnology === 'Spaceport'}>2</ButtonLabel>
      </Button>
      <Button isSelected={selectedTechnology === 'Space capsule'} onClick={() => handleSelect('Space capsule')}>
        <ButtonLabel isSelected={selectedTechnology === 'Space capsule'}>3</ButtonLabel>
      </Button>
    </div>
  </>
}

export default TechNav