import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <ItemsListContainer greeting='Bienvenidos a Staem' subTitle='Plataforma de juegos'></ItemsListContainer>
      </header>
    </div>
  );
}

export default App;
