import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LabelContent = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
`;

const LabelNumber = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--third-color);
`

const Label = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--third-color);
`

const Labels = () => {
  return <>
    <div className='d-flex flex-column gap-4'>
      <li>
        <Link to={'/'}>
          <LabelContent>
            <LabelNumber>00</LabelNumber>
            <Label>Home</Label>
          </LabelContent>
        </Link>
      </li>
      <li>
        <Link to={'destinations'}>
          <LabelContent >
            <LabelNumber>01</LabelNumber>
            <Label>Destination</Label>
          </LabelContent>
        </Link>
      </li>
      <li>
        <Link to={'crew'}>
          <LabelContent>
            <LabelNumber>02</LabelNumber>
            <Label>Crew</Label>
          </LabelContent>
        </Link>
      </li>
      <li>
        <Link to={'technology'}>
          <LabelContent>
            <LabelNumber>03</LabelNumber>
            <Label>Technology</Label>
          </LabelContent>
        </Link>
      </li>
    </div>
  </>
}

export default Labels