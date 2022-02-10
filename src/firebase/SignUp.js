import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//import Spinner from '../spinner.svg';

import {CartContext} from '../context/CartContext'


export const SignUp = () => {
    const {signUp} = useContext(CartContext);

  const [error, setError] = useState('');
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const cargaEmail = e => setEmail(e.target.value);
  const cargaPassword = e => setPassword(e.target.value);
  const confirmarPassword = e => setConfirmPassword(e.target.value);

  const cargar = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await signUp(email, password);
        history.push('/');
      } catch (error) {
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
      }
    }
    setLoading(false);
  }

  return (
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{error}</p>}
        <h1>Sign Up</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={cargar} >
          <input type='email' placeholder='Email' onChange={cargaEmail} />
          <input type='password' placeholder='Password' onChange={cargaPassword} />
          <input type='password' placeholder='Confirm Password' onChange={confirmarPassword} />
          <input type='submit' value='Sign Up' />
        </form>
        {loading && <img src={Spinner} alt='Loading' />}
        <p>Do you already have an account? <Link to='/login'>Login</Link> </p>
      </div>

    </div>
  )
}