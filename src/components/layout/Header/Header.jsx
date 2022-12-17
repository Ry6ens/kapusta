import { useLocation } from 'react-router-dom';

import LogoKapusta from 'components/icons/LogoKapusta/LogoKapusta';

import UserInfo from 'components/UserInfo/UserInfo';

import s from './Header.module.scss';

export default function Header() {
  const { pathname } = useLocation();

  const style = pathname === '/' ? s.headerFixed : s.header;

  const isLogin = true;

  return (
    <>
      {!isLogin && (
        <header className={style}>
          <LogoKapusta width="90" height="31" />
        </header>
      )}

      {isLogin && (
        <header className={style}>
          <LogoKapusta width="90" height="31" />
          <UserInfo />
        </header>
      )}
    </>
  );
}
