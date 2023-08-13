import {  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

export const RouteS = () => (
  <Routes>

    <Route path='/' element={<Home />}></Route>
    <Route path='/profile' element={<Profile />}></Route>

  </Routes>
)
