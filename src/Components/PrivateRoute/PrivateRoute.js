/* import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import LoadingScreen from "../Shared/LoadingScreen/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  if (!user) {
    return (
      <>
        <Navigate to="/login" state={{ from: location }} replace />
      </>
    );
  }

  return children;
};

export default PrivateRoute;
 */
