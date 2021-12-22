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

    const confirmarContador = () => {
        setContador(1)
        onAdd()
    }
    

    return(
        <div>
            <p><strong>Contador Actual:</strong>{contador}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={confirmarContador}>Confirmar</button>
            <button onClick={disminuirContador}>disminuir</button>
        </div>
    )
}

export default Count