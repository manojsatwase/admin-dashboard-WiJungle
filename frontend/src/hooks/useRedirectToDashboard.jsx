import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectToDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, [navigate]);
};

export default useRedirectToDashboard;
