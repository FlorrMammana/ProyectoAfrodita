import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartView from "./CartView"

const NavBar = () => (
    <>
    <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
    <Link to="/">
        <img src="/afroditaSinFondo.png" alt="logo" className="logo"/>
        </Link>
    <Nav className="me-auto">
    <Nav.Link to="/categoria/lashes">Lashista</Nav.Link>
    <Nav.Link to="/categoria/manos">Manicuria</Nav.Link>
    <Nav.Link to="/categoria/combos">Promociones</Nav.Link>
    <Link to='./Cart'>
                <CartView />
            </Link>
    </Nav>
    </Container>
    </Navbar>
    </>
    )

export default NavBar
