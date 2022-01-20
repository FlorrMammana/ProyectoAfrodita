import React from 'react'
import { Button, Card, Col, Container, Row} from 'react-bootstrap';

const CartItem = ({ product, borrarItem, borrarDeUno }) => {
    return (
        <Card body>
          <Container>
            <Row>
              <Col className="fw-bold"> 
                Productos
              </Col>
              <Col  className="fw-bold">
                Unidades
              </Col>
              <Col  className="fw-bold">
                Precio por unidad
              </Col>
              <Col  className="fw-bold">
                Precio Total
              </Col>
              <Col  className="fw-bold">
                Borrar Todo
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                {product.count}
              </Col>
              <Col>
                ${product.item.precio }
              </Col>
              <Col>
               ${product.item.precio * product.count}
              </Col>
              <Col>
              <Button variant='danger' onClick={() => borrarItem(product.item.id)}>Borrar</Button>
              </Col>
            </Row>
            
          </Container>
        </Card>
      )
}

export default CartItem
