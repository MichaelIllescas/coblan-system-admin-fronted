import React from "react";
import { motion as Motion } from "framer-motion";

const FullScreenLoader = () => {
    return (
        <Motion.div
        initial ={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
        }}
        >   
        <Motion.div
        animate={{ 
            scale: [0.8, 1.2, 1],
            opacity: [1, 0.6, 1],
         }}
         transition={{
            duration: 1,
            repeat: Infinity,
         }}
        style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#007bff",
            marginBottom: "20px",
        }}
        />
{/* 🔵 Texto animado debajo */}
<Motion.p
animate={{ opacity: [1, 0.5, 1] }}
transition={{
  duration: 1.5,
  repeat: Infinity,
}}
style={{
  fontSize: "1.2rem",
  color: "#333",
}}
>
Cerrando sesión...
</Motion.p>
</Motion.div>
);
};

export default FullScreenLoader;