import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar } from '@mui/material';

import { logOut } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';

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

  const { firstName, avatarURL } = useSelector(getUser);

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
    dispatch(logOut());
  };

  return (
    <div className={s.userinfo}>
      <Link to="/settings/account">
        <Avatar alt={firstName} src={avatarURL} width="32px" height="32px" />
      </Link>
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
          <Link to="/settings/account">
            <p>{firstName}</p>
          </Link>
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
