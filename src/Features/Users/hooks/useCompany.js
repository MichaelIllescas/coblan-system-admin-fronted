// src/hooks/useCompany.js
import { useEffect, useState } from "react";
import { getCompany } from "../services/getCompany";

const useCompany = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const res = await getCompany();
      setCompany(res.data);
      setNotFound(false);
    } catch (err) {
      if (err.response?.status === 404) {
        setNotFound(true);
        setCompany(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { company, loading, notFound, refresh };
};

export default useCompany;
