import styled from 'styled-components'
import { colors } from '../../styles'

export const Button = styled.button`

  background-color: ${colors.red};
  color: ${colors.lightGray};
  margin: 8px;
  padding: 4px;
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

`
export const ButtonLight = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.red};
  width: 95%;


`
