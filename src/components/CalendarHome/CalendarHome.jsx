import DatePicker from 'react-datepicker';
import { useState, useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { addDate, addMonth } from 'redux/transaction/transaction-slice';

import CalendarIcon from 'components/icons/Calendar/Calendar';

import s from './CalendarHome.module.scss';

export default function CalendarHome({ dateFormat = 'dd.MM.yyyy', showMonthYearPicker }) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const setDate = moment(startDate).format('MM/DD/yyyy');
    dispatch(addDate(setDate));
    dispatch(addMonth(setDate));
  }, [dispatch, startDate]);

  const handleChange = data => {
    const setDate = moment(data).format('MM/DD/yyyy');
    setStartDate(data);
    dispatch(addDate(setDate));
    dispatch(addMonth(setDate));
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
