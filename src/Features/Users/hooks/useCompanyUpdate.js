import { useState } from "react";
import { showErrorAlert, showSuccessAlert } from "../../../Components/Alerts/alerts";
import { updateCompany } from "../services/updateCompany";

const useCompanyUpdate = () => {
  
   const [loading, setloading] = useState(false);
   const [error, seterror] = useState(false);


   const handleUpdate = async ({updatedData, onSuccess, onClose}) =>{
    
    seterror(false);
    setloading(true);

    try {
        await updateCompany (updatedData);
        if (onSuccess) await onSuccess();
        if (onClose) onClose();
        showSuccessAlert('Exito',
            `Los datos de la empresa se han actualizado correctamente`
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

export default useCompanyUpdate;
