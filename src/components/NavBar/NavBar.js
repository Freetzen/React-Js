import './NavBar.css';
import logo from'../../images/logoBlanco.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    
    <div className="navbar bg-base-100 flex">
        <div className="flex-5">
          <a className=" logoNavBar btn btn-ghost normal-case text-xl" href='https://www.google.com'><img src={logo}></img></a>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a>Free to Play</a></li>
          <li><a>Acción</a></li>
          <li><a>Terror</a></li>
        </ul>
      </div>
    
      <CartWidget/>

    </div>

  )
};

export default NavBar;