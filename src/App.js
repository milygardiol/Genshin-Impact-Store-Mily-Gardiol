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
      </header>
      <main>
        <div>
          <GenshinContainer></GenshinContainer>
        </div>
      </main>
    </div>
    )

  }



export default App;
