
import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartArray, setCartArray] = useState([]);

const agregarCarrito = (producto, count) =>{
    if (isInCart(producto.id)) {
        const actualizar = cartArray.findIndex(elemento => elemento.item.id === producto.id)
        cartArray[actualizar].count = cartArray[actualizar].count + count
        setCartArray([...cartArray])
    } else {
        const nuevo = {
        item:producto,
        count
}
    setCartArray([...cartArray, nuevo])
    }
}
const borrarItem = (id) =>{
    const borrarUno = cartArray.filter(element => element.item.id !== id );
    setCartArray(borrarUno)
}
const borrarTodo = () =>{
    setCartArray([]);
}

const isInCart = (id) =>{
    return cartArray.some(element => element.item.id === id);
}
  const productCounter = () => {
    return cartArray.reduce((accum, item) => accum = accum + item.count, 0)
  }

const calculo = (precio, count) =>{
    let calcular = (precio * count)
    setCartArray(calcular)
}
const value = {
cartArray,
agregarCarrito,
borrarItem,
borrarTodo,
isInCart,
productCounter,
calculo
}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider