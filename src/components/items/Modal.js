import Modal from 'react-bootstrap/Modal'
import{Button} from 'react-bootstrap'
import { useState,useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/Firebase';


const Example = () =>{
    const {cartArray, borrarItem, borrarTodo} = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [orden, setOrden] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
            handleShow()
            setOrden(resultado.id)
            //console.log("generado correctamente" + resultado.id )
            borrarTodo()
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  
    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
            **aca en el onclik iria la info de la orden
          Terminar compra
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>hola</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example