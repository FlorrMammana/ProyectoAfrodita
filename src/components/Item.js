import {Link} from "react-router-dom";

function Item({ producto}) {

    return (
        <div className="producto text-center">
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt="pixeles" className="text-center" />
            <p>Precio : ${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>ver detalle</Link>
        </div>
    )
}

export default Item