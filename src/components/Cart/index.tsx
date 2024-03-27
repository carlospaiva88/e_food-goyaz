import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import trashBin from '../../assets/images/trash.png'

import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../DishCard'
import { usePurchaseMutation } from '../../services/api'

import { Button } from '../../styles'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cartCheck, setCartCheck] = useState(true)
  const [paymentActive, setPaymentActive] = useState(false)
  const [hideCart, setHideCart] = useState(false)
  const [requiredInput, setRequiredInput] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      deliverToName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      validationCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      deliverToName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(6, 'O endereço precisa ter pelo menos 7 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.number()
        .min(1, 'O número precisa ter pelo menos 1 dígito')
        .required('O campo é obrigatório'),
      complement: Yup.string().optional(),
      cardName: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 16 digitos')
        .max(19, 'O campo precisa ter 16 digitos')
        .required('O campo é obrigatório'),
      validationCode: Yup.string()
        .min(3, 'O campo precisa ter 3 digitos')
        .max(3, 'O campo precisa ter 3 digitos')
        .required('O campo é obrigatório'),
      expireMonth: Yup.string().required('O campo é obrigatório'),
      expireYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.deliverToName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.validationCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const checkInput = (fieldName: string) => {
    const touched = checkInputTouched(fieldName)
    const errors = checkInputValid(fieldName)
    const hasError = touched && errors

    return hasError
  }

  const checkInputTouched = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    return isTouched
  }

  const checkInputValid = (fieldName: string) => {
    const isInvalid = fieldName in form.errors
    return isInvalid
  }

  const checkAddressTouched = () => {
    const nameTouched = checkInputTouched('deliverToName')
    const addressTouched = checkInputTouched('address')
    const cityTouched = checkInputTouched('city')
    const cepTouched = checkInputTouched('cep')
    const houseNumberTouched = checkInputTouched('houseNumber')
    const adressTouched =
      nameTouched ||
      addressTouched ||
      cityTouched ||
      cepTouched ||
      houseNumberTouched

    return adressTouched
  }

  const checkAddressError = () => {
    const nameError = checkInputValid('deliverToName')
    const addressError = checkInputValid('address')
    const cityError = checkInputValid('city')
    const cepError = checkInputValid('cep')
    const houseNumberError = checkInputValid('houseNumber')
    const deliverError =
      nameError || addressError || cityError || cepError || houseNumberError

    return deliverError
  }

  const showPayment = () => {
    const isAddressTouched = checkAddressTouched()
    const isAddressError = checkAddressError()
    if (isAddressTouched && !isAddressError) {
      return setPaymentActive(true), setCartCheck(true)
    } else {
      return setRequiredInput(true)
    }
  }

  const finishPayment = () => {
    form.handleSubmit
    setPaymentActive(false)
  }

  const hideCartList = () => {
    setCartCheck(false)
    setHideCart(true)
  }

  const paymentComplete = () => {
    dispatch(clear())
    setHideCart(false)
    dispatch(close())
    navigate('/')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <div className={hideCart ? 'hide-order' : ''}>
              <ul>
                {items.map((item) => (
                  <>
                    <S.CartItem key={item.nome}>
                      <S.InfoBox>
                        <img src={item.foto} alt="pizza" />
                        <div>
                          <p>{item.nome}</p>
                          <span>{formatPrice(item.preco)}</span>
                        </div>
                      </S.InfoBox>
                      <S.TrashContainer>
                        <img
                          src={trashBin}
                          alt="lixeira"
                          onClick={() => removeItem(item.id)}
                        />
                      </S.TrashContainer>
                    </S.CartItem>
                  </>
                ))}
              </ul>
              <S.TotalValue>
                <p>Valor total</p>
                <span>{formatPrice(getTotalPrice())}</span>
              </S.TotalValue>
              <Button type="button" onClick={() => hideCartList()}>
                Continuar com a entrega
              </Button>
            </div>
            <form onSubmit={form.handleSubmit}>
              <S.DeliverPayment className={cartCheck ? 'is-inactive' : ''}>
                <h3>Entrega</h3>
                <S.InputGroup>
                  <label htmlFor="deliverToName">Quem irá receber</label>
                  <input
                    id="deliverToName"
                    name="deliverToName"
                    type="text"
                    value={form.values.deliverToName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInput('deliverToName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInput('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInput('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <ReactInputMask
                      id="cep"
                      name="cep"
                      type="text"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('cep') ? 'error' : ''}
                      mask="99999-999"
                      maskChar={''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="houseNumber">Número</label>
                    <ReactInputMask
                      id="houseNumber"
                      name="houseNumber"
                      type="text"
                      value={form.values.houseNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('houseNumber') ? 'error' : ''}
                      mask="9999"
                      maskChar=""
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    name="complement"
                    type="text"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <S.ErrorText className={requiredInput ? 'show-error' : ''}>
                  *Preencha os campos acima
                </S.ErrorText>
                <Button
                  type="button"
                  onClick={() => showPayment()}
                  className="margintop"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setHideCart(false)
                    setCartCheck(true)
                  }}
                >
                  Voltar para o carrinho
                </Button>
              </S.DeliverPayment>
              <S.DeliverPayment className={paymentActive ? '' : 'is-inactive'}>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                </h3>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInput('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup className="input-big">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <ReactInputMask
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('cardNumber') ? 'error' : ''}
                      mask="9999 9999 9999 9999"
                      maskChar={''}
                    />
                  </S.InputGroup>
                  <S.InputGroup className="input-small">
                    <label htmlFor="validationCode">CVV</label>
                    <ReactInputMask
                      id="validationCode"
                      name="validationCode"
                      type="text"
                      value={form.values.validationCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('validationCode') ? 'error' : ''}
                      mask="999"
                      maskChar={''}
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expireMonth">Mês do vencimento</label>
                    <ReactInputMask
                      id="expireMonth"
                      name="expireMonth"
                      type="text"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('expireMonth') ? 'error' : ''}
                      mask="99"
                      maskChar={''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expireYear">Ano de vencimento</label>
                    <ReactInputMask
                      id="expireYear"
                      name="expireYear"
                      type="text"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('expireYear') ? 'error' : ''}
                      mask="99"
                      maskChar={''}
                    />
                  </S.InputGroup>
                </S.Row>
                <Button
                  title="Clique aqui para finalizar a compra"
                  type="submit"
                  className="margintop"
                  onClick={() => finishPayment()}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setPaymentActive(false)
                    setCartCheck(false)
                  }}
                >
                  Voltar para a edição de endereço
                </Button>
              </S.DeliverPayment>
              {isLoading ? (
                <S.LoadingText>Finalizando pedido...</S.LoadingText>
              ) : (
                <S.FinishText className={isSuccess ? 'show-text' : ''}>
                  <h3>Pedido realizado - {data?.orderId}</h3>
                  <div className="marginbottom">
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <br />
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <br />
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <br />
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                  </div>
                  <Button type="button" onClick={() => paymentComplete()}>
                    Concluir
                  </Button>
                </S.FinishText>
              )}
            </form>
          </>
        ) : (
          <p className="empty-text">Seu carrinho está vazio...</p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
