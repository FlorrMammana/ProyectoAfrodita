import { Link } from "react-router-dom"

const NavBar = ({links}) => (
    <div>
        <nav className="list-inline" >
            <li className="list-inline-item"><a href="/categoria/lashes">Lashes</a></li>
            <li className="list-inline-item"><a href="/categoria/manos">Uñas</a></li>
            <li className="list-inline-item"><a href="/categoria/combos">Promociones</a></li>
            <Link to='./Cart'>
                <span className="material-icons">
                        shopping_cart
                </span>
            </Link>
        </nav>
    </div>
)

export default NavBar
