import { NavLink, Link } from 'react-router-dom';
import NavBarCss from '../styles/NavBar.css';
import LogoExperts from './LogoExperts';
function NavBar() {

    return (
        <nav>
            <Link to="/" className='logo' activeClassName='active'>
                <LogoExperts />
            </Link>
            <div className='btn-container'>
                <NavLink to="/nosotros" className='btn' activeClassName='active'>Nosotros</NavLink>
                <NavLink to="/servicios" className='btn' activeClassName='active'>Servicios</NavLink>
                <NavLink to="/ubicacion" className='btn' activeClassName='active'>Ubicacion</NavLink>
                <NavLink to="http://200.105.251.174/experts/SignIn.aspx" className='btn' activeClassName='active'>Sistema</NavLink>

            </div>
        </nav>
    );
}

export default NavBar;