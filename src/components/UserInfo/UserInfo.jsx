import useMediaQuery from '@mui/material/useMediaQuery';

import LogoutIcon from 'components/icons/Logout/Logout';
import VerticalLineIcon from 'components/icons/VerticalLine/VerticalLine';

import Button from 'components/ui/Button/Button';

import s from './UserInfo.module.scss';

export default function UserInfo() {
  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  return (
    <div className={s.userinfo}>
      <span className={s.userName}>U</span>
      {isMobile && <LogoutIcon width="16" height="16" />}
      {isTablet && (
        <>
          <p>User Name</p>
          <VerticalLineIcon height="36" />
          <Button text="Exit" btnClass="btnExit" />
        </>
      )}
    </div>
  );
}
