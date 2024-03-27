import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantePage from './pages/RestaurantePage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantePage />} />
  </Routes>
)

export default Rotas
