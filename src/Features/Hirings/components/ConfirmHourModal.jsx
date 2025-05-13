import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useConfirmWorkHour from '../hooks/useConfirmWorkHour'
import useConfirmHourForm from "../hooks/useConfirmHourForm";
import EmployeeSelect from "../../../Components/Selects/EmployeeSelect";

const ConfirmHourModal = ({ show, onClose, hour, onConfirmed }) => {
  const { confirmHour, loading } = useConfirmWorkHour();
  const {
    form,
    errors,
    handleChange,
    handleEmployeeChange,
    validate
  } = useConfirmHourForm(hour);

  const selectedEmployee =
    form.newEmployeeId && hour
      ? { value: form.newEmployeeId, label: hour.employeeName }
      : null;

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      workHourId: hour.id,
      ...form
    };

    try {
      await confirmHour(payload);
      if (onConfirmed) onConfirmed(); // elimina de la tabla y cierra
      onClose();
    } catch (e) {
      console.error("Error al confirmar hora:", e);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar hora trabajada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
           
            <EmployeeSelect
              value={selectedEmployee}
              onSelect={handleEmployeeChange}
            />
            {errors.newEmployeeId && (
              <div className="text-danger mt-1">{errors.newEmployeeId}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de realización</Form.Label>
            <Form.Control
              type="date"
              name="newDate"
              value={form.newDate}
              onChange={handleChange}
              isInvalid={!!errors.newDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.newDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hora de realización</Form.Label>
            <Form.Control
              type="time"
              name="newHour"
              value={form.newHour}
              onChange={handleChange}
              isInvalid={!!errors.newHour}
            />
            <Form.Control.Feedback type="invalid">
              {errors.newHour}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Observación</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="observation"
              value={form.observation}
              onChange={handleChange}
              placeholder="Observaciones (opcional)"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSubmit} disabled={loading}>
          {loading ? "Confirmando..." : "Confirmar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmHourModal;
