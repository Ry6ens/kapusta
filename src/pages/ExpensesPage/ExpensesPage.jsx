import useMediaQuery from '@mui/material/useMediaQuery';

import Section from 'components/layout/Section/Section';

import ButtonBack from 'components/ui/ButtonBack/ButtonBack.jsx';
import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';
import SlideWindow from 'components/SlideWindow/SlideWindow.jsx';
import FormAddExpInc from 'components/FormAddExpenses/FormAddExpenses.jsx';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import Summary from 'components/Summary/Summary';

import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';

import s from './ExpensesPage.module.scss';

import products from './products.js';

export default function ExpensesPage() {
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isMobile && (
        <>
          <Section sectionClass="section">
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
            <SlideWindow text="Add expenses" />
            <TransactionList listClass="listExpenses" products={products} />
          </Section>
          <ButtonsExpenInc />
        </>
      )}

      {isTablet && (
        <Section sectionClass="section">
          <div className={s.overleyTab}>
            <LinkReport />
            <FormAddBalance />
          </div>
          <ButtonsExpenInc />
          <div className={s.overlayExpInc}>
            <FormAddExpInc />
            <TransactionTable products={products} />
          </div>
          <div className={s.overlaySum}>
            <Summary />
            <KapustaTwoIcon width="185" height="145" />
          </div>
        </Section>
      )}
    </>
  );
}
