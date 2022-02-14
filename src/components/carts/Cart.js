import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'
import Example from '../items/Modal';

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);
    
    if(cartArray.length === 0){
      return(
        <div className="carritoVacio espaciado">
          <img src="/assets/hombre.jpg" className='hombre' />
          <p className="text-center textCarro">¡Ops, parece que todavía no agregaste productos a tu carrito! <strong >Cambiemos eso...</strong></p>
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
            <div className="text-center"><strong className='precioFinal'>Precio Final:</strong><i className='precioFinal'> $ {total}</i></div>
            <Example />
            <button type="button" className="btn btn-dark " onClick={() => borrarTodo()}>Vaciar carrito</button>
            </div>
          </div>
        )
    } 
}
       
export default Cart
