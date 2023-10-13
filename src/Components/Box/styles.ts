import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  display: flex;
  align-items: center;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 30px;
  border-radius: 5px;

    div {
      margin-left: 24px;
    }
    p {
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;

    }
    h2 {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 900;
    }
    img {
      object-fit: cover;
      width: 280px;
      height: 280px;

    }
    span {
      position: relative;
      top: -150px;
      left: 960px;
      cursor: pointer;

      @media (max-width: ${breakpoints.tablet}) {
        top: -280px;
        left: 333px;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      height: auto;
    }


`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
`
