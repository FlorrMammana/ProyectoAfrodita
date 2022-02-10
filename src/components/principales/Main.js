import ItemListContainer from "../items/ItemListContainer"
import { useUser } from "../../firebase/auth/hooks";
function Main(){
    
    const user = useUser();

    return(
        <main>
            <header>
                Bienvenido: {user.displayName} - {user.email}
                <ItemListContainer initial={1} stock={10}/>
            </header>
        </main>
    )
}

export default Main
