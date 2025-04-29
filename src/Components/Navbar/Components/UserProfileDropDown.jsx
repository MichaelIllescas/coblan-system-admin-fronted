import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from '../../../Features/Auth/Hooks/useLogout';
import styles from "../Styles/Navbar.module.css";

const UserProfileDropDown = () => {
  const { handleLogout, isLoading } = useLogout();

  // Simulación: imagen que viene del usuario
  const userPhotoUrl = ""; // VACÍO para probar que funcione el círculo gris

  const hasValidImage = userPhotoUrl && userPhotoUrl.trim() !== "";
  {isLoading && <div>...mostrar spinner aquí si querés...</div>}
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
          {hasValidImage ? (
            <img
              src={userPhotoUrl}
              alt="Usuario"
              className={styles.dropdownAvatar}
            />
          ) : (
            <div className={styles.dropdownAvatarPlaceholder}></div>
          )}
          <span className={styles.dropdownButtonText}>Perfil Usuario</span>
        </button>

        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
          <li>
            <NavLink className="dropdown-item" to="/configuracion">
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/cambiar-contraseña">
              Cambiar Contraseña
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/reestablecer-contraseña">
              Reestablecer Contraseña
            </NavLink>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <NavLink className="dropdown-item" to="/documentacion">
              Documentación
            </NavLink>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserProfileDropDown;
