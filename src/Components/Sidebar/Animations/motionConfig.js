// animacion para submenus


export const submenuAnimation = {
    initial:{height: 0, opacity: 0},
    animate:{height: "auto", opacity: 1},
    exit:{height: 0, opacity: 0},
    transition:{duration: 0.3, ease: "easeInOut"},
};

// animacion para expandir o colapsar el sidebar
export const sidebarAnimation = (isOpen)=>({
    width: isOpen ? 240 : 80,
    transition: {duration: 0.3, ease: "easeInOut"}

});

// Animacion para rotar el boton  de abrir/cerrar sidebar

export const buttonRotateAnimation = (isOpen) => ({
    rotate: isOpen ? 180 : 0,
    transition: {duration: 0.3, ease: "easeInOut"}
});

// Animacion para rotar Chevron cuando abra subMenu
export const chevronAnimation = (isOpen) => ({
    rotate: isOpen ? 90 : 0,
    transition: {duration: 0.3, ease: "easeInOut"},
});

export const arrowToggleAnimation = (isOpen) => ({  
    rotate: isOpen ? 360 : 0,
    width: isOpen ? 60 : 40,
    transition: {duration: 0.3, ease: "easeInOut"}
});

// 🆕 Hover sobre botón
export const hoverButton = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
    
