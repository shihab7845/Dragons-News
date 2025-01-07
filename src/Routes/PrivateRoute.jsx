import React, { useContext } from 'react';
import { AuthContext } from '../Pages/AuhtProvider/AuthProvider';
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({ children }) {
    const { User, loading } = useContext(AuthContext);

    

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

   

    return (
        <Navigate to="/login"  />
    );
}
