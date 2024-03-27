import styled from 'styled-components'

export const RestaurantsContainer = styled.div`
  padding: 80px 0;
`

export const RestaurantsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 320px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

export const ListItem = styled.li`
  padding-right: 80px;

  @media (min-width: 320px) and (max-width: 1104px) {
    display: flex;
    padding-right: 0px;
    justify-content: center;
`
