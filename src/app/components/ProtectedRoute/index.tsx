import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalState } from 'src/app/globalSlice/';

const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalState();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user && !user.emailVerified) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

export function LoginProtectedRoute({ children }) {
  const { user } = useGlobalState();
  if (user && user.emailVerified) {
    return <Navigate to="/profile" />;
  }
  return children;
}
