import {useState} from "react"

const Count = ({stock, initial}) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1)
            }
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const confirmarContador = () => {
        setContador(1)
    }
    

    return(
        <div>
            <p className="text-center"><strong >Seleccionado: </strong>{contador} unidades</p>
            <div className="vstack gap-2">
                <button type="button" className="btn btn-secondary" onClick={aumentarContador}>Agregar</button>
                <button type="button" className="btn btn-outline-secondary" onClick={confirmarContador}>Finalizar</button>
                <button type="button" className="btn btn-secondary" onClick={disminuirContador}>Quitar</button>

            </div>
        </div>
    )
}

export default Count