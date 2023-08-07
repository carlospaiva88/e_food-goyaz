import { Card, CardList } from './styles'

const List = () => (
  <div>
    <CardList>
      <Card>
        <div>
          <img src="" alt="" />
          <span></span>
          <span></span>
        </div>
        <div>
          <h2>Hioiki Sushi</h2>
          <p>4.9</p>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <button>Saiba mais</button>
        </div>
      </Card>
      <Card>
        <div>
          <img src="" alt="" />
          <span></span>
          <span></span>
        </div>
        <div>
          <h2>La Dolce Vita Trattoria</h2>
          <p>4.9</p>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </div>
      </Card>
    </CardList>
  </div>
)

export default List
