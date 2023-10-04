import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);

  if (loading) {
    return (
      <div className="items-center place-content-center">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
