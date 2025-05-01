import { useState } from "react";
import { showErrorAlert, showSuccessAlert } from "../../../Components/Alerts/alerts";
import { updateUser } from "../services/updateUSerService";

const useUserUpdate = () => {
  
   const [loading, setloading] = useState(false);
   const [error, seterror] = useState(false);


   const handleUpdate = async ({updatedData, onSuccess, onClose}) =>{
    
    seterror(false);
    setloading(true);

    try {
        await updateUser (updatedData);
        if (onSuccess) await onSuccess();
        if (onClose) onClose();
        showSuccessAlert('Usuario Actualizado',
            `Los datos del usuario ${updatedData.firstName} ${updatedData.lastName} se han actualizado correctamente`
         );
    } catch (error) {
        showErrorAlert('Error', 
            error.response.data.error || 'error al actualziar al usuario'
        );
    }
    finally{
       setloading(false)
    }
   }  
    return {
        handleUpdate, error, loading
    }
}

export default useUserUpdate;
