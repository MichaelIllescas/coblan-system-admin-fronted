import { useState } from "react";

const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return {
    showPassword,
    togglePassword: () => setShowPassword((prev) => !prev),
    showConfirm,
    toggleConfirm: () => setShowConfirm((prev) => !prev),
  };
};

export default usePasswordVisibility;
