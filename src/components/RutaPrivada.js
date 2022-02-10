import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';
import {CartContext} from '../context/CartContext'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { usuario } =  useContext(CartContext);
  console.log('user', usuario)

  return (
    <Route
      {...rest}
      render={props => {
        return usuario ? <Component {...props} /> : <Navigate to='/login' />
      }}
    >
    </Route>
  )
}
export default PrivateRoute;