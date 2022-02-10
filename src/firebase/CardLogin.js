import React, { useState, useContext } from 'react'
import {CartContext} from '../context/CartContext'

const Home = () => {
    const {usuario, logout} = useContext(CartContext);
    
    const {error, setError} = useState('')
    const cerrarSesion = async () =>{
        try{
            await logout();
        }catch(error){
            setError('Server Error')
        }

    }

  return (
    <div className='card'>
      <div className='card-header' >
          {error && <p className='error'>{error}</p>}
        <img src='https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png' alt='user' className='user-photo' />
      </div>
      <div className='card-body'>
        <h1>Welcome</h1>
        <p>{usuario.email}</p>
        <button className='logout-button' onClick={cerrarSesion}>Log Out</button>
      </div>

    </div>
  )
}
export default Home;