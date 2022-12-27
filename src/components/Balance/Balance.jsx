import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';

import { getBalance } from 'redux/transaction/transaction-selectors';

import s from './Balance.module.scss';

export default function Balance() {
  const isDesc = useMediaQuery('(min-width: 1280px)');
  const balance = useSelector(getBalance);
  return (
    <div className={s.wrapp}>
      <p className={`${s.balanceText} ${s.grey}`}>Balance:</p>
      <div className={s.wrapBorder}>
        <p>{balance || 0} UAH</p>
      </div>
      {isDesc && (
        <div className={s.wrapBorder}>
          <button className={s.btn}>confirm</button>
        </div>
      )}
    </div>
  );
}
