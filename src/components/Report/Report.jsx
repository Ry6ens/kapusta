import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import Balance from 'components/Balance/Balance';
import LogoutIcon from 'components/icons/ArrowLeft/ArrowLeft';
import Calendar from 'components/Calendar/Calendar';

import s from './Report.module.scss';

export default function Report() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <div className={s.wrappTop}>
      <Link to="/home">
        <div className={s.arrowWrap}>
          <LogoutIcon />
          {isTablet && <p>Main page</p>}
        </div>
      </Link>
      <Calendar />
      <Balance />
    </div>
  );
}
