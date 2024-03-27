import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  max-width: 320px;
  max-height: 338px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 8px;
  background-color: ${colors.lightRed};

  img {
    max-width: 304px;
    max-height: 167px;
    width: 100%;
    height: 100%;
    margin-bottom: -4px;
    object-fit: cover;
  }
`
export const CardText = styled.div`
  color: ${colors.beige};

  h4,
  p {
    padding-top: 8px;
  }

  h4 {
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    width: 304px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.lightRed};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 80%;
  }

  > img {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
  }

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`

export const ModalText = styled.div`
  display: flex;
  padding: 8px 32px 32px 32px;
  column-gap: 24px;
  width: 100%;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 180px;
      height: 180px;
    }
  }

  p {
    height: 176px;
    width: 656px;
    line-height: 22px;
    font-size: 14px;
    margin: 16px 0;

    @media (max-width: 768px) {
      width: 100%;
      line-height: 18px;
    }
  }

  button {
    max-width: 218px;
    height: 24px;
    margin-top: 0;
  }
`
