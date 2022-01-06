import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"
 
let productos = 
    {   
        "id": 1,
        "stock":20,
        "nombre":"Esculpidas",
        "detalle":"Esculpidas",  
        "precio":1500,
        "img":"../assets/afroditaSinFondo.png"
    }

const ItemDetailsContainer = () => {

    const { id } = useParams()

    let [producto, setProducto] = useState(null)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
             setTimeout(() => {
                 res(producto)
             }, 2000)
         })
 
         promesa
             .then((producto) => {
                 setProducto(producto)
             })
     }, [id])
 
     return (
         <div>
             <ItemDetails producto={productos} />
         </div>
     )
}

export default ItemDetailsContainer