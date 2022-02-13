import { Link } from "react-router-dom"
import CartView from "../carts/CartView"

const NavBar = () => (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
      <Link to="/">
            <img src="/afroditaSinFondo.png" alt="logo" className="logo"/>
            </Link>
          <ul className="navbar-nav barra">
            <li className="nav-item ">
              <Link className="nav-link " aria-current="page" to="/categoria/lashes">Lashes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/categoria/manos">Nails</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/categoria/combos">Sale</Link>
            </li>       
        <Link to='./Cart'>
                <CartView />
        </Link>
      </ul>
    </div>
</nav>

    </>
    )

export default NavBar
