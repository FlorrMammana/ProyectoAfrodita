import NavBar from "./NavBar"

function Header ({titulo}) {

  return(
        <header>
                <a href="/"><img src="/afroditaSinFondo.png" alt="logo" className="logo"/></a>
            <h1>{titulo}</h1>
            <NavBar />
        </header>
    )
}

export default Header