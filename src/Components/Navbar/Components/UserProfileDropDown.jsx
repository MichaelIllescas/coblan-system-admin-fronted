import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../../Features/Auth/Hooks/useLogout";
import styles from "../Styles/Navbar.module.css";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from "../../../Context/AuthContext";
import { User } from "lucide-react";

const UserProfileDropDown = () => {
  const { handleLogout, isLoading } = useLogout();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user } = useAuth();
  const userPhotoUrl = "";
  const hasValidImage = userPhotoUrl && userPhotoUrl.trim() !== "";

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  return (
    <>
      <div className="dropdown ms-auto">
        <button
          className={`btn dropdown-toggle ${styles.dropdownButton} d-flex align-items-center`}
          type="button"
          id="dropdownUser"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className={styles.dropdownAvatar}>
            <User size={24} />
          </div>
          <span className={styles.dropdownButtonText}>{user.firstName}</span>
        </button>

        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownUser"
        >
          <li>
            <NavLink className="dropdown-item" to="/configuration">
              Configuración
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink className="dropdown-item" to="/change-password">
              Cambiar Contraseña
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setShowLogoutModal(true)}
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>

      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar cierre de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmLogout}
            disabled={isLoading}
          >
            {isLoading ? "Cerrando..." : "Cerrar Sesión"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserProfileDropDown;
