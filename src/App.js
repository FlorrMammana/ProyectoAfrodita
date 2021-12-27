import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
//import ItemListContainer from './components/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

    const footerData = {
        copy : "Copyright &copy; 2021", 
        author : "Florencia Mammana"
    }
    const ingreso = "Home"

    return(
        <>  
            <Header/>
            <Main ingreso={ingreso}/>
            <Footer data={footerData}/>
        </>
    )
} 

export default App