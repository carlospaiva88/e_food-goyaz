import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  margin-bottom: 40px;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 280px;
  }

  > img {
    margin-bottom: -4px;
    width: 472px;
    height: 217px;
    object-fit: cover;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 280px;
    }
  }
`

export const CardTextBox = styled.div`
  padding: 8px;
  border: 1px solid ${colors.lightRed};
  border-top: none;
  background-color: ${colors.white};

  p {
    margin-bottom: 16px;
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: bold;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;

    > img {
      margin-left: 8px;
    }
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
    font-size: 12px;
  }
`
