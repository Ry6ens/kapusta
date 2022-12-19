import { Outlet } from 'react-router-dom';

import Section from 'components/layout/Section/Section';

import ButtonLink from 'components/ui/ButtonLink/ButtonLink.jsx';
import ButtonBack from 'components/ui/ButtonBack/ButtonBack.jsx';
// import FormAddExpInc from 'components/FormAddExpenses/FormAddExpenses';

import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';

import products from './products.js';

export default function ExpensesPage() {
  return (
    <>
      <Section sectionClass="section">
        <ButtonBack btnClass="btnExp" text="Main page" width="18" height="12" to="/" />
        {/* <FormAddExpInc /> */}
        <LinkReport />
        <FormAddBalance />

        <CalendarHome />
        <ButtonLink btnClass="btnAddExp" text="Add expenses" to="/expenses/add" />
        <Outlet />

        <TransactionList listClass="listExpenses" products={products} />
      </Section>
      <ButtonsExpenInc />
    </>
  );
}
