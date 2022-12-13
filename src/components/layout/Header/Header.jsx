import LogoKapusta from 'components/icons/LogoKapusta/LogoKapusta';

import UserInfo from 'components/UserInfo/UserInfo';

import s from './Header.module.scss';

export default function Header() {
  const isLogin = true;

  return (
    <>
      {!isLogin && (
        <header className={s.header}>
          <LogoKapusta width="90" height="31" />
        </header>
      )}

      {isLogin && (
        <header className={s.header}>
          <LogoKapusta width="90" height="31" />
          <UserInfo />
        </header>
      )}
    </>
  );
}
