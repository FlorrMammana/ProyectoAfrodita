import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);

    return (
        <div >
          {cartArray.length === 0 &&
            <div className="espaciado">
              <p>Carrito vacio. Comienza tu compra.</p>
              <Link to='/'>Ir al inicio</Link>
            </div>
          }
          {(cartArray.length > 0) && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem} borrarTodo={borrarTodo} />)
          //<div className="text-center">Precio Final: $</div>
          }
        </div>
      )
}
export default Cart

