import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const authorization = localStorage.getItem("userDetails");
    return authorization ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
