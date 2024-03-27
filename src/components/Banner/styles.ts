import styled from 'styled-components'
import { colors } from '../../styles'

export const ImageBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    height: 280px;
    padding: 24px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;

    @media (max-width: 768px) {
      width: 80%;
    }

    h4 {
      font-weight: 100;
    }

    h3,
    h4 {
      color: ${colors.white};
      font-size: 32px;
    }
  }
`
