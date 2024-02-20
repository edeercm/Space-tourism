import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  width: ${(props) => (props.isSelected ? '1.125rem' : '0.935rem')};
  height: ${(props) => (props.isSelected ? '1.125rem' : '0.935rem')};
  opacity: ${(props) => (props.isSelected ? '1' : '0.5')};
  border-radius: 50%;
  background-color: var(--third-color);
  cursor: pointer;
  transition: opacity 0.375s; /* Agrega una transición suave */

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewNav = ({ onCrewSelect }) => {

  const [selectedCrew, setSelectedCrew] = useState('Douglas Hurley');

  const handleSelect = (crewName) => {
    setSelectedCrew(crewName);
    onCrewSelect(crewName);
  };

  return <>
    <div className='d-flex flex-row align-items-center gap-2'>
      <Button
        isSelected={selectedCrew === 'Douglas Hurley'}
        onClick={() => handleSelect('Douglas Hurley')}
      >
      </Button>
      <Button
        isSelected={selectedCrew === 'Mark Shuttleworth'}
        onClick={() => handleSelect('Mark Shuttleworth')}
      >
      </Button>
      <Button
        isSelected={selectedCrew === 'Victor Glover'}
        onClick={() => handleSelect('Victor Glover')}
      >
      </Button>
      <Button
        isSelected={selectedCrew === 'Anousheh Ansari'}
        onClick={() => handleSelect('Anousheh Ansari')}
      >
      </Button>
    </div>
  </>
}

export default CrewNav