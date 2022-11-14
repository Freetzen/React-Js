import './NavBar.css';
import logo from'../../images/logos/logoBlanco.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <div className="navbar bg-base-100 flex headerNav">
        <div className="flex-5">
          <Link to='/' className=" logoNavBar btn btn-ghost normal-case text-xl" href='https://www.google.com'><img src={logo}/></Link>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/oferta/'}>Oferta!!</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/accion'}>Acción</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/terror'}>Terror</NavLink></li>
        </ul>
      </div>
    
      <CartWidget/>

    </div>

  );
};

export default NavBar;