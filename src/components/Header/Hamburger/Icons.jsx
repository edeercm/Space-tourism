import React from 'react'
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: var(--third-color);
    font-size: 2.5rem;
  }
`;

const HamMenu = () => {
  return <>
    <Icons>
      <a
        href="https://www.linkedin.com/in/edeercm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/edeercm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/edeercm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram />
      </a>
    </Icons>
  </>
}

export default HamMenu