import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: transparent;
  border: 0.125rem solid var(--third-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
   
  }

  @media (max-width: 575.97px) {
   
  }
`

const ButtonLabel = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: var(--third-color);
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
   
  }

  @media (max-width: 575.97px) {
   
  }
`

const TechNav = ({ onTechnologySelect }) => {

  const handleSelect = (technologyName) => {
    onTechnologySelect(technologyName);
  };

  return <>
    <div className='d-flex flex-column gap-4'>
      <Button onClick={() => handleSelect('Launch vehicle')}>
        <ButtonLabel>1</ButtonLabel>
      </Button>
      <Button onClick={() => handleSelect('Spaceport')}>
        <ButtonLabel>2</ButtonLabel>
      </Button>
      <Button onClick={() => handleSelect('Space capsule')}>
        <ButtonLabel>3</ButtonLabel>
      </Button>
    </div>
  </>
}

export default TechNav