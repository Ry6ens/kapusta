import Section from 'components/layout/Section/Section';

import { userGetDetailsExpenses, userGetDetailsIncome } from '../../redux/user/user-operations';
import {getCurrentDate} from 'redux/transaction/transaction-selectors';

import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import Balance from 'components/Balance/Balance';
import ArrowLeft from 'components/icons/ArrowLeft/ArrowLeft';
import Calendar from 'components/Calendar/Calendar';
import Budget from 'components/Budget/Budget';
import ExpAndInc from 'components/ExpAndInc/ExpAndInc';
import BarChart from 'components/BarChart/BarChart';

import s from './Report.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const data = [
  {
    name: 'Pork',
    price: 4000,
  },
  {
    name: 'Chiken',
    price: 3000,
  },
  {
    name: 'Coffee',
    price: 2000,
  },
  {
    name: 'Fish',
    price: 2780,
  },
  {
    name: 'Spaghetti',
    price: 1890,
  },
  {
    name: 'Panini',
    price: 2390,
  },
  {
    name: 'Beef',
    price: 3490,
  },
];


export default function ReportPage() {
  const dispatch = useDispatch();


  const currentDate = useSelector(getCurrentDate);

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  // Data for Expenses
  const userDataExpenses = {
    "reqDate": currentDate,
    "transitionCategory": "Housing"
  };


  // Data for Income
  const userDataIncome = {
    "reqDate": currentDate,
    "transitionCategory": "Salary"
  };

  useEffect(() => {
    dispatch(userGetDetailsExpenses(userDataExpenses));
    dispatch(userGetDetailsIncome(userDataIncome))
  }, [dispatch]);
  
  return (
    <Section sectionClass="sectionMarg">
      <div className={s.wrappTop}>
        <Link to="/">
          <div className={s.arrowWrap}>
            <ArrowLeft />
            {isTablet && <p>Main page</p>}
          </div>
        </Link>
        {isTablet && <Balance />}
        <Calendar />
        {isMobile && <Balance />}
      </div>
      <Budget />
      <ExpAndInc />
      <BarChart data={data} />
    </Section>
  );
}
