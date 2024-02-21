import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LabelCont = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
`;

const Number = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--third-color);
`

const Label = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--third-color);
`

const Labels = ({ closeOffcanvas }) => {
  return <>
    <div className='d-flex flex-column gap-4'>
      <li onClick={closeOffcanvas}>
        <Link to={'/'}>
          <LabelCont>
            <Number>00</Number>
            <Label>Home</Label>
          </LabelCont>
        </Link>
      </li>
      <li onClick={closeOffcanvas}>
        <Link to={'destinations'}>
          <LabelCont>
            <Number>01</Number>
            <Label>Destination</Label>
          </LabelCont>
        </Link>
      </li>
      <li onClick={closeOffcanvas}>
        <Link to={'crew'}>
          <LabelCont>
            <Number>02</Number>
            <Label>Crew</Label>
          </LabelCont>
        </Link>
      </li>
      <li onClick={closeOffcanvas}>
        <Link to={'technology'}>
          <LabelCont>
            <Number>03</Number>
            <Label>Technology</Label>
          </LabelCont>
        </Link>
      </li>
    </div>
  </>
}

export default Labels