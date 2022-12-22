import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { logout } from 'redux/auth/auth-operations';

import Modal from 'components/layout/Modal/Modal';

import Button from 'components/ui/Button/Button';
import Text from 'components/ui/Text/Text';

import LogoutIcon from 'components/icons/Logout/Logout';
import VerticalLineIcon from 'components/icons/VerticalLine/VerticalLine';
import CloseIcon from 'components/icons/Close/Close';

import s from './UserInfo.module.scss';

export default function UserInfo() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  const handelClick = () => {
    document.body.classList.add('no-scroll');

    setShowModal(true);
  };

  const handelClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.userinfo}>
      <span className={s.userName}>U</span>
      {isMobile && (
        <LogoutIcon
          iconClass="iconUserInfo"
          width="16"
          height="16"
          onClick={handelClick}
        />
      )}
      {isTablet && (
        <>
          <p>User Name</p>
          <VerticalLineIcon height="36" />
          <Button text="Exit" btnClass="btnExit" type="button" onClick={handelClick} />
        </>
      )}
      {showModal && (
        <Modal onClose={handelClose}>
          <CloseIcon width="12" height="12" iconClass="iconModal" onClick={handelClose} />
          <Text text="Do you really want to leave?" textClass="textModal" />
          <div className={s.overlayBtns}>
            <Button text="Yes" onClick={handleLogout} />
            <Button text="No" onClick={handelClose} />
          </div>
        </Modal>
      )}
    </div>
  );
}
