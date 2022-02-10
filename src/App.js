import Header from "./components/Header"
import Footer from "./components/Footer"
//import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import CardLogin from './firebase/CardLogin'
import Login from "./firebase/Login"
import SignUp from "./firebase/SignUp"
import { PrivateRoute } from "./components/RutaPrivada"
import { useContext } from "react"
import {CartContext} from '../context/CartContext'

function App() {

    const {usuario} = useContext(CartContext);

        return (
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <main>
                        <Routes>
                            <Route exact path="/">
                            {usuario ? <Component {...props} /> : <Navigate to='/login' />}
                            </Route>
                            <Route path="/productos" element={<ItemListContainer />} />
                            <Route path="/producto/:id" element={<ItemDetailContainer />} />
                            <Route path="/categoria/:nombre" element={<ItemListContainer/>} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route path='/login' element={Login} />
                            <Route path='/signup' element={SignUp} />
                            <PrivateRoute exact path='/' element={CardLogin}/>
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
           
    )
} 

export default App