// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getLogin } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  //   const isLogin = useSelector(getLogin);
  const isLogin = true;

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
