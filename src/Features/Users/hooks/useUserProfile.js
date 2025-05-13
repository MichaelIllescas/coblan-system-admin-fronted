// hooks/useUserProfile.js
import { useEffect, useState } from "react";
import { getUserById } from "../services/userService";

const useUserProfile = (userId) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
        setUserProfile(data);
      } catch (err) {
        setError("Error al cargar los datos del usuario");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { userProfile, loading, error };
};

export default useUserProfile;
