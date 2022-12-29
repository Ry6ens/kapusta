import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLogin } from 'redux/auth/auth-selectors';

import LogoKapusta from 'components/icons/LogoKapusta/LogoKapusta';

import UserInfo from 'components/UserInfo/UserInfo';

import s from './Header.module.scss';

export default function Header() {
  const { pathname } = useLocation();

  const isUserLogin = useSelector(getLogin);

  const style =
    pathname === '/login' || pathname === '/signup' ? s.header : s.headerFixed;

  return (
    <>
      {!isUserLogin && (
        <header className={style}>
          <LogoKapusta width="90" height="31" />
        </header>
      )}

      {isUserLogin && (
        <header className={style}>
          <Link to="/">
            <LogoKapusta width="90" height="31" />
          </Link>
          <UserInfo />
        </header>
      )}
    </>
  );
}
