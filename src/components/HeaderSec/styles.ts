import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 164px;
  background-repeat: no-repeat;
  background-size: cover;

  &.desk-display {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile-display {
    @media (min-width: 767px) {
      display: none;
    }
  }

  .container {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 56px;
    padding-bottom: 56px;

    @media (max-width: 767px) {
      max-width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 24px;
    }

  img {
    width: 125px;
    margin-left: 72px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`
export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${colors.lightRed};

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`
