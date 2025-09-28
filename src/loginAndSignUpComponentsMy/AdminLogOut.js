import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminName");

    navigate("/");
  }, [navigate]);

  return null;
};

export default AdminLogOut;
