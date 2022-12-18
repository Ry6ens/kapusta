import { Link } from 'react-router-dom';

import s from './ButtonsExpenInc.module.scss';

export default function ButtonsExpenInc() {
  return (
    <div className={s.overlay}>
      <Link className={s.btnExpenInc} to="/expenses">
        Expenses
      </Link>
      <Link className={s.btnExpenInc} to="/income">
        Income
      </Link>
    </div>
  );
}
