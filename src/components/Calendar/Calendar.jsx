import DatePicker from 'react-datepicker';
import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.scss';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <p className={s.CurrentPeriod}>Current period:</p>
      <div className={s.wrap}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
        />
      </div>
    </div>
  );
}
