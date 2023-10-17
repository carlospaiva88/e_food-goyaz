import styled from 'styled-components'
import imgBanner from '../../assets/images/fundo.png'
import { Button } from '../../Components/Button/styles'
import { breakpoints, colors } from '../../styles'

export const Hero = styled.header`
  height: 186px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-image: url(${imgBanner});
  color: ${colors.lightGray};




  @media (max-width: ${breakpoints.tablet}) {
    img {
      margin: 10px;
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    padding: 30px;
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
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  margin-bottom: 56px;


  > img {
    opacity: 0.83;
    filter: brightness(0.45);
    object-fit: cover;
    width: 100%;
    height: 280px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: 140px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 100;
    position: absolute;
    margin-bottom: 221px;
    margin-left: 170px;
    margin-top: 25px;
    color: ${colors.white};
    opacity: 0.38;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 170px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto;
      margin-top: 20px;
      margin-left: 50px;
      font-size: 18px;
      top: 0;
    }

  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    position: absolute;
    margin-top: 221px;
    margin-left: 170px;
    margin-bottom: 88px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 170px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto;
      font-size: 16px;
      bottom: 25px;
      margin-left: 50px;
    }

  }

`



export const ProfileButton = styled(Button)`
  background-color: ${colors.lightGray};
  color: ${colors.red};
  width: 304px;
`
