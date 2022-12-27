import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const isUserLogin = useSelector(getLogin);

  if (isUserLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
