import './Nav.css'
//components
import { CartWidget } from '../CartWidget/CartWidget.jsx';
//react router dom
import { Link } from 'react-router-dom';


export function Nav( {cartItems}) {
    return (

        <header className='header'>
            <div className='logo'>
            <Link className='li' to='/'> <img src="/logo_ecommerce.jpg" alt="Logo-Ecommerce" /></Link>
            </div>
            <article className='carrito'>
                <CartWidget cartItems={cartItems} />
            </article>
            <nav >
                <ul className='nav-links'>
                    <Link className='li' to='/'>Home</Link>
                    <Link className='li' to='/contact'>Contact</Link>
                    <Link className='li' to='/about'>About Us</Link>
                </ul>
            </nav>

        </header>



    )
}