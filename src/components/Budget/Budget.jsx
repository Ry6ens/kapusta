import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCalendarDate } from 'redux/transaction/transaction-selectors';
import { UserGetBalance } from 'api/user';

import s from './Budget.module.scss';

export default function Budget() {
  const calendarDate = useSelector(getCalendarDate);
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    const getBallance = async par => {
      try {
        const res = await UserGetBalance(par);
        setBudget({ ...res[0], ...res[1] });
      } catch (error) {
        console.log(error.message);
      }
    };
    getBallance({
      reqDate: calendarDate,
    });
  }, [calendarDate]);
  return (
    <div className={s.wrap}>
      <div>
        <p className={s.text}>Expenses:</p>
        <p className={s.expenses}>
          {budget?.expenses ? `- ${budget?.expenses} UAH.` : 0}
        </p>
      </div>
      <div className={s.line}>{/* <VerticalLine /> */}</div>
      <div>
        <p className={s.text}>Income:</p>
        <p className={s.income}>{budget?.income ? `+ ${budget?.income} UAH.` : 0}</p>
      </div>
    </div>
  );
}
