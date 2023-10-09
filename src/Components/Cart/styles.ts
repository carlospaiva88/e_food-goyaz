import styled from "styled-components"
import { colors } from "../../styles"
import { ButtonLight } from "../Button/styles"

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  ${ButtonLight} {
    width: 100%;
  }

  &.is-open {
    display: flex;
  }

  h2 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900px;
    line-height: 21px;
    text-align: center;
    color: ${colors.red};
    padding-top: 8px;
    margin-bottom: 16px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;

  }
`
export const SideBar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

`
export const Prices = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.red};
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.white};
  margin-bottom: 40px;
  position: relative;


  img {
    margin: 8px;
  }

  div  {
    img {
      max-width: 16px;
      max-height: 16px;
    }
  }
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  margin-bottom: 16px;
  font-family: Roboto;
  font-weight: 700px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

`
export const ImgLixeira = styled.div`
  position: absolute;
  left: 300px;
  top: 68px;
  cursor: pointer;

    button {

    }
  `
