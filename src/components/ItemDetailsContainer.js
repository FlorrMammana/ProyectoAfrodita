import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"

let productos = [
    {   
        "id": 1,
        "stock":20,
        "categoria":"manos",
        "nombre":"Esculpidas",
        "detalle":"Extensiones que se construyen sobre la uña natural. Permite restaurar uñas mordidas o simplemente llegar al largo y forma que desees",
        "precio":1500,
        "img":"/assets/logoCamila.png"
    },
    {  
        "id": 2,
        "stock":20,
        "categoria":"manos",
        "nombre":"Semi-Permante",
        "detalle":"Esmaltado cuya duración es de 2 a 3 semanas en función del crecimiento de la uña natural. Su brillo es impecable y de secado completo desde el momento de retirarse del salón.",
        "precio":500,
        "img":"/assets/logoCamila.png"
    },
    {   
        "id": 3,
        "stock":20,
        "categoria":"manos",
        "nombre":"Kapping", 
        "detalle":"Consiste en una capa que se aplica sobre la uña natural. El producto varía según la necesidad de la uña . Ayuda a la protección y firmeza de uñas frágiles y quebradizas, pero no aporta ningún tipo de vitaminas ni las altera químicamente. Tampoco se extiende su largo.",
        "precio":800,
        "img":"/assets/logoCamila.png"
    },
    {   
        "id": 4,
        "stock":20,
        "categoria":"manos",
        "nombre":"Estetica de Pies", 
        "detalle":"Esteticas de pies en general. Spa completo", 
        "precio":700,
        "img":"/assets/logoCamila.png"
    },
    {   
        "id": 5,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Clasicas", 
        "detalle":"La técnica de extensiones de pestañas clásicas consiste en aplicar una sola extensión de pestaña a una pestaña natural.",
        "precio":1200,
        "img":"/assets/logoKatya.png"
    },
    {   
        "id": 6,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Volumen", 
        "detalle":"La técnica de volumen ruso para las pestañas es un procedimiento que consiste en la implantación pelo a pelo de filamentos de seda del mismo grosor, curvatura y a medida de nuestras pestañas naturales para lograr una mayor densidad.",
        "precio":1700,
        "img":"/assets/logoKatya.png"
    },
    {   
        "id": 7,
        "stock":20,
        "categoria":"lashes",
        "nombre":"Mega-Volumen", 
        "detalle":"El arte del Mega Volumen es una técnica avanzada y mejorada del Volumen Ruso. El empleo de esta técnica requiere precisión y abanicos (lash fans) creados a la perfeccion para asegur una mejor retención en las pestañas naturales.",
        "precio":2500,
        "img":"/assets/logoKatya.png"
    },
    {   
        "id": 8,
        "stock":20,
        "categoria":"combos",
        "nombre":"Promo Esculpidas+Volumen", 
        "detalle":"El servicio incluye Esculpidas: Extensiones que se construyen sobre la uña natural. Permite restaurar uñas mordidas o simplemente llegar al largo y forma que desees. y Volumen: La técnica de volumen ruso para las pestañas es un procedimiento que consiste en la implantación pelo a pelo de filamentos de seda del mismo grosor, curvatura y a medida de nuestras pestañas naturales para lograr una mayor densidad",
        "precio":3000,
        "img":"/assets/afroditaSinFondo.png"
    },
    {   
        "id": 9,
        "stock":20,
        "categoria":"combos",
        "nombre":"Promo Kapping+Mega-Volumen", 
        "detalle":"El servicio incluye: Kapping: Consiste en una capa que se aplica sobre la uña natural. El producto varía según la necesidad de la uña . Ayuda a la protección y firmeza de uñas frágiles y quebradizas, pero no aporta ningún tipo de vitaminas ni las altera químicamente. Tampoco se extiende su largo. y Mega-Volumen: El arte del Mega Volumen es una técnica avanzada y mejorada del Volumen Ruso. El empleo de esta técnica requiere precisión y abanicos (lash fans) creados a la perfeccion para asegur una mejor retención en las pestañas naturales.",
        "precio":3500,
        "img":"/assets/afroditaSinFondo.png"
    }
]
const ItemDetailsContainer = () => {

    const { id } = useParams()

    let [producto, setProducto] = useState({})

    const [added, setAdded] = useState(false)

    useEffect(() => {

     if(id){
        const general = productos.find(e => e.id === parseInt(id))
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(general)
            }, 1000)
        })
        promesa
            .then((producto) => {
                setProducto(producto)
            })
    }
    

}, [id])

const onAdd = (count) =>{
    setAdded(true)
}
     return (
         <div>
             <ItemDetails onAdd={onAdd} producto={producto} added={added}/>
         </div>
     )
}

export default ItemDetailsContainer