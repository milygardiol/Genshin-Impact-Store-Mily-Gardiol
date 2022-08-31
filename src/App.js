import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';
import GenshinContainer from './components/genshinimpact/GenshinContainer';



function App() {

  return (
    <div>
      <header>
          <NavBar/>
          <ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"></ItemListContainer>
          <GenshinContainer></GenshinContainer>
        <div>
        </div>
      </header>
    </div>
    )

  }



export default App;
