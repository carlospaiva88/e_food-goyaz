import styled from "styled-components";
import { colors } from "../../styles";

export const ProfileCardList = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 10px;
grid-row-gap: 2em;


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
  background-color: ${colors.red};
  color: ${colors.white};

  img {
    width: 350px;
    height: 240px;
    padding: 10px;
    object-fit: cover;
  }

  h2 {
    color: ${colors.lightGray};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    padding: 8px;
  }
  p {
    padding: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  @media screen and (max-width:540px) {
    width: 324px;
    margin-bottom: 20px;
    margin: 30px auto;
  }
  @media screen and (max-width:820px) {
    margin: 30px auto;
  }
`
export const ContainerProduct = styled.div`
  max-width: 1024px;
  height: 708px;
  margin-left: 170px;
  display: flex;
  justify-content: center;
  align-items: center;


`
