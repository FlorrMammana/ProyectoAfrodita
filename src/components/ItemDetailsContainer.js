import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"
import {CartContext} from "../context/CartContext"
import {coleccion} from "../firebase/Firebase"
import { getDocs} from "firebase/firestore"

const ItemDetailsContainer = () => {

    const pedido = getDocs(coleccion)

    const { id } = useParams()

    let [producto, setProducto] = useState({})

    const [added, setAdded] = useState(false)

    const {agregarCarrito} = useContext(CartContext)
    useEffect(() => {

       let productos = pedido.docs
    console.log(productos)
     if(id){
        const producto = productos.find(e => e.id === parseInt(id))
           setProducto(producto)  
    }
    

}, [id])

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