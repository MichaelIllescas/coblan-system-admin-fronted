import {useState, useEffect} from 'react'

const useSidebarToggle = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    // Detecta tamaño de pantalla inicial
    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };
        
        handleResize(); // Llama a la función al cargar el componente
        window.addEventListener('resize', handleResize); // Agrega el listener
        
        return () => {
            window.removeEventListener('resize', handleResize); // Limpia el listener al desmontar
        };
    },[]);
     const toggleSidebar = () => setIsOpen(prev => !prev); // Cambia el estado de isOpen
     const closeSidebar = () => setIsOpen(false); // Cierra el sidebar
    
    return { isOpen, toggleSidebar, closeSidebar };
};

export default useSidebarToggle
