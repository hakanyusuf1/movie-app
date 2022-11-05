import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../Context/AuthContext";
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
