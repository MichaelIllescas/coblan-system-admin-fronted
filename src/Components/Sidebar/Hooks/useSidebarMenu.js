
import { useState } from 'react'

const useSidebarMenu = () => {
    const [openMenus, setOpenMenus] = useState(null)

    const toggleMenu =(label)=>{
          setOpenMenus((prev)=>(prev=== label ? null:label));
    };

    const isMenuOpen=(label) => openMenus ===label;

  return {
    openMenus,
    toggleMenu,
    isMenuOpen
}
}
export default useSidebarMenu