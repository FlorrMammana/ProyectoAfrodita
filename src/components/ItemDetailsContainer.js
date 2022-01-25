import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"
import {CartContext} from "../context/CartContext"
import {coleccion} from "../firebase/Firebase"
import { getDocs, where, query} from "firebase/firestore"

const ItemDetailsContainer = () => {


    const { id } = useParams()

    let [producto, setProducto] = useState({})

    const [added, setAdded] = useState(false)

    const {agregarCarrito} = useContext(CartContext)
        
    useEffect(() => {
        
        let pedido 
        
        if(id){
            const filtro1 = where("categoria","==",id)
            const filtro2 = where("precio",">",0)
            const consulta = query(coleccion,filtro1,filtro2)
             pedido = getDocs(consulta)
        }else {
             pedido = getDocs(coleccion)
        }

        pedido
            .then((resultado)=>{
                setProducto(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
            })
            .catch((error)=>{
                console.log(error)
            })
    },[id])
    
    const onAdd = (count) =>{
    agregarCarrito(producto,count);
    setAdded(true);
    }
     return (
         <div>
             <ItemDetails onAdd={onAdd} producto={producto} added={added}/>
         </div>
     )
}

export default ItemDetailsContainer
