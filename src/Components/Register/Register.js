import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Register = () => {
    return (
        <div className='container w-50 mx-auto'>
            <Form className='container'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control  type="text" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control  type="text" placeholder="Username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control  type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control  type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control  type="password" placeholder="Repet password" />
  </Form.Group>
  <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        id="disabledFieldsetCheck"
        label="I have read and agree to the terms"
      />
    </Form.Group>
  <Button className='mb-5' variant="primary" type="submit">
    Sign In
  </Button>
</Form>
        </div>
    );
};

export default Register;