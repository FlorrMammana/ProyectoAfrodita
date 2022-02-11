import Count from "./Count"
import { Link } from "react-router-dom"

const ItemDetails = ({producto, onAdd, added}) =>{ 
return(
                   <div className="card">
                       <div className="container">
                           <div className="row">
                           <img src={producto.img} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                            <img src={producto.img1} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                            <img src={producto.img2} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                           </div>
                           
                       </div>                  
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">{producto.nombre}</h5>
                            <p className="card-text">{producto.detalle}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-center"><strong>$</strong>{producto.precio}</li>
                            {added ? <Link to='/cart'>Ir al carrito</Link> : <Count stock={producto.stock} initial={1} onAdd={onAdd} />}
                        </ul>
                    </div>
            )
}
export default ItemDetails

/*

import Count from "./Count"
import {  Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { toast } from "react-toastify"


const ItemDetails = ({producto, added, onAdd}) =>{ 
    const { nombre, precio, detalle, img, stock } = producto
    //const {agregarCarrito} = useContext(CartContext)
    //const navigate = useNavigate()

    const verQueOnda = (cantidad) => {
        setMostrar(false)
        agregarCarrito(producto, cantidad)
        toast.success(`Se agrego el producto al carrito!`)
    }

    const redirectToCart = () => {
        navigate("/cart")
    }


return(
                   <div className="card ">
                   <img src={img} alt="imagen ilustrativa" className="text-center centro"/>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">{nombre}</h5>
                            <p className="card-text">{detalle}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-center"><strong>$</strong>{precio}</li>
                            {added ? <Link to='/cart'>Ir al carrito</Link> : <Count stock={stock} initial={1} onAdd={onAdd} />}

                        </ul>
                    </div>
            )
}
export default ItemDetails



*/