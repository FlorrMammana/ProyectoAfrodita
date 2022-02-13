import { useState, useEffect} from "react"
import ItemList from "./ItemList"
import { getDocs, query, where} from "firebase/firestore"
import { coleccion } from '../../firebase/Firebase';
import { useParams } from "react-router-dom";
const ItemListContainer = () => {

    let [lista, setLista] = useState([])
    const {nombre} = useParams()

    useEffect(() => {
        //let isMounted = true;
        let pedido
        if(nombre){
            const q = query(coleccion, where("categoria", '==', nombre))
            pedido = getDocs(q)
        }else{
            pedido = getDocs(coleccion)
        }        
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
        //return() => isMounted = false     
    },[nombre])
    return (
        <div> 
            <ItemList lista={lista} />
        </div>
    )  
}



export default ItemListContainer


