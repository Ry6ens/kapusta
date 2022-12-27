import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getLogin } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isUserLogin = useSelector(getLogin);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
