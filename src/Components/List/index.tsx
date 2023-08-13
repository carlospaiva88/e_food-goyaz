import { Card, CardList, TextCard, TitleCard } from './styles'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'
import star from '../../assets/images/favorite-star.png'
import { Button } from '../Button/styles'
import Tag from '../../Tags'
import { Link } from 'react-router-dom'


const List = () => (
  <div>
    <CardList>
      <Card>
          <img src={sushi} alt="sushi" />
            <span>
              <Tag size='big'>Destaque da semana</Tag>
            </span>
            <Tag size='big'>Japonesa</Tag>
        <TitleCard>
          <h2>Hioiki Sushi</h2>
          <div>
              <p>4.9</p>
          <img src={star} alt="" />
          </div>
        </TitleCard>
        <div>
          <TextCard>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </TextCard>
          <Button>Saiba mais</Button>
        </div>
      </Card>
      <Card>
          <img src={pasta} alt="sushi" />
            <Tag size='big'>Italiana</Tag>
        <TitleCard>
          <h2>La Dolce Vita Trattoria</h2>
          <div>
              <p>4.9</p>
          <img src={star} alt="" />
          </div>
        </TitleCard>
        <div>
          <TextCard>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
          </TextCard>
          <Link to='/profile'>
            <Button>Saiba mais</Button>
          </Link>
        </div>
      </Card>
      <Card>
        <div>
          <img src={pasta} alt="sushi" />
          <span></span>
          <span></span>
        </div>
        <TitleCard>
          <h2>La Dolce Vita Trattoria</h2>
          <div>
              <p>4.9</p>
          <img src={star} alt="" />
          </div>
        </TitleCard>
        <div>
          <TextCard>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
          </TextCard>
          <Button>Saiba mais</Button>
        </div>
      </Card>
      <Card>
        <div>
          <img src={sushi} alt="sushi" />
          <span></span>
          <span></span>
        </div>
        <TitleCard>
          <h2>Hioiki Sushi</h2>
          <div>
              <p>4.9</p>
          <img src={star} alt="" />
          </div>
        </TitleCard>
        <div>
          <TextCard>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </TextCard>
          <Button>Saiba mais</Button>
        </div>
      </Card>
    </CardList>
  </div>
)

export default List
