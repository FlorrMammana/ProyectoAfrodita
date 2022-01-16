import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/Cart'
import CartProvider from './context/CartContext'

function App() {

    const footerData = {
        copy : "Copyright &copy; 2021", 
        author : "Florencia Mammana"
    }
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
                        </Routes>
                    </main>
                    <Footer data={footerData} />
                </BrowserRouter>
            </CartProvider>
           
    )
} 

export default App