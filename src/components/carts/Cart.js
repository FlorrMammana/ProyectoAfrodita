import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'
import Example from '../items/Modal';

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);

    
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
            <div className="text-center">Precio Final: $ {total}</div>
            <Example />
            <button type="button" className="btn btn-primary" onClick={() => borrarTodo()}>Vaciar carrito</button>
            </div>
          </div>
        )
    } 
}
/**
 * 
 *             <button type="button" className="btn btn-dark" onClick={crearOrden}>Terminar Compra</button>

 *  */    
       
export default Cart
