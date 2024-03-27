import estrela from '../../assets/images/estrela.png'
import { Card, CardTextBox, CardTitle, Infos } from './styles'
import { TagContainer, TagLink } from '../Tag/styles'

type Props = {
  title: string
  category: string
  highlight?: boolean
  description: string
  image: string
  avaliation: number
  id: number
}

export const RestaurantCard = ({
  title,
  category,
  highlight,
  description,
  image,
  avaliation,
  id
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 290) {
      return descricao.slice(0, 287) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={image} alt={title} />
      {highlight ? (
        <Infos>
          <TagContainer type="tag">{'Destaque da semana'}</TagContainer>
          <TagContainer type="tag">
            {`${category.charAt(0).toUpperCase() + category.slice(1)}`}
          </TagContainer>
        </Infos>
      ) : (
        <Infos>
          <TagContainer type="tag">
            {`${category.charAt(0).toUpperCase() + category.slice(1)}`}
          </TagContainer>
        </Infos>
      )}
      <CardTextBox>
        <CardTitle>
          <h3>{title}</h3>
          <span>
            {avaliation}
            <img src={estrela} alt="estrela" />
          </span>
        </CardTitle>
        <p>{getDescription(description)}</p>
        <TagLink to={`/restaurant/${id}`}>Saiba mais</TagLink>
      </CardTextBox>
    </Card>
  )
}
export default RestaurantCard
