import styled from "styled-components";
import { colors } from "../../styles";

export const ProfileCardList = styled.ul`
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
export const ProfileCard = styled.li`
  background-color: ${colors.red};
  color: ${colors.white};
  margin: 5px;

  img {
    width: 100%;
    height: 200px;
    padding: 10px;
    object-fit: cover;
  }

  h2 {
    color: ${colors.lightGray};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    padding: 8px;
  }
  p {
    padding: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  @media screen and (min-width:280px) {
    display: block;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;

    img{
      width: 100%;
    }
  }

`
export const ContainerProduct = styled.div`

`
