import { useState, useEffect} from "react"
import ItemList from "./ItemList"
import { getDocs} from "firebase/firestore"
import { coleccion } from '../../firebase/Firebase';
import { useParams } from "react-router-dom";
const ItemListContainer = () => {

    let [lista, setLista] = useState([])
    let {nombre} = useParams()


    useEffect(() => {

        const pedido = getDocs(coleccion)

        pedido
        .then((resultado)=>{
            const docs = resultado.docs
            if(nombre){
              const filtrado = function filter(doc){
                    if(doc.item.categoria === nombre){
                      return {
                        id: doc.id,
                        ...doc.data()
                      }
                    }
                  }
                  
                const docs_filter = docs.filter(filtrado)
                setLista(docs_filter)
            }else{
                const docs_formateado = docs.map(doc =>{
                    const producto = {
                        id : doc.id,
                        ...doc.data()
                    }
                    return producto
                })
               setLista(docs_formateado)
            }  
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


