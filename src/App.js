import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

    const footerData = {
        copy : "Copyright &copy; 2021", 
        author : "Florencia Mammana"
    }
    const ingreso = "Home"

        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Main ingreso={ingreso}/>} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                    </Routes>
                </main>
                <Footer data={footerData} />
            </BrowserRouter>
    )
} 

export default App