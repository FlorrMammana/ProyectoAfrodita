import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'

const Cart = () =>{ 

    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);

    if(cartArray.length === 0){
      return(
        <div className="espaciado">
          <p>Carrito vacio. Comienza tu compra.</p>
          <Link to='/'>Ir al inicio</Link>
        </div>
            )
    }else{
      console.log(cartArray)
      return(
        <div>
          {cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem} borrarTodo={borrarTodo}/>)}
          <div>
          <div className="text-center">Precio Final: $</div>
          <button type="button" className="btn btn-dark">Terminar Compra</button>
          </div>
        </div>
      )
    }

       
export default Cart

//{cartArray.reduce((product) => (product.item.precio * product.count), 0)}
