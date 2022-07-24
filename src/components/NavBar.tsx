import { Button, Container, Nav, Navbar as NavBarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCart } from '../data/svg/ShoppingCart'


export function NavBar() {
const{cartAmount, openCart, closeCart } = useShoppingCart();
    return (
    <NavBarBS sticky="top" className='bg-asd shadow-sm mb-3'> 
        <Container > 
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to='/store' as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to='/about' as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
        {cartAmount > 0 && <Button
            style={{width: "3rem", height: "3rem", position: 'relative'}}
            variant="outline-secondary"
            className="rounded-circle"
        >
            <ShoppingCart/>
            <div
                className='rounded-circle bg-danger d-flex justify-content-center align-item-center'
                style={{
                    color: 'white', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    position: 'absolute', 
                    bottom: '0', 
                    right: '0',
                    transform: "translate(30%, 30%)"
                }}
            >
                {cartAmount}
            </div>
        </Button>}
        </Container> 
    </NavBarBS>
    )
}