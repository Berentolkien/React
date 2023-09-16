import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
        <h3>Libros Perdidos</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/Fantasia`} activeClassName='ActiveOption'>Fantasía</NavLink>
        <NavLink to={`/category/Novela`} activeClassName='ActiveOption'>Novela</NavLink>
        <NavLink to={`/category/Periodistico`} activeClassName='ActiveOption'>Periodístico</NavLink>
        <NavLink to={`/category/Psicologia`} activeClassName='ActiveOption'>Psicología</NavLink>
      </div>
      <CartWidget />   
    </nav>
  )
}

export default NavBar;
