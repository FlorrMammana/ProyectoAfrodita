import {Link} from "react-router-dom";

function Item({ producto}) {
    return (
        <div className="producto text-center espaciado alineacion">
            <h3>{producto.nombre}</h3>
            <img src={producto.img3} alt="pixeles" className="text-center rounded-circle probar" />
            <p className="precio">${producto.precio}</p>
            <button type="button" className="btn btn-dark ajusteCard"><Link to={`/producto/${producto.id}`}>Ver mas</Link></button>
        </div>
    )
}

export default Item