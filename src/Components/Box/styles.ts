import styled from "styled-components";
import { colors } from "../../styles";

export const ModalContent = styled.div`
  width: 90%;
  display: flex;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 30px;
  border-radius: 5px;

    div {
      padding: 10px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }
    h2 {
      font-size: 18px;
      font-weight: 900;
    }
    img {
      object-fit: fill;

    }
    span {
      position: relative;
      top: -25px;
      left: 1164px;
      cursor: pointer;
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
