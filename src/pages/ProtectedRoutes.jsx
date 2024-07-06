import React from 'react';
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; 
import { useState, useEffect } from 'react';// Importa js-cookie

const ProtectedRoutes = ({children}) => {
    // Usa js-cookie para obtener el token
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const token = Cookies.get('token');
      setIsAuthenticated(!!token);
    }, []);
  
    if (isAuthenticated === null) {
      // Considera mostrar un spinner o componente de carga mientras se verifica
      return <div>Cargando...</div>;
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
}

export default ProtectedRoutes;