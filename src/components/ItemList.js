import { useEffect , useState } from "react"
import Item from "./Item"

const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])
    
    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(
                    <Item />
                ) 
            },2000)
        })
        promesa.then((productos)=>{
            setLoading(false)
            setProductos(productos)
        })

    },[])

    if(loading){
        return (
            <div>
                <p><strong>Cargando</strong></p>
            </div>
        )
    }else{
        return (
            <div>
                <Item />
            </div>
        )
    }
}

export default ItemList