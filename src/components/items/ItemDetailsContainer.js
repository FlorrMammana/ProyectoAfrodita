import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails"
import { CartContext } from '../../context/CartContext';
import { coleccion } from '../../firebase/Firebase';
import { getDoc, doc} from "firebase/firestore"
import Spinners from "./Spinners"

const ItemDetailsContainer = () => {
    const [producto, setProducto] = useState({})
    const [added, setAdded] = useState(false)
    const [loading, setLoading] = useState([false]);
    const { id, tipo } = useParams();
    const { agregarCarrito } = useContext(CartContext)

    useEffect(() => {
        const docRef = doc(coleccion, id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProducto({...producto, id})
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)

        })
    }, [id, tipo]);

    const onAdd = (count) =>{
    agregarCarrito(producto,count);
    setAdded(true);
    }
     return (
         <div>
            {loading ? <Spinners /> : <ItemDetails onAdd={onAdd} producto={producto} added={added}/>}  
         </div>
     )
}

export default ItemDetailsContainer