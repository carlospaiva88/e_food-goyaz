import Modal from "../../Components/Box"
import { ContainerProduct, ProfileCard, ProfileCardList } from './styles'
import { useEffect, useState } from "react"
import { pizzariaData } from "./Pizzaria";

export interface Restaurant {
    nome: string;
    foto: string | undefined;
    tipo: string;
    id: number;
    capa: string;
    titulo: string;
    descricao: string;
    preco: number;
    porcao: string;
}

const Product = () => {
    const [restaurantData, setRestaurantData] = useState<Array<Restaurant>>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((response) => response.json())
            .then((data) => {
                console.log("OS DADOS VIERAM", data[4].cardapio)
                setTimeout(() => {
                  setRestaurantData(data[4].cardapio)
                  setIsLoading(false)
                }, 0)
            })
        .catch((error) => {
            console.error('Erro ao buscar dados da API', error)
        })
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
                                    <p>{item.descricao}</p>
                                    <p>Preço: R${item.preco.toFixed(2)}</p>
                                    <p>Porção: {item.porcao}</p>
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
