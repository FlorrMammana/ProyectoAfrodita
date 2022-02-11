import ItemListContainer from "../items/ItemListContainer"
function Main(){
    
    return(
        <main>
            <header>
                <ItemListContainer initial={1} stock={10}/>
            </header>
        </main>
    )
}

export default Main
