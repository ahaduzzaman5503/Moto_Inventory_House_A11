import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

const LogIn = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = event => {
    setEmail(event.target.value);
  }

  const handlePassword = event => {
    setPassword(event.target.value);
  }

  const formSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( result =>{
      const  user = result.user;
      console.log(user);
    })
    .catch(error =>{
     console.error(error);
    } )
    event.preventDefault();
  }
    return (
        <div className='container'>
            <div className='regester w-50 mx-auto'> 
<Form onSubmit={formSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword}  type="password" placeholder="Password" />
  </Form.Group>
  <Button  className='mb-5' variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
        </div>
    );
};

export default LogIn;