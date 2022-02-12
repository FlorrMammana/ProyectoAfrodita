import Modal from 'react-bootstrap/Modal'
import{Button} from 'react-bootstrap'
import { useState,useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/Firebase';
import { Link } from 'react-router-dom';
import Spinners from './Spinners';

const Example = () =>{
    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);
  

    const [show, setShow] = useState(false);
    const [orden, setOrden] = useState(false)
    const [loading, setLoading] = useState([false]);


    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
      crearOrden();
    }
    
    const crearOrden = () => {

        const coleccionProductos = collection(db,"ordenes")
        const usuario = {
            nombre: "Usuario",
            email: "mail@gmail.com"
        }
      
        const orden = {
            usuario,
            cartArray,
            fechaPedido: serverTimestamp()
        }

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
          setLoading(false)
          setOrden(resultado)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Terminar compra
        </Button>

  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmacion de compra</Modal.Title>
          </Modal.Header>
          {loading ? <Spinners /> : <Modal.Body>Generacion de compra correctamente con el numero de pedido: '{orden.id}' podra acercarse a la sucursal para hacer efectivo su servicios. Muchas Gracias.</Modal.Body>}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Link to="/">
            <Button variant="primary" onClick={handleClose}>
              Finalizar Compra
            </Button>
            </Link>
            
          </Modal.Footer>
        </Modal>
      
      </>
    );
  }
  
export default Example