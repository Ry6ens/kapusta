import DatePicker from 'react-datepicker';
import { useState, useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { getTransactionsByMonth } from 'redux/transaction/transaction-operations';

import CalendarIcon from 'components/icons/Calendar/Calendar';

import s from './CalendarHome.module.scss';

export default function CalendarHome({ dateFormat = 'dd.MM.yyyy', showMonthYearPicker }) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(getTransactionsAllByMonth());
  // }, [dispatch]);

  const handleChange = data => {
    const setData = { reqDate: moment(data).format('MM/DD/yyyy') };
    setStartDate(data);
    dispatch(getTransactionsByMonth(setData));
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.btn} onClick={onClick} ref={ref}>
      <CalendarIcon width="20" height="18" />
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      customInput={<ExampleCustomInput />}
      dateFormat={dateFormat}
      showMonthYearPicker={showMonthYearPicker}
    />
  );
}
