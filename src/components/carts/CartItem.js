import React from 'react'
import { Button, Col, Row} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'

const CartItem = ({ product, borrarItem}) => {
  return (
      <tr className='espaciado'>
        <td>
          {product.item.nombre}
        </td>
        <td>
          <Row>
          <Col>
            {product.count}
          </Col>
          </Row>
        </td>
        <td>
          ${product.item.precio }
        </td>
        <td>
          ${product.item.precio * product.count}
        </td>
        <td>
        <Button variant='danger' onClick={() => borrarItem(product.item.id)}><AiFillDelete style={{height: '50px'}}/></Button>
        </td>
      </tr>
    )
}

export default CartItem