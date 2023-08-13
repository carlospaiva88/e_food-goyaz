import styled from 'styled-components'
import { Props } from '.'

export const Tag = styled.div<Props>`
  background-color: #E66767;
  color: #FFEBD9;
  margin: 8px;
  display: inline-block;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 8px')};
  padding: 6px;
  border: none;
  position: absolute;
  top: 0px;
  right: 10px;
  font-family: Roboto;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0em;



`

