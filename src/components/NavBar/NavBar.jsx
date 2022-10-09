import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar (){

    return(
        <>
        <nav className='navContainer'>
            <div>
                <img className='navLogo' src="https://fbcd.co/images/products/418b34198565843271c8ba55932350a3_resize.png" alt="logo del coffee shop" />
            </div>
            <h1 className='navTitle'>Coffee Shop</h1>
            <ul>
                <Link to="/">Inicio</Link>
                <Link to="/category/">Café clásico</Link>
                <Link to="/category/">Café de especialidad</Link>
                <Link to="/category/">Otras bebidas</Link>
            </ul>
            <div className='cartStyles'>
                <CartWidget />
            </div>
        </nav>
        </>
        
    );
}

export default NavBar;