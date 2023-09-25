import styled from 'styled-components'
import { colors } from '../../styles'

export const Button = styled.button`
  background-color: ${colors.red};
  color: ${colors.lightGray};
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  width: 82px;
  margin: 8px;
  padding: 2px;
  margin-top: auto;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonLight = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.red};
  width: 304px;
  margin: 5px;
`
