import { TagContainer, TagLink } from './styles'

export type Props = {
  type: 'tag' | 'link'
  children: string
  to?: string
}

export const Tag = ({ children, type, to }: Props) => {
  if (type === 'tag') {
    return <TagContainer type={type}>{children}</TagContainer>
  }
  return <TagLink to={to as string}>{children}</TagLink>
}

export default Tag
