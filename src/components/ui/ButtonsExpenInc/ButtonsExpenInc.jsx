import { NavLink } from 'react-router-dom';

import s from './ButtonsExpenInc.module.scss';

export default function ButtonsExpenInc() {
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.btnExpenInc} ${s.active}` : s.btnExpenInc;
  };

  return (
    <div className={s.overlay}>
      <NavLink className={getClassName} to="/expenses">
        Expenses
      </NavLink>
      <NavLink className={getClassName} to="/income">
        Income
      </NavLink>
    </div>
  );
}
