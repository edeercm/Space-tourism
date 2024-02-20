import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 0.938rem;
  height: 0.938rem;
  opacity: 0.5;
  border-radius: 50%;
  background-color: var(--third-color);
  cursor: pointer;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const CrewNav = ({ onCrewSelect }) => {

  const handleSelect = (crewName) => {
    onCrewSelect(crewName);
  };

  return <>
    <div className='d-flex flex-row gap-2'>
      <Button onClick={() => handleSelect('Douglas Hurley')}></Button>
      <Button onClick={() => handleSelect('Mark Shuttleworth')}></Button>
      <Button onClick={() => handleSelect('Victor Glover')}></Button>
      <Button onClick={() => handleSelect('Anousheh Ansari')}></Button>
    </div>
  </>
}

export default CrewNav