import Count from "./Count"

const ItemDetails = ({producto}) =>{       
            return(
                   <div className="card ">
                   <img src={producto.img} alt="imagen ilustrativa" className="text-center centro"/>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">{producto.nombre}</h5>
                            <p className="card-text">{producto.detalle}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-center"><strong>$</strong>{producto.precio}</li>
                            <Count stock={producto.stock} initial={1} />
                        </ul>
                    </div>
            )
}
export default ItemDetails

