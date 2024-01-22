import Modal from "../../Components/Modal"
import { RestaurantType } from "../../Components/List";
import { ContainerProduct, ProfileCard, ProfileCardList } from './styles'
import { useEffect, useState } from "react"

export interface MenuType {
    nome: string;
    foto: string | undefined;
    tipo: string;
    id: number | string;
    capa: string;
    titulo: string;
    descricao: string;
    preco: number;
    porcao: string;
    quantity: number;
}

export interface ProductProps {
  profile: RestaurantType | null
}
export interface HeroProps {
  profile: RestaurantType | null
}


const Product: React.FC<ProductProps> = ({ profile }) => {
    const [restaurantData, setRestaurantData] = useState<Array<MenuType>>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

  function limitWords(text: string, limit: number) {
    const words = text.split(' ')
    if(words.length > limit) {
      return words.slice(0, limit).join(' ') + '...'
    }
    return text
  }

    useEffect(() => {
      if (profile) {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${profile.id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("OS DADOS VIERAM", data.cardapio)
                    setTimeout(() => {
                      setRestaurantData(data.cardapio)
                      setIsLoading(false)
                    }, 0)
                })
                .catch((error) => {
                console.error('Erro ao buscar dados da API', error)
            })
          }
    }, [])
    // const pizzarias = restaurantData.filter((restaurant) => restaurant.tipo === 'pizzaria');
    return (
        <>
            <ContainerProduct>
                <div>
                    <ProfileCardList>
                        {
                            isLoading === true
                            ? <div>Carregando...</div>
                            : restaurantData.map((item, index) => (
                                <ProfileCard key={item.id}>
                                    <img src={item.foto} alt={item.nome} />
                                    <h2>{item.nome}</h2>
                                    <p>{limitWords(item.descricao, 20)}</p>
                                    {/* <p>Preço: R${item.preco.toFixed(2)}</p> */}
                                    {/* <p>Porção: {item.porcao}</p> */}
                                    <Modal
                                      capa={item.foto || ""}
                                      descricao={ item.descricao }
                                      preco={ item.preco }
                                      id={item.id}
                                      porcao={ item.porcao }
                                      titulo={ item.nome }
                                      key={  item.id }
                                      tabIndex={index}
                                    />
                                </ProfileCard>
                            ))
                        }
                    </ProfileCardList>
                </div>
            </ContainerProduct>
        </>
    )
}

export default Product
