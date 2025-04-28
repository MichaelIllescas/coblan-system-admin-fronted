  import React from 'react';
  import { NavLink } from 'react-router-dom';
  import { ChevronDown, ChevronRight } from 'lucide-react';
  import { motion, AnimatePresence } from 'framer-motion';
  import styles from '../Styles/Sidebar.module.css';
  import { chevronAnimation, submenuAnimation } from '../Animations/motionConfig';


  const SidebarItem = ({ link, isOpen, toggleMenu, isMenuOpen, onLinkClick }) => {
    const { label, icon, path, children } = link;

    if (children) {
      return (
        <div>
          {/* Botón principal para abrir/cerrar */}
          <div
            className={`${styles.link} d-flex justify-content-between align-items-center`}
            onClick={() => toggleMenu(label)}
          >
            <div className="d-flex align-items-center">
              {icon}
              {isOpen && <span className="ms-2">{label}</span>}
            </div>
            {isOpen && (
              <motion.div {...chevronAnimation(isMenuOpen(label))}>
                {isMenuOpen(label) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </motion.div>
            )}
          </div>

          {/* Submenú con animación */}
          <AnimatePresence initial={false}>
            {isMenuOpen(label) && (
              <motion.div
                key={label}
                {...submenuAnimation}
                className="ps-4 overflow-hidden"
              >
                {children.map(({ path, label: childLabel, icon: childIcon }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                    onClick={onLinkClick} // Cierra el sidebar al hacer clic en un enlace
                  >
                    <div className="d-flex align-items-center">
                      {childIcon}
                      {isOpen && <span className="ms-2">{childLabel}</span>}
                    </div>
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <NavLink
        to={path}
        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
      >
        <div className="d-flex align-items-center">
          {icon}
          {isOpen && <span className="ms-2">{label}</span>}
        </div>
      </NavLink>
    );
  };

  export default SidebarItem;
