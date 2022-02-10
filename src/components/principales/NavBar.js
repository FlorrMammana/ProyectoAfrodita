import { Link } from "react-router-dom"
import CartView from "../carts/CartView"

const NavBar = () => (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/">
        <img src="/afroditaSinFondo.png" alt="logo" className="logo"/>
        </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/categoria/lashes">Lashes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/manos">Manicuria</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/combos">Promociones</Link>
        </li>
        <Link to='./Cart'>
                <CartView />
            </Link>
      </ul>
    </div>
  </div>
</nav>

    </>
    )

export default NavBar
