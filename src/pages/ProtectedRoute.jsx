import React from 'react';
import { Navigate } from 'react-router-dom';


const   ProtectedRoute = ({isAuthenticated, childern}) => {
    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }
    return childern;
}

export default ProtectedRoute;