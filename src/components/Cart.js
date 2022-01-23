import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo, total} = useContext(CartContext);

    return (
        <div >
          {cartArray.length === 0 &&
            <div className="espaciado">
              <p>Carrito vacio. Comienza tu compra.</p>
              <Link to='/'>Ir al inicio</Link>
            </div>
          }
          {(cartArray.length > 0 && 
          cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem} borrarTodo={borrarTodo} total={total}/>) &&
          <>
          <div className="text-center">Precio Final: $</div>
          <button type="button" className="btn btn-dark">Terminar Compra</button>
          </>
        
          )}
        </div>
      )
}
export default Cart

