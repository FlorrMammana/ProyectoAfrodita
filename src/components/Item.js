import {Link} from "react-router-dom";

function Item({ producto}) {

    return (
        <div className="producto text-center">
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt="pixeles" className="text-center" />
            <p className="precio">${producto.precio}</p>
            <button type="button" className="btn btn-dark"><Link to={`/producto/${producto.id}`}>Ver mas</Link></button>

        </div>
    )
}

export default Item