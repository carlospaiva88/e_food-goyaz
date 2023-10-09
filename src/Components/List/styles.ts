import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }


`
export const Card = styled.li`
  background: ${colors.white};
  border: 1px solid ;
  position: relative;
  width: 472px;
  height: 398px;
  display: grid;
  grid-template-rows: 217px auto minmax(0, 1fr);
  overflow: hidden;


  span {
    position: absolute;
    top: 0px;
    right: 100px;
    width: 100%;
  }

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
  h2 {
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 328px;
    height: auto;
  }
`
export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.red};

  font-size: 18px;
  font-weight: 700;
  margin-top: 4px;
  margin-left: 8px;

  div {
    display: flex;
    margin: 8px;

    p {
      margin-right: 6px;
      margin-bottom: 1px;
      color: ${colors.red};
    }
  }
`
export const TextCard = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.red};
  margin: 5px;
`
export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
