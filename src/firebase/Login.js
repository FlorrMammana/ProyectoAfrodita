import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'


const Login = () => {
    const {login} = useContext(CartContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const cargaEmail = (e) =>setEmail(e.target.value);
    const cargaPassword = (e) =>setPassword(e.target.value);
    const cargar = async(e) =>{
        e.preventDefault();
        try{
            await login(email, password)
        }catch(error){
            setError('Credenciales Incorrectas')
            setTimeout(() => setError(''), 1500)
        }
    }
  return (
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{{ error }}</p>}
        <h1>Log In</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={cargar}>
          <input type='email' placeholder='Email' onChange={cargaEmail}/>
          <input type='password' placeholder='Password' onChange={cargaPassword}/>
          <input type='submit' value='Log In' />
        </form>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>
      </div>

    </div>
  )
}

export default Login