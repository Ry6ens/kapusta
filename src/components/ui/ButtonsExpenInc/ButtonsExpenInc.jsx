import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import s from './ButtonsExpenInc.module.scss';

export default function ButtonsExpenInc() {
  const isTabletMin = useMediaQuery('(min-width: 768px)');

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.btnExpenInc} ${s.active}` : s.btnExpenInc;
  };

  return (
    <div className={s.overlay}>
      {isTabletMin && (
        <NavLink className={getClassName} to="/">
          Timeline
        </NavLink>
      )}
      <NavLink className={getClassName} to="/expenses">
        Expenses
      </NavLink>
      <NavLink className={getClassName} to="/income">
        Income
      </NavLink>
    </div>
  );
}
