import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/Firebase';

export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartArray, setCartArray] = useState([]);
const [usuario, setUsuario] = useState({});

useEffect(() =>{
    auth.onAuthStateChanged((usuario) =>{
        setUsuario(usuario)
    })
}, []); 


const agregarCarrito = (producto, count) =>{
    if (isInCart(producto.id)) {
        const actualizar = cartArray.findIndex(elemento => elemento.item.id === producto.id)
        cartArray[actualizar].count = cartArray[actualizar].count + count
        setCartArray([...cartArray])
    } else {
        console.log(`Agregaste ${producto.nombre}, ${count}`);
        const nuevo = {
        item:producto,
        count
}
    setCartArray([...cartArray, nuevo])
    }
}

const signUp = (email,password) =>{
    return auth.createUserWithEmailAndPassword(email, password);
}
const login = (email, password) =>{
    return auth.signInWithEmailAndPassword(email, password);
}
const logout = () => auth.logout();
const borrarItem = (id) =>{
    const borrarUno = cartArray.filter(element => element.item.id !== id );
    setCartArray(borrarUno)
}
const borrarTodo = () =>{
    console.log(borrarTodo)
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
calculo,
logout,
login,
signUp,
usuario
}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider