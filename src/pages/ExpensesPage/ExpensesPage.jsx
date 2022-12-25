import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getExpensesTransaction } from 'redux/transaction/transaction-operations';
import {
  transactionsExpenses,
  getCurrentDate,
} from 'redux/transaction/transaction-selectors';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack.jsx';
import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import FormAddExpInc from 'components/FormAddTransaction/FormAddTransaction';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';
import SlideWindow from 'components/SlideWindow/SlideWindow.jsx';
import FormAddTransaction from 'components/FormAddTransaction/FormAddTransaction.jsx';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import SummaryTable from 'components/SummaryTable/SummaryTable';

import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';
import KapustaManyIcon from 'components/icons/KapustaMany/KapustaMany';

import s from './ExpensesPage.module.scss';

export default function ExpensesPage() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTabletMin = useMediaQuery('(min-width: 768px)');
  const isTabletMax = useMediaQuery('(max-width: 1279.98px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const currentDate = useSelector(getCurrentDate);

  useEffect(() => {
    dispatch(getExpensesTransaction());
  }, [dispatch, currentDate]);

  const transactions = useSelector(transactionsExpenses);

  return (
    <>
      {isMobile && (
        <>
          <Section sectionClass="sectionMarg">
            <ButtonBack
              btnClass="btnExp"
              text="Main page"
              width="18"
              height="12"
              to="/"
            />
            <div className={s.overleyTab}>
              <LinkReport />
              <FormAddBalance />
            </div>
            <CalendarHome />
            <SlideWindow text="Add expenses">
              <ButtonBack btnClass="btnExp" width="18" height="12" to="/expenses" />
              <FormAddExpInc />
            </SlideWindow>
            <TransactionList listClass="listExpenses" items={transactions} />
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
            <FormAddTransaction />
            <TransactionTable items={transactions} />
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
            <FormAddTransaction />
            <div className={s.overlayTablSum}>
              <TransactionTable items={transactions} />
              <SummaryTable />
            </div>
          </div>
          <KapustaManyIcon iconClass="expens" width="1334" height="232" />
        </Section>
      )}
    </>
  );
}
