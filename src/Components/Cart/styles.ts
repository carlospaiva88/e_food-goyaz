import styled from "styled-components"
import { colors } from "../../styles"

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
  `
