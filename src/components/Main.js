import ItemListContainer from "./ItemListContainer"
function Main(){
    return(
        <main>
            <header>
                <h1 className="text-center">WELCOME TO AFRODITA</h1>
                <ItemListContainer initial={1} stock={10}/>
            </header>
        </main>
    )
}

export default Main
