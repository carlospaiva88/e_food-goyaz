import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.lightRed};
  color: ${colors.beige};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

export const TagLink = styled(Link)`
  text-decoration: none;
  color: ${colors.beige};
  background-color: ${colors.lightRed};
  padding: 4px 6px;
  display: inline-block;
`
