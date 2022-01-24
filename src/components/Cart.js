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
      }else if(cartArray.length === 1){
        return(
          <div>
            {cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem}/>)}
            <div>
            <div className="text-center">Precio Final: $ {cartArray[0]["item"]["precio"] * cartArray[0]["count"]}</div>
            <button type="button" className="btn btn-dark">Terminar Compra</button>
            <button type="button" className="btn btn-primary" onClick={() => borrarTodo()}>Terminar Compra</button>

            </div>
          </div>
        )
      
    }else{
      console.log(cartArray)
      return(
        <div>
          {cartArray.map(prod => <CartItem key={prod.item.id} product={prod} borrarItem={borrarItem}/>)}
          <div>
          <div className="text-center">Precio Final: $ {cartArray.reduce(function (prev,post){ return (prev.item.precio * prev.count) + (post.item.precio * post.count)})}</div>
          <button type="button" className="btn btn-dark">Terminar Compra</button>
          <button type="button" className="btn btn-primary" onClick={() => borrarTodo()}>Terminar Compra</button>
          </div>
        </div>
      )
    }  
}
       
export default Cart

