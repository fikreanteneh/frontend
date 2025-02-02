import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../store/AuthProvider';

const PublicRoute: React.FC = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;