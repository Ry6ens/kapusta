import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { forwardRef } from 'react';
import moment from 'moment';

import CalendarIcon from 'components/icons/Calendar/Calendar';

import s from './CalendarHome.module.scss';

export default function CalendarHome({ dateFormat = 'dd.MM.yyyy', showMonthYearPicker }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = data => {
    setStartDate(data);
    console.log(moment(data).format('MM/DD/yyyy'));
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
