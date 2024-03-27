import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .margintop {
    margin-top: 24px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  background-color: ${colors.lightRed};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    padding-bottom: 24px;
  }

  .order-list {
    display: none;
  }

  .empty-text {
    color: ${colors.white};
    display: block;
    text-align: center;
  }

  .hide-order {
    display: none;
  }
`

export const CartItem = styled.li`
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${colors.beige};
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`

export const InfoBox = styled.div`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
`

export const TrashContainer = styled.div`
  width: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  > img {
    height: 16px;
    width: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const TotalValue = styled.div`
  margin-bottom: 8px;
  display: flex;
  color: ${colors.beige};
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`

export const DeliverPayment = styled.div`
  &.is-inactive {
    display: none;
  }

  h3 {
    color: ${colors.beige};
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  button {
    margin-bottom: 8px;
  }
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    color: ${colors.beige};
    margin-top: 8px;
  }

  input {
    height: 32px;
    background-color: ${colors.beige};
    border: none;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;
    font-size: 14px;

    &.error {
      border: 2px solid red;
    }
  }

  &.input-big {
    max-width: 228px;
    width: 100%;
  }

  &.input-small {
    max-width: 87px;
    width: 100%;
  }
`

export const ErrorText = styled.p`
  color: ${colors.beige};
  display: none;

  &.show-error {
    display: block;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LoadingText = styled.span`
  color: ${colors.beige};
`

export const FinishText = styled.div`
  color: ${colors.beige};
  display: none;

  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: thin;
  }

  .marginbottom {
    margin-bottom: 24px;
  }

  &.show-text {
    display: block;
  }
`
