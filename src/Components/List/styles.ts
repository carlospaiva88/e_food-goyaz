import styled from 'styled-components'
import { colors } from '../../styles'

export const CardList = styled.ul`

  @media screen and (max-width:414px) {
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width:768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-column-gap: 15px;
    grid-row-gap: 1em;
  }
  @media screen and (min-width:1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    grid-column-gap: 15px;
    grid-row-gap: 1em;
  }


`
export const Card = styled.li`
  width: 100%;
  background: ${colors.white};
  border: 1px solid ;
  position: relative;

  @media screen and (min-width:280px) {
    display: block;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;

    img{
      width: 100%;
    }
  }

  span {
    position: absolute;
    top: 0px;
    right: 100px;
    width: 100%;
  }
`
export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.red};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 8px;

  div {
    display: flex;
    margin: 8px;

    p {
      margin-right: 6px;
      margin-bottom: 1px;
      color: ${colors.red};

      @media screen and (min-width:375px) {
        margin-top: 6px;
      }
    }
  }
  @media screen and (min-width:375px) {
    font-size: 12px;
    line-height: 7px;
    margin: 0 auto;
    h2 {
      margin-left: 5px;
    }
  }


`
export const TextCard = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${colors.red};
  margin-bottom: 18px;
  margin: 8px;


`
