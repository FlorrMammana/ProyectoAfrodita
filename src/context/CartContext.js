import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartArray, setCartArray] = useState([])

const agregarCarrito = (producto, count) =>{
    console.log(`Agregaste ${producto.nombre}, ${count}`)
    const nuevo = {
        item:producto,
        count
}
    setCartArray([...cartArray, nuevo])
}
/*const borrarDeUno = (count) =>{
    const uno = (count - 1);
    setCartArray(uno)
}*/

const aumentarContador = (count) => {
    return setCartArray.reduce(element => element.item.count + 1)        
  }
/*
const disminuirContador = () => {
          return setCartArray(element => element.item.count - 1)        
  }
  */
const borrarItem = (id) =>{
    const borrarUno = cartArray.filter(element => element.item.id !== id );
    setCartArray(borrarUno)
}
const borrarTodo = () =>{
    setCartArray([]);
}
const IsInCart = (id) =>{
    return cartArray.some(element => element.item.id === id);
}
  const productCounter = () => {
    return cartArray.reduce((accum, item) => accum = accum + item.count, 0)
  }
   /* const calculoTotal = () => {
        return (
            cartArray
            .map(item => item.precioTotal) // obtenemos solo los precios de los items
            .reduce((a, b) => a + b) // procedemos con la suma
          )
      }*/
const value = {
cartArray,
agregarCarrito,
borrarItem,
borrarTodo,
IsInCart,
productCounter,
aumentarContador
//calculoTotal
//borrarDeUno
}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
