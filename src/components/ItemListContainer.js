import {useState} from "react"

const ItemListContainer = ({initial}) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {

        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }
    

    return (
            
        <div>
            <p>contador actual{contador}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={resetearContador}>resetear</button>
            <button onClick={disminuirContador}>disminuir</button>
        </div>
    )
}


export default ItemListContainer


