import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import './header.css';

function Header() {
  return (
    <div className="header">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <nav>
          <NavLink to="/">
            Главная
          </NavLink>
          <NavLink to="/projects">
            Проекты
          </NavLink>
        </nav>
        <div>
          <button className="btn">Связаться</button>
        </div>
    </div>
  )
}

export default Header