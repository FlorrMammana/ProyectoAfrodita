import {useState} from "react"

const Count = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1)
            }
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }
    

    return(
        <div>
            <p className="text-center seleccionado"><strong >Seleccionado: </strong>{contador} unidades</p>
            <div className="vstack gap-2">
                <button type="button" className="btn btn-secondary" onClick={aumentarContador}>+</button>
                <button type="button" className="btn btn-outline-secondary " onClick={() => onAdd(contador)}>Agregar al carrito</button>
                <button type="button" className="btn btn-secondary" onClick={disminuirContador}>-</button>
            </div>
        </div>
    )
}

export default Count