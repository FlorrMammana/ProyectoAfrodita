import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/Firebase';

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);

    const [orden, setOrden] = useState(false)
    
    const crearOrden = () => {

        const coleccionProductos = collection(db,"ordenes")
        const usuario = {
            nombre: "Usuario",
            email: "mail@gmail.com"
        }

        const orden = {
            usuario,
            cartArray,
            fechaPedido: serverTimestamp()
        }

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
            setOrden(resultado.id)
            console.log("generado correctamente" + resultado.id )
            borrarTodo()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    if(cartArray.length === 0){
      return(
        <div className="carritoVacio">
          <img src="/assets/hombre.jpg" className='hombre' />
          <p className="text-center">¡Ops, parece que todavia no agregaste productos a tu carrito!Cambiemos eso...</p>
          <Link to='/'>Ir al inicio</Link>
        </div>
            )
      }else{
        let total = 0;
        for(let product of cartArray){
          total += (product.item.precio * product.count)
        }
        return(
          <div>
            <table className='table'>
              <thead>
              <tr>
                <th scope='col'>Productos</th>
                <th scope='col'>Unidades</th>
                <th scope='col'>Precio por Unidad</th>
                <th scope='col'>Precio Total</th>
                <th scope='col'>Borrar</th>
              </tr>
              </thead>
              <tbody>
                {cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem}/>)}
              </tbody>
            </table>
            <div>
            <div className="text-center">Precio Final: $ {cartArray.reduce((prev, curr) => prev.item.precio * prev.count + curr.item.precio * curr.count)}</div>
            <button type="button" className="btn btn-dark" onClick={crearOrden}>Terminar Compra</button>
            <button type="button" className="btn btn-primary" onClick={() => borrarTodo()}>Vaciar carrito</button>
            </div>
          </div>
        )
    } 
}
       
       
export default Cart