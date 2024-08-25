import { ReactNode } from 'react';
import {  useAppSelector } from '../../redux/hooks';

import { Navigate } from 'react-router-dom';
import {  useCurrentToken } from '@/redux/features/auth/authSlice';



type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

//   let user;

//   if (token) {
//     user = verifyToken(token);
//   }

//   const dispatch = useAppDispatch();

//   if (role !== undefined && role !== user?.role) {
//     dispatch(logout());
//     return <Navigate to="/login" replace={true} />;
//   }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;