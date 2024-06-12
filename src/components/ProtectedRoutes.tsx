import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoleType } from 'slice/authLoginAPISlice';
import { RootState } from 'store';

interface ProtectedRoutesProps {
  children: React.ReactNode;
  allowedRoles: RoleType[];
  redirectPath: string;
}

export default function ProtectedRoutes({ children, allowedRoles, redirectPath }: ProtectedRoutesProps) {
  const role = useSelector((state: RootState) => state.authLoginAPI.role);
  if (!allowedRoles.includes(role)) {
    if (role === RoleType.GUEST) {
      return <Navigate to={redirectPath} />;
    } else if (role === RoleType.ADMIN) {
      return <Navigate to='/admin' />;
    } else if (role === RoleType.STAFF) {
      return <Navigate to='/staff/viewAllInventory' />;
    } else {
      return <Navigate to='/*' />;
    }
  }
  return <div>{children}</div>;
}
