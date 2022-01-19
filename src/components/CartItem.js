import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CartItem = ({ product, borrarItem, borrarDeUno }) => {
    return (
        <Card body>
          <Container>
            <Row>
              <Col> 
                Productos
              </Col>
              <Col>
                Unidades
              </Col>
              <Col>
                Precio por unidad
              </Col>
              <Col>
                Precio Total
              </Col>
              <Col>
                Borrar Todo
              </Col>
            </Row>
            <Row>
              <Col>
                {product.item.nombre}
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
              <Button variant='danger' onClick={() => borrarItem(product.item.id)}>Borrar Producto</Button>
              </Col>
            </Row>
          </Container>
        </Card>
      )
}

export default CartItem
