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
            <p className="text-center seleccionado">{contador} unidades</p>
            <div className="text-center gap-2">
                <button type="button" className="btn btn-dark btn-lg" onClick={disminuirContador}>-</button>
                <button type="button" className="btn btn-outline-dark btn-lg px-2" onClick={() => onAdd(contador)}>Agregar al carrito</button>
                <button type="button" className="btn btn-dark btn-lg" onClick={aumentarContador}>+</button>

            </div>
        </div>
    )
}

export default Count