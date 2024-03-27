import styled from 'styled-components'

export const CardapioList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0 120px 0;

  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const MenuItem = styled.li`
  max-width: 320px;
  max-height: 338px;
`
