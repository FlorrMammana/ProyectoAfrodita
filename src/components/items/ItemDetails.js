import Count from "./Count"
import { Link } from "react-router-dom"

const ItemDetails = ({producto, onAdd, added}) =>{ 
    return(
            <div className="card espaciado">
                <div className="container">
                    <div className="row">
                    <img src={producto.img} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                    <img src={producto.img1} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                    <img src={producto.img2} alt="imagen ilustrativa" className="text-center col-4 imagenDetalle"/>
                    </div>                           
                </div>                  
                <div className="card-body text-center">
                    <h5 className="card-title text-center tituloDetalle">{producto.nombre}</h5>
                    <p className="card-text justify-content-between descripcionDetalle">{producto.detalle}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center precioDetalle">${producto.precio}</li>
                    {added ? <Link to='/cart' className="text-center goToCart">Ir al carrito</Link> : <Count stock={producto.stock} initial={1} onAdd={onAdd} />}
                </ul>
            </div>
        )
}
export default ItemDetails