import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenshinAbout from './components/genshin-store/GenshinAbout';
import GenshinContainer from './components/genshinimpact/GenshinContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import GenFirebase from './components/firebase/GenFirebase';
import CartProvider from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"/>}/>
          <Route path='/aboutus' element={<GenshinAbout/>}/>
          <Route path="/characters" element={<GenshinContainer/>}/>
          <Route path="/weapons" element={<ItemDetailContainer/>}/>
          <Route path="/firebase"  element={<GenFirebase/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    )
  }



export default App;
