import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const { serverToken } = useAuth();
  const handleLogout = () => {
    try {
      const confirm = window.confirm("Are you sure you want to logout?");

      if (confirm) {
        localStorage.removeItem("token");
        toast.success("Logged out successfully");
        navigate("/");
      }
      window.location.reload();
    } catch (error) {
      toast.error("Error:" + error.message);
    }
  };
  return (
    <div>
      <button className="btn btn-error text-white" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
