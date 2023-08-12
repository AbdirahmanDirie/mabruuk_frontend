import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedBack = ({children}) => {
    
    let location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    if(user?.token) {
        return <Navigate to="/" state={{ from: location}} replace />;
    }
 return children

};

export default ProtectedBack;