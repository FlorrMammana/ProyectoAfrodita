import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import CardLogin from './firebase/CardLogin'
import Login from "./firebase/Login"
import SignUp from "./firebase/SignUp"

function App() {

    const ingreso = "Home"

        return (
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Main ingreso={ingreso}/>} />
                            <Route path="/productos" element={<ItemListContainer />} />
                            <Route path="/producto/:id" element={<ItemDetailContainer />} />
                            <Route path="/categoria/:nombre" element={<ItemListContainer/>} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route exact path='/' element={CardLogin} />
                            <Route path='/login' element={Login} />
                            <Route path='/signup' element={SignUp} />

                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
           
    )
} 

export default App