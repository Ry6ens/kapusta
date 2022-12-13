// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getLogin } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  //   const isLogin = useSelector(getLogin);
  const isLogin = true;

  if (isLogin) {
    return <Navigate to="/report" />;
  }

  return <Outlet />;
};

export default PublicRoute;
