import CartWidget from './CartWidget/CartWidget'

function NavBar (){
    const iconStyle = {
        height: "100px",
        width: "120px",
    };
    return(
        <>
        <h1>Coffee Shop</h1>
        <nav>
            <div>
                <img style={iconStyle} src="https://fbcd.co/images/products/418b34198565843271c8ba55932350a3_resize.png" alt="logo del coffee shop" />
            </div>
            <ul>
                <a href="#"><li>Café Clásico</li></a>
                <a href="#"><li>Café de Especialidad</li></a>
                <a href="#"><li>Otras Bebidas</li></a>
            </ul>
            <div>
                <CartWidget />
            </div>
        </nav>
        </>
        
    );
}

export default NavBar;