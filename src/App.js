import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/genshinimpact/ItemListContainer';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenshinAbout from './components/genshin-store/GenshinAbout';
import CartProvider from './context/CartContext';
import GenshinWeapons from './components/weapons/GenshinWeapons';
import React from 'react';
import Elements from './components/genshinimpact/Elements';
import Cart from './components/cart/Cart';
export const CartContext = React.createContext("")
console.log("CartContext: " , CartContext);

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"/>}/>
          <Route path='/aboutus' element={<GenshinAbout/>}/>
          <Route path='/weapons' element={<GenshinWeapons/>}/>
          <Route path='/characters/element/:id' element={<Elements/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    )
  }



export default App;
