import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getDocs} from "firebase/firestore"
import { coleccion } from '../../firebase/Firebase';
const ItemListContainer = () => {

    let [lista, setLista] = useState([])

    useEffect(() => {

        const pedido = getDocs(coleccion)

        pedido
        .then((resultado)=>{
            const docs = resultado.docs
            const docs_formateado = docs.map(doc =>{
                const producto = {
                    id : doc.id,
                    ...doc.data()
                }
                return producto
            })
           setLista(docs_formateado)
        })
        .catch((error)=>{
            console.log(error)
        })

        
    })
    return (
        <div> 
            <ItemList lista={lista} />
        </div>
    )  
}



export default ItemListContainer


