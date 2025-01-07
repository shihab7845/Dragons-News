import React, { useContext } from 'react';
import { AuthContext } from '../Pages/AuhtProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { User, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (User) {
        return children;
    }

    // Pass state as an object
    return (
        <Navigate state={location.pathname} to="/login" />
    );
}
