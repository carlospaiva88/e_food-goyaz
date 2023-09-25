import styled from 'styled-components'
import imgBanner from '../../assets/images/fundo.png'
import { breakpoints, colors } from '../../styles'

export const TitleHero = styled.p`
  width: 539px;
  margin-top: 100px;
  margin-bottom: 40px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 900;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: ${colors.red};

  @media (max-width: ${breakpoints.desktop})  {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  }

`
export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffebd9;
  background-image: url(${imgBanner});

  ${imgBanner} {
    width: 100%;
  }

  div {
    margin-top: 44px;
  }

`
