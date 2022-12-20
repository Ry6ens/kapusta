import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack.jsx';
import LinkReport from 'components/ui/LinkReport/LinkReport';
import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';
import SlideWindow from 'components/SlideWindow/SlideWindow.jsx';

import products from './products.js';

export default function IncomePage() {
  return (
    <>
      <Section sectionClass="section">
        <ButtonBack btnClass="btnExp" text="Main page" width="18" height="12" to="/" />
        <LinkReport />
        <FormAddBalance />
        <CalendarHome />
        <SlideWindow text="Add income" />
        <TransactionList listClass="listIncome" products={products} />
      </Section>
      <ButtonsExpenInc />
    </>
  );
}
