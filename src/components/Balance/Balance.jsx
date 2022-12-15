import useMediaQuery from '@mui/material/useMediaQuery';

import s from './Balance.module.scss';

export default function Balance() {
  const isDesc = useMediaQuery('(min-width: 1280px)');
  return (
    <div className={s.wrapp}>
      <p className={`${s.balanceText} ${s.grey}`}>Balance:</p>
      <div className={s.wrapBorder}>
        <p>55 000.00 UAH</p>
      </div>
      {isDesc && (
        <div className={s.wrapBorder}>
          <button className={s.btn}>confirm</button>
        </div>
      )}
    </div>
  );
}
