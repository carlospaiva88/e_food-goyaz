import styled from 'styled-components'
import imgBanner from '../../assets/images/fundo.png'
import { Button } from '../../Components/Button/styles'
import { colors } from '../../styles'

export const Hero = styled.header`
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url(${imgBanner});
  color: ${colors.lightGray};

  @media screen and (max-width:540px) {

    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;

    img {
      margin: 15px;
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

  @media screen and (max-width:540px) {
    font-size: 16px;
    line-height: 14px;

  }

`
export const Banner = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width:540px) {
    width: 100%;
    margin-bottom: 20px;
  }

  img {
    opacity: 0.83;
    filter: brightness(0.45);

    @media screen and (max-width:540px) {
      width: 100%;
    }
    @media screen and (min-width:767px) {
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

    @media screen and (max-width:540px) {
      font-size: 16px;
      top: 0px;
      margin: 10px 70px;
    }
  }
  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    position: absolute;
    top: 170px;
    margin: 32px 170px;

    @media screen and (max-width:540px){
      font-size: 22px;
      font-size: 18px;
      font-weight: 400;
      margin: 60px;
      top: -13px;
    }
    @media screen and (min-width:767px) {
      top: 85px;
    }
  }
`
export const ProfileCardList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-column-gap: 15px;
  grid-row-gap: 1em;
  padding: 100px;

  @media screen and (max-width:540px) {
    display: block;
    margin: 0 auto;
    padding: 0;
  }
  @media screen and (min-width:767px) and (max-width:1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-column-gap: 5px;
    grid-row-gap: 1em;
  }

`
export const ProfileCard = styled.li`
  width: 320px;
  background-color: ${colors.red};
  color: ${colors.white};

  img {
    margin: 8px;
  }
  h2 {
    color: ${colors.lightGray};
    margin-left: 8px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 900;
  }
  p {
    margin: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  @media screen and (max-width:540px) {
    width: 334px;
    margin-bottom: 20px;
    margin: 30px auto;
  }
  @media screen and (max-width:820px) {
    margin: 30px auto;
  }
`
export const ProfileButton = styled(Button)`
  background-color: ${colors.lightGray};
  color: ${colors.red};
  width: 304px;
`

