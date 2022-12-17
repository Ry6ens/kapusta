import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { forwardRef } from 'react';

import CalendarIcon from 'components/icons/Calendar/Calendar';

import s from './CalendarHome.module.scss';

export default function CalendarHome() {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.btn} onClick={onClick} ref={ref}>
      <CalendarIcon width="20" height="18" />
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
}
