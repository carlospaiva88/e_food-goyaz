import {  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Profile from './Pages/Profile'
import AsidePagamento from './Pages/Checkout/pagamento'

export const RouteS = () => (
  <Routes>

    <Route path='/' element={<Home />}></Route>
    <Route path='/profile/:id' element={<Profile profile={null} />}></Route>
    <Route path='/product/:id' element={<Product profile={null} />}></Route>
    <Route path='/agradecimento' element={<AsidePagamento navigateToPage={function (page: string): void {
      throw new Error('Function not implemented.')
    } } isCheckoutOpen={false}/>}></Route>

  </Routes>
)
