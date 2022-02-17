import Header from "./components/principales/Header"
import Footer from "./components/principales/Footer"
import Main from "./components/principales/Main"
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailsContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Cart from './components/carts/Cart'
import CartProvider from "./context/CartContext"
function App() {
        return (
            <CartProvider>
                <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/categoria/:nombre" element={<ItemListContainer/>} />
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>        
    )
} 

export default App