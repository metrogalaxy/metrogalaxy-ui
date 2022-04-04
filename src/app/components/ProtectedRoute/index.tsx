import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalState } from 'src/app/globalSlice/';

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useGlobalState();

  if (!userInfo) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default ProtectedRoute;

export function SignupProtectedRoute({ children }) {
  const { userInfo } = useGlobalState();
  if (userInfo) {
    return <Navigate to="/profile" />;
  }
  return children;
}
