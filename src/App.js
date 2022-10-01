import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenshinAbout from './components/genshin-store/GenshinAbout';
import ItemDetailContainer from './components/genshinimpact/ItemDetailContainer';
import GenFirebase from './components/genshinimpact/GenFirebase';
import CartProvider from './context/CartContext';
import Cart from "./components/cart/Cart";
import GenshinWeapons from './components/weapons/GenshinWeapons';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"/>}/>
          <Route path='/aboutus' element={<GenshinAbout/>}/>
          <Route path="/characters" element={<GenFirebase/>}/>
          <Route path="/detail" element={<ItemDetailContainer/>}/>
          <Route path="/firebase"  element={<GenFirebase/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/weapons' element={<GenshinWeapons/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    )
  }



export default App;
