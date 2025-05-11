import { useState } from "react";
import { registerCompany } from "../services/registerCompany";
import useForm from "../../../hooks/useForm";
import validateCompanyForm from "../validations/validateCompanyForm";
import {
  showErrorAlert,
  showSuccessAlert,
} from "../../../Components/Alerts/alerts";

const initialValues = {
  businessName: "",
  cuit: "",
  ivaCondition: "",
  fiscalAddress: "",
  tradeName: "",
  email: "",
  phone: "",
};

const useCompanyRegister = (onSuccess) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      await registerCompany(formData);
      showSuccessAlert("Exito", "Empresa registarda correctamente");
      if (onSuccess) onSuccess();
    } catch (err) {
      showErrorAlert("Error", err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
    initialValues,
    validateCompanyForm
  );

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit: handleSubmit(onSubmit),
    resetForm,
  };
};

export default useCompanyRegister;
