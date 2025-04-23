import './App.css'
import NavBar from './component/navbar/NavBar'
import Shop from './component/pages/Shop'
import LoginSignup from './component/pages/LoginSignup'
import Cart from './component/pages/Cart'
import Product from './component/pages/Product'
import ShopCategory from './component/pages/ShopCategory'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Man from './component/assets/banner_mens.png'
import Women from './component/assets/banner_women.png'
import Kid from './component/assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={Man} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={Women} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={Kid} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
