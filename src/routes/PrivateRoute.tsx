import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../store/AuthProvider';

const PrivateRoute: React.FC = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;