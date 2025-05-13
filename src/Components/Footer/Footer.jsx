import React from 'react'
import styles from '../Footer/styles/footer.module.css'

 const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className={`text-center py-3 ${styles.footer}`}>
        <small>
            @ {currentYear} Todos Los Derechos Reservados. Desarrollado por Imperial-Net <br />
        </small>
        </footer>
  );
};

export default Footer;
