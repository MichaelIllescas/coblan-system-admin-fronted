import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';

/**
 * Modal de confirmación para acciones destructivas como eliminar.
 */
const ConfirmDeleteModal = ({
  show,
  onClose,
  onConfirm,
  title = '¿Eliminar elemento?',
  message = 'Esta acción no se puede deshacer.',
  confirmText = 'Eliminar'
}) => {
  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title={
        <div className="d-flex align-items-center gap-2">
          <span className="text-danger fs-4">⚠️</span>
          <span>{title}</span>
        </div>
      }
      onConfirm={onConfirm}
      confirmText={confirmText}
      confirmVariant="danger" 
    >
      <p className="mb-0">{message}</p>
    </GenericModal>
  );
};

export default ConfirmDeleteModal;
