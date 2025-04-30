import React from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

const ConfirmModal = ({
  show,
  onClose,
  title = 'Confirmar acción',
  message = '¿Estás seguro?',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  loading = false
}) => {
  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} disabled={loading}>
          {cancelText}
        </Button>
        <Button variant="primary" onClick={onConfirm} disabled={loading}>
          {loading ? (
            <>
              <Spinner
                animation="border"
                size="sm"
                role="status"
                className="me-2"
              />
              Procesando...
            </>
          ) : (
            confirmText
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
