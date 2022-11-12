import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemList from './components/ItemList/ItemList';
/* import Carousel from './components/Carousel/Carousel'; */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    
<div className="App">
 
      <NavBar/>
      <ItemsListContainer />
   
{/*       <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemsListContainer/>}/>
          <Route path='ItemDetailContainer' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
 */}

 </div>
    
  );
}

export default App;
