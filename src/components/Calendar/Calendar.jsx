import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { forwardRef } from 'react';

import ArrowsLeft from 'components/icons/Arrows/Left';
import ArrowsRight from 'components/icons/Arrows/Right';

import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.scss';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const year = startDate.getUTCFullYear();
  const mounth = startDate.getUTCMonth();
  const day = startDate.getUTCDate();

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.btn} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleDecrementDate = () => {
    const newDate = new Date(year, mounth - 1, day);
    setStartDate(newDate);
  };

  const handleIncrementDate = () => {
    const newDate = new Date(year, mounth + 1, day);
    setStartDate(newDate);
  };

  return (
    <div className={s.calWrap}>
      <p className={s.CurrentPeriod}>Current period:</p>
      <button className={s.arrowLeft} onClick={handleDecrementDate}>
        <ArrowsLeft />
      </button>
      <button className={s.arrowRight} onClick={handleIncrementDate}>
        <ArrowsRight />
      </button>
      <div className={s.wrap}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM yyyy"
          customInput={<ExampleCustomInput />}
          showMonthYearPicker
        />
      </div>
    </div>
  );
}
