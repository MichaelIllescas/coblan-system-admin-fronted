import React from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { sidebarLinks } from '../Sidebar/SidebarLinks.jsx';
import styles from './Styles/Sidebar.module.css'
import  useSidebarToggle  from './Hooks/useSidebarToggle';
import { motion} from 'framer-motion';
import useSidebarMenu from './Hooks/useSidebarMenu';
import SidebarItem from './Components/SidebarItem';
import {arrowToggleAnimation, hoverButton} from './Animations/motionConfig'

const Sidebar =() =>{
    const {isOpen, toggleSidebar, closeSidebar} = useSidebarToggle()
    const {openMenu, toggleMenu, isMenuOpen} = useSidebarMenu()

    return (
      <motion.aside
        animate={{ width: isOpen ? 240 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`${styles.sidebar} d-flex flex-column`}
      >
        <div className='d-flex flex-column h-100'>
        {/* Sidebar Header */}
        <div className="d-flex justify-content-between align-items-center px-3 py-3">
       <motion.button
       onClick={toggleSidebar}
       className='btn btn-sm btn-light'
       aria-label="Toggle Sidebar"
        animate={arrowToggleAnimation(isOpen)}
        whileHover={hoverButton.whileHover}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </motion.button>
      </div>
      {/* Sidebar Links */}
     
     <nav className='nav flex-column px-2'>
        {sidebarLinks.map((link) => (
          <SidebarItem
            key={link.label}
            link={link}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            onClick={closeSidebar} // Cierra el sidebar al hacer clic en un enlace
          />
        ))}
      </nav>
      </div>
    
      </motion.aside>
    );
  }

export default Sidebar;