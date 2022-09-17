import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenshinAbout from './components/genshin-store/GenshinAbout';
import GenshinContainer from './components/genshinimpact/GenshinContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './context/CartContext';


function App() {

  return (
    <CartContext.Provider>
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"/>}/>
        <Route path='/aboutus' element={<GenshinAbout/>}/>
        <Route path="/characters" element={<GenshinContainer/>}/>
        <Route path="/weapons" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    )
  }



export default App;
