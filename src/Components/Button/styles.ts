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
  height:24px;
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
  max-width: 304px;
  width: 100%;
  height: 24px;
  padding: 5px;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`
export const ButtonModal = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.red};
  width: 218px;
  height: 24px;
  padding: 5px;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`
export const ButtonAside = styled.button`
  background-color: ${colors.white};
  color: ${colors.red};
  max-width: 344px;
  height: 24px;
  width: 100%;
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  border: none;
  margin-bottom: 8px;
  cursor: pointer;

`
