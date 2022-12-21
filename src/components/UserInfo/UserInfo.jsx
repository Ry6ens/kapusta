import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { logout } from 'redux/auth/auth-operations';

import LogoutIcon from 'components/icons/Logout/Logout';
import VerticalLineIcon from 'components/icons/VerticalLine/VerticalLine';

import Button from 'components/ui/Button/Button';

import s from './UserInfo.module.scss';

export default function UserInfo() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.userinfo}>
      <span className={s.userName}>U</span>
      {isMobile && <LogoutIcon width="16" height="16" />}
      {isTablet && (
        <>
          <p>User Name</p>
          <VerticalLineIcon height="36" />
          <Button text="Exit" btnClass="btnExit" type="button" onClick={onLogout} />
        </>
      )}
    </div>
  );
}
