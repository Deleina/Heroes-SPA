import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';




export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const {pathname, search} = useLocation();


    const lastPath = pathname + search;
    localStorage.setItem('lasPath', lastPath);

    console.log('re-render');

    console.log(location);

    return (logged) ? children : <Navigate to="/login" />
}
