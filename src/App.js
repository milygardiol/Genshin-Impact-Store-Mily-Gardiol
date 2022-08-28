import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <div>
      <header>
          <NavBar/>
          <ItemListContainer greeting= "¡Welcome to Genshin Impact Store!"></ItemListContainer>
        <div>
        </div>
      </header>
    </div>
    )

  }



export default App;
