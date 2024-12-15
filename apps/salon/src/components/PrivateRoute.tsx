import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { checkLocalStorage } from '@duri-fe/utils';

const PrivateRoute: React.FC = () => {
  if (!checkLocalStorage({ token: 'authorization_shop' })) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
