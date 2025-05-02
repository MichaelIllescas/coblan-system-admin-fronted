import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useConfirmWorkHour from "../hooks/useConfirmWorkHour";
import EmployeeSelect from "../../../Components/Selects/EmployeeSelect";

const ConfirmHourModal = ({ show, onClose, hour, onConfirmed }) => {
  const { confirmHour, loading } = useConfirmWorkHour();

  const [form, setForm] = useState({
    newDate: "",
    newHour: "",
    newEmployeeId: null,
    observation: ""
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Inicializar el form y el empleado cuando se abra el modal
  useEffect(() => {
    if (hour) {
      setForm({
        newDate: hour.date || "",
        newHour: "",
        newEmployeeId: hour.employeeId || null,
        observation: ""
      });

      setSelectedEmployee({
        value: hour.employeeId,
        label: `${hour.employeeName} `
      });
    }
  }, [hour]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmployeeChange = (selectedOption) => {
    setSelectedEmployee(selectedOption);
    setForm({
      ...form,
      newEmployeeId: selectedOption ? selectedOption.value : null
    });
  };

  const handleSubmit = async () => {
    if (!form.newDate || !form.newHour || !form.newEmployeeId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const payload = {
      workHourId: hour.id,
      ...form
    };

    try {
      await confirmHour(payload);
      if (onConfirmed) onConfirmed(); // para refrescar la tabla
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
          <EmployeeSelect
            value={selectedEmployee}
            onSelect={handleEmployeeChange}
          />

          <Form.Group className="mb-3">
            <Form.Label>Fecha de realización</Form.Label>
            <Form.Control
              type="date"
              name="newDate"
              value={form.newDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hora de realización</Form.Label>
            <Form.Control
              type="time"
              name="newHour"
              value={form.newHour}
              onChange={handleChange}
            />
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
