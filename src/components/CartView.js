
import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { BsCartCheckFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext';

const CartView = () => {

  const { productCounter } = useContext(CartContext)

  return (
    <>
      <BsCartCheckFill style={{height: '50px'}}/>{productCounter() > 0 && (<Badge bg="secondary">{productCounter()}</Badge>)}
    </>
  )
}

export default CartView;