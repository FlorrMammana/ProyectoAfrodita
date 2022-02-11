import Header from "./components/principales/Header"
import Footer from "./components/principales/Footer"
import Main from "./components/principales/Main"
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailsContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/carts/Cart'
import CartProvider from "./context/CartContext"
function App() {
        return (
            <CartProvider>
                <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/categoria/:nombre" element={<ItemListContainer/>} />
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </CartProvider>        
    )
} 

export default App