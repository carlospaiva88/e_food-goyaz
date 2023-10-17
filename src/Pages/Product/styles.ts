import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ProfileCardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 120px;
  margin:top: 56px;
  gap: 32px;



  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 10px;
    gap: 20px;
  }

`
export const ProfileCard = styled.li`
  width: 320px;
  height: auto;
  background-color: ${colors.red};
  color: ${colors.white};
  margin: 5px;

  > img {
    width: 100%;
    height: 200px;
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

  @media (max-width: ${breakpoints.desktop}) {
    height: 360px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 360px;

  }

`
export const ContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`
