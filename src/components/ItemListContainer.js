import { useState, useEffect } from "react"
import Count from "./Count"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

let productos = [
    {   
        "id": 1,
        "stock":20,
        "categoria":"manos",
        "nombre":"Esculpidas",
        "detalle":"Esculpidas",  
        "precio":1500,
        "img":"afroditaSinFondo.png"
    },
    {  
        "id": 2,
        "stock":20,
        "categoria":"manos",
        "nombre":"Semi-Permante",
        "detalle":"Semi-Permante", 
        "precio":500,
        "img":"logoCamila.png"
    },
    {   
        "id": 3,
        "stock":20,
        "categoria":"manos",
        "nombre":"Kapping", 
        "detalle":"Kapping", 
        "precio":800,
        "img":"logoCamila.png"
    },
    {   
        "id": 4,
        "stock":20,
        "categoria":"manos",
        "nombre":"Estetica de Pies", 
        "detalle":"Estetica de pies", 
        "precio":700,
        "img":"logoCamila.png"
    },
    {   
        "id": 5,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Clasicas", 
        "detalle":"Clasicas", 
        "precio":1200,
        "img":"logoKatya.png"
    },
    {   
        "id": 6,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Volumen", 
        "detalle":"Volumen", 
        "precio":1700,
        "img":"logoKatya.png"
    },
    {   
        "id": 7,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Mega-Volumen", 
        "detalle":"Mega-Volumen", 
        "precio":2500,
        "img":"logoKatya.png"
    },
    {   
        "id": 8,
        "stock":20,
        "categoria":"combos",
        "nombre":"Promo Esculpidas+Volumen", 
        "detalle":"Esculpidas+Volumen", 
        "precio":3000,
        "img":"afroditaSinFondo.png"
    },
    {   
        "id": 9,
        "stock":20,
        "categoria":"combos",
        "nombre":"Promo Kapping+Mega-Volumen", 
        "detalle":"Kapping+Mega-Volumen", 
        "precio":3500,
        "img":"afroditaSinFondo.png"
    }
] 
const ItemListContainer = () => {

    let [lista, setLista] = useState([])
    const { id } = useParams()

    
    useEffect(() => {
       const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 2000)
        })

        promesa
            .then((productos) => {
                setLista(productos)
            })
            .catch(() => {
                console.log("Todo mal")
            })
    }, [id])

    return (
        <div> 
            <ItemList lista={lista} />
            <Count/> 
            
        </div>
    )
}



export default ItemListContainer


