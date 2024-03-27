import { ImageBanner } from './styles'

type Props = {
  image: string
  category: string
  name: string
}

const Banner = ({ image, category, name }: Props) => (
  <ImageBanner style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <h4>{category}</h4>
      <h3>{name}</h3>
    </div>
  </ImageBanner>
)

export default Banner
