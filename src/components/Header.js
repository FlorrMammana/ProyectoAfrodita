import NavBar from "./NavBar"
import {Link} from "react-router-dom"

function Header ({titulo}) {

  return(
        <header>
        <Link to="/">
        <img src="/afroditaSinFondo.png" alt="logo" className="logo"/>
        </Link>
            <h1>{titulo}</h1>
            <NavBar />
        </header>
    )
}

export default Header