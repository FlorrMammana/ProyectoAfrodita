import NavBar from "./NavBar"

function Header ({titulo}) {

  return(
        <header>
            <img src="/afroditaSinFondo.png" alt="logo"/>
            <h1>{titulo}</h1>
            <NavBar />
        </header>
    )
}

export default Header