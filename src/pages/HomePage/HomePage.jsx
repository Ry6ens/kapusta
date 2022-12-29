import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getNewUser } from 'redux/auth/auth-selectors';
import { getCurrentDate, getBalance } from 'redux/transaction/transaction-selectors';
import { getTransactionsByMonth } from 'redux/transaction/transaction-operations';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack';
import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import Calendar from 'components/Calendar/Calendar';
import TransactionList from 'components/TransactionList/TransactionList';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import SummaryTable from 'components/SummaryTable/SummaryTable';
import NotificationBalance from 'components/NotificationBalance/NotificationBalance';

import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';
import KapustaManyIcon from 'components/icons/KapustaMany/KapustaMany';

import s from './HomePage.module.scss';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTabletMin = useMediaQuery('(min-width: 768px)');
  const isTabletMax = useMediaQuery('(max-width: 1279.98px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const dispatch = useDispatch();
  const newUser = useSelector(getNewUser);
  const currentDate = useSelector(getCurrentDate);
  const balance = useSelector(getBalance);

  useEffect(() => {
    if (currentDate === '') {
      return;
    }
    dispatch(getTransactionsByMonth({ reqDate: currentDate }));
  }, [dispatch, currentDate]);

  return (
    <>
      {isMobile && (
        <>
          <Section sectionClass="sectionMarg">
            <ButtonBack btnClass="btnExp" width="0px" height="12px" />
            <div className={s.overleyTab}>
              <LinkReport />
              <FormAddBalance />
              {newUser && balance === 0 && <NotificationBalance />}
            </div>

            <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <TransactionList />
          </Section>
          <ButtonsExpenInc />
        </>
      )}

      {isTabletMin && isTabletMax && (
        <Section sectionClass="sectionMarg">
          <div className={s.overleyTab}>
            <LinkReport />
            <FormAddBalance />
            {newUser && balance === 0 && <NotificationBalance />}
          </div>
          <ButtonsExpenInc />
          <div className={s.overlayExpInc}>
            <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <TransactionTable sectionClass="tbodyHome" />
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
            {newUser && balance === 0 && <NotificationBalance />}
          </div>
          <ButtonsExpenInc />
          <div className={s.overlayExpInc}>
            <Calendar dateFormat="MMMM yyyy" showMonthYearPicker={true} />
            <div className={s.overlayTablSum}>
              <TransactionTable sectionClass="tbodyHome" />
              <SummaryTable />
            </div>
          </div>
          <KapustaManyIcon iconClass="expens" width="1334" height="232" />
        </Section>
      )}
    </>
  );
}
