import NavBar from "./NavBar"
//import {Link} from "react-router-dom"

function Header ({titulo}) {

  return(
        <header className="espaciado">
            <h1>{titulo}</h1>
            <NavBar />
        </header>
    )
}

export default Header