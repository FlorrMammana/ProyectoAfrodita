import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartArray, setCartArray] = useState([])

const agregarCarrito = (producto, count) =>{
    console.log(`Agregaste ${producto.title}, cantidad: ${count}`)
    const nuevo = {
        item:producto,
        count}
    setCartArray(...cartArray, [nuevo])
}
const borrarItem = (id) =>{
    const borrarUno = cartArray.filter(element => element.id !== id );
    setCartArray(borrarUno)

}
const borrarTodo = () =>{
    setCartArray([]);
}

const value = {
cartArray,
agregarCarrito,
borrarItem,
borrarTodo
}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
