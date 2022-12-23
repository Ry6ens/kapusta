import { useEffect } from 'react';
import moment from 'moment/moment';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getNewUser } from 'redux/auth/auth-selectors';
import { transactionsByMonth } from 'redux/transaction/transaction-selectors';
// import { getCurrentDate } from 'redux/transaction/transaction-selectors';
import { getTransactionsByMonth } from 'redux/transaction/transaction-operations';

import Section from 'components/layout/Section/Section';

import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import SummaryTable from 'components/SummaryTable/SummaryTable';
import NotificationBalance from 'components/NotificationBalance/NotificationBalance';

import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';
import KapustaManyIcon from 'components/icons/KapustaMany/KapustaMany';

import s from './HomePage.module.scss';

import products from './products.js';

export default function HomePage() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTabletMin = useMediaQuery('(min-width: 768px)');
  const isTabletMax = useMediaQuery('(max-width: 1279.98px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    dispatch(
      getTransactionsByMonth({ reqDate: moment(new Date()).format('MM/DD/yyyy') })
    );
  }, [dispatch]);

  const newUser = useSelector(getNewUser);
  // const currentDate = useSelector(getCurrentDate);
  const transactions = useSelector(transactionsByMonth);

  return (
    <>
      {isMobile && (
        <>
          <Section sectionClass="sectionMarg">
            <div className={s.overleyTab}>
              <LinkReport />
              <FormAddBalance />
              {newUser && <NotificationBalance />}
            </div>

            <CalendarHome dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <TransactionList products={products} />
          </Section>
          <ButtonsExpenInc />
        </>
      )}

      {isTabletMin && isTabletMax && (
        <Section sectionClass="sectionMarg">
          <div className={s.overleyTab}>
            <LinkReport />
            <FormAddBalance />
          </div>
          <ButtonsExpenInc />
          <div className={s.overlayExpInc}>
            <CalendarHome dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <TransactionTable sectionClass="tbodyHome" items={transactions} />
          </div>
          <div className={s.overlaySum}>
            <SummaryTable />
            <KapustaTwoIcon width="185" height="145" />
          </div>
        </Section>
      )}

      {isDesktop && (
        <Section sectionClass="sectionMarg">
          <div className={s.overleyTab}>
            <LinkReport />
            <FormAddBalance />
          </div>
          <ButtonsExpenInc />
          <div className={s.overlayExpInc}>
            <CalendarHome dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <div className={s.overlayTablSum}>
              <TransactionTable sectionClass="tbodyHome" items={transactions} />
              <SummaryTable />
            </div>
          </div>
          <KapustaManyIcon iconClass="expens" width="1334" height="232" />
        </Section>
      )}
    </>
  );
}
