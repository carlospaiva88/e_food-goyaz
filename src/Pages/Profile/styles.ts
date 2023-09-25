import styled from 'styled-components'
import imgBanner from '../../assets/images/fundo.png'
import { Button } from '../../Components/Button/styles'
import { breakpoints, colors } from '../../styles'

export const Hero = styled.header`
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url(${imgBanner});
  color: ${colors.lightGray};


  @media (max-width: ${breakpoints.tablet}) {
   padding: 20px;
    img {
      margin: 10px;
    }
  }
`
export const ProfileTitle = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: ${colors.red};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

`
export const Banner = styled.div`
  position: relative;
  width: 100%;

  img {
    opacity: 0.83;
    filter: brightness(0.45);

    @media screen and (max-width:540px) {
      width: 100%;
    }
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
    @media screen and (width:${breakpoints.tablet}) {
      width: 100%;
    }
  }
  h1 {
    font-size: 32px;
    font-weight: 100;
    position: absolute;
    top: 0;
    margin: 25px 170px;
    color: ${colors.white};
    opacity: 0.38;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    position: absolute;
    top: 170px;
    margin: 32px 170px;


    @media (max-width: ${breakpoints.desktop}) {
      top: 90px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 18px;
      top: -20px;
      right: 100px;
    }
  }

`



export const ProfileButton = styled(Button)`
  background-color: ${colors.lightGray};
  color: ${colors.red};
  width: 304px;
`

