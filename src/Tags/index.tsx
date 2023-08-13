import { Tag } from "./styles"

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tags = ({children, size = 'small'}: Props) =>(
  <Tag size={size}>{children}</Tag>
)
export default Tags
