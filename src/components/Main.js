import ItemListContainer from "./ItemListContainer"
import Home from "../firebase/CardLogin"
import SignUp from "../firebase/SignUp"
import Login from "../firebase/Login"
function Main(){
    return(
        <main>
            <header>
                <ItemListContainer initial={1} stock={10}/>
                <Home />
                <SignUp />
                <Login />
            </header>
        </main>
    )
}

export default Main
