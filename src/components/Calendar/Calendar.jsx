import { useState, forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import moment from 'moment';

import { addDate } from 'redux/transaction/transaction-slice';

import CalendarIcon from 'components/icons/Calendar/Calendar';
import ArrowCalendLeftIcon from 'components/icons/ArrowCalendLeft/ArrowCalendLeft';
import ArrowCalendRightIcon from 'components/icons/ArrowCalendRight/ArrowCalendRight';

import s from './Calendar.module.scss';

export default function Calendar({ dateFormat = 'MM.dd.yyyy', showMonthYearPicker }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(addDate(moment(new Date()).format('MM/DD/yyyy')));
  }, [dispatch]);

  const pathNamePage =
    pathname === '/' || pathname === '/expenses' || pathname === '/income' ? true : false;

  const handleChange = data => {
    const setDate = moment(data).format('MM/DD/yyyy');
    setStartDate(data);
    dispatch(addDate(setDate));
  };

  const year = startDate.getUTCFullYear();
  const mounth = startDate.getUTCMonth();
  const day = startDate.getUTCDate();

  const handleDecrementMonth = () => {
    const newDate = new Date(year, mounth - 1, day);
    setStartDate(newDate);
  };

  const handleIncrementMonth = () => {
    const newDate = new Date(year, mounth + 1, day);
    setStartDate(newDate);
  };

  const CustomInputExpInc = forwardRef(({ value, onClick }, ref) => (
    <button className={s.btn} onClick={onClick} ref={ref}>
      <CalendarIcon width="20" height="18" />
      {value}
    </button>
  ));

  const CustomInputRep = forwardRef(({ value, onClick }, ref) => (
    <button className={s.btnReport} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      {pathNamePage && (
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          customInput={<CustomInputExpInc />}
          dateFormat={dateFormat}
          showMonthYearPicker={showMonthYearPicker}
          maxDate={new Date()}
        />
      )}
      {pathname === '/report' && (
        <div className={s.reportCalendar}>
          <ArrowCalendLeftIcon width="7px" height="10px" onClick={handleDecrementMonth} />
          <div>
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              customInput={<CustomInputRep />}
              dateFormat={dateFormat}
              showMonthYearPicker={showMonthYearPicker}
              maxDate={new Date()}
            />
          </div>
          <ArrowCalendRightIcon
            width="7px"
            height="10px"
            onClick={handleIncrementMonth}
          />
        </div>
      )}
    </>
  );
}
