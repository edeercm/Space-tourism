import styled from 'styled-components'

export const Number = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  opacity: 0.5;
  letter-spacing: 0.295rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.25rem;
  }

  @media (max-width: 575.97px) {
  }
`

export const Label = styled.span`
  text-transform: uppercase;
  font-size: 1.75rem;
  letter-spacing: 0.295rem;
  color: var(--third-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.25rem;
  }

  @media (max-width: 575.97px) {
  }
`