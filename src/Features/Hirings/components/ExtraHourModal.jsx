import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ExtraHourModal = ({ show, onHide, onSubmit, hiringId, employeeId }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    extraHourPrice: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      hiringId,
      employeeId,
      ...formData
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Hora Extra</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" name="date" required onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" name="time" required onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio Hora Extra</Form.Label>
            <Form.Control type="number" name="extraHourPrice" required step="0.01" onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button variant="primary" type="submit">Agregar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ExtraHourModal;
