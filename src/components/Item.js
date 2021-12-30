import {Link} from "react-router-dom";

function Item({ producto }) {
    console.log(producto.id)
    return (
        <div className="producto">
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt="thumbnail" />
            <p>Precio : ${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>ver detalle</Link>
        </div>
    )
}

export default Item