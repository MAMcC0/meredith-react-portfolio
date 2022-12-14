import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
    return (
      <Form id="contact-form">
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <InputGroup>
        <InputGroup.Text id="text-label">With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Leave a message!" id="textarea"/>
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }