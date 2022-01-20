import { Link } from "react-router-dom"
import CartView from "./CartView"

const NavBar = ({links}) => (
    <div>
        <nav>
        <Link to="/categoria/lashes">Lashes</Link>
        <Link to="/categoria/manos">Manos</Link>
        <Link to="/categoria/combos">Promociones</Link>
            <Link to='./Cart'>
                <CartView />
            </Link>
        </nav>
    </div>
)

export default NavBar
