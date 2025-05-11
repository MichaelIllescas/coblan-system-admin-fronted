import React from 'react';
import EditPerfilUserModal from '../components/EdifPerfilUserModal';
import useEditModal from '../../../hooks/useEditModal';
import useUserUpdate from '../hooks/useUserUpdate';

const CompanyUserCard = ({ user }) => {
  const { modalVisible, selectedItem, openModal, closeModal } = useEditModal();
  const { handleUpdate } = useUserUpdate();

  return (
    <>
      <div className="card shadow-sm p-4">
        <h5 className="card-title">Datos del Usuario</h5>
        <div className="card-body">
          <p><strong>Nombre:</strong> {user.firstName} </p>
          <p><strong>Apellido:</strong> {user.lastName}</p>
          <p><strong>DNI:</strong> {user.documentNumber}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          <p><strong>Estado:</strong> {user.enabled ? "Activo" : "Inactivo"}</p>
          <p><strong>Fecha de registro:</strong> {user.registrationDate}</p>

          <button className="btn btn-primary mt-2" onClick={() => openModal(user)}>
            Editar datos
          </button>
        </div>
      </div>

      <EditPerfilUserModal
        show={modalVisible}
        onClose={closeModal}
        user={selectedItem}
        onConfirm={(data) =>
          handleUpdate({
            updatedData: data,
            onSuccess: () => {
              closeModal();
            },
            onClose: closeModal,
          })
        }
      />
    </>
  );
};

export default CompanyUserCard;
