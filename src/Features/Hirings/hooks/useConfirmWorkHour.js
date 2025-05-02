import { useState } from "react";
import apiClient from "../../../services/apiClient";
import { showSuccessAlert } from "../../../Components/Alerts/alerts";

const useConfirmWorkHour = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const confirmHour = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiClient.put("/work-hours/confirm", payload);
      showSuccessAlert("Exito", "La hora fue confirmada correctamente");
      return res.data;
    } catch (err) {
      setError("No se pudo confirmar la hora.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { confirmHour, loading, error };
};

export default useConfirmWorkHour;
