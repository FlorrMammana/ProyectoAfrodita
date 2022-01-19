import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartArray, setCartArray] = useState([])

const agregarCarrito = (producto, count) =>{
    console.log(`Agregaste ${producto.nombre}, ${count}`)
    const nuevo = {
        item:producto,
        count}
    setCartArray([...cartArray, nuevo])
}
/*const borrarDeUno = (count) =>{
    const uno = (count - 1);
    setCartArray(uno)
}*/
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
const value = {
cartArray,
agregarCarrito,
borrarItem,
borrarTodo,
IsInCart
//borrarDeUno
}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
