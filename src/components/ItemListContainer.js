import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const productos = [
    {   
        "id": 1,
        "categoria":"manos",
        "nombre":"Esculpidas",
        "precio":1500,
        "img":"./assets/logoCamila.png"
    },
    {  
        "id": 2,
        "categoria":"manos",
        "nombre":"Semi-Permante",
        "precio":500,
        "img":"./assets/logoCamila.png"
    },
    {   
        "id": 3,
        "categoria":"manos",
        "nombre":"Kapping", 
        "precio":800,
        "img":"./assets/logoCamila.png"
    },
    {   
        "id": 4,
        "categoria":"manos",
        "nombre":"Estetica de Pies", 
        "precio":700,
        "img":"./assets/logoCamila.png"
    },
    {   
        "id": 5,
        "categoria":"lashes",
        "nombre":"Clasicas", 
        "precio":1200,
        "img":"./assets/logoKatya.png"
    },
    {   
        "id": 6,
        "categoria":"lashes",
        "nombre":"Volumen", 
        "precio":1700,
        "img":"./assets/logoKatya.png"
    },
    {   
        "id": 7,
        "categoria":"lashes",
        "nombre":"Mega-Volumen", 
        "precio":2500,
        "img":"./assets/logoKatya.png"
    },
    {   
        "id": 8,
        "categoria":"combos",
        "nombre":"Promo Esculpidas+Volumen", 
        "precio":3000,
        "img":"afroditaSinFondo.png"
    },
    {   
        "id": 9,
        "categoria":"combos",
        "nombre":"Promo Kapping+Mega-Volumen", 
        "precio":3500,
        "img":"afroditaSinFondo.png"
    }
] 
const ItemListContainer = () => {

    let [lista, setLista] = useState([])
    const { nombre } = useParams()

    useEffect(() => {
        if(nombre){
            let categoria = productos.filter(function(producto) {return producto["categoria"] === nombre})
            setLista(categoria)
        }else{
            setLista(productos)
        }       
    },[nombre])
    return (
        <div> 
            <ItemList lista={lista} />
        </div>
    )  
}



export default ItemListContainer


