import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.jpeg'
import UserProfileDropDown from './Components/UserProfileDropDown'
import styles from './Styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm sticky-top ${styles.navbarCustom}`}>
      <div className="container-fluid px-4">
        {/* Logo + Marca */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <motion.img
            src={logo}
            alt="Logo"
            className={styles.logo}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
          />
          <span className={styles.logoText}>COBLAN</span>
        </NavLink>

         {/* Perfil Usuario */}
              <UserProfileDropDown />
           </div>
    </nav>
  )
}

export default Navbar
