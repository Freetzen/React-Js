import './NavBar.css';
import logo from'../../images/logoBlanco.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header className='headerNav'>

      <nav className='NavBarContainer'>

        <div>
          <a href='#'><img className='logoNavBar' src={logo}></img></a>
        </div>

        <div className='divLista'>

          <ul className='ulLista'>

            <a href='https://www.google.com'><li>Free to Play</li></a>
            <a href='https://www.google.com'><li>Acción</li></a>
            <a href='https://www.google.com'><li>Aventura</li></a>
            <a href='https://www.google.com'><li>Terror</li></a>
          </ul>

        </div>

        <div>
        <CartWidget></CartWidget>
        </div>

      </nav>

    </header> 

  )
};

export default NavBar;