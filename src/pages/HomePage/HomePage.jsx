import useMediaQuery from '@mui/material/useMediaQuery';

import Section from 'components/layout/Section/Section';

import ButtonsExpenInc from 'components/ui/ButtonsExpenInc/ButtonsExpenInc';
import LinkReport from 'components/ui/LinkReport/LinkReport';

import FormAddBalance from 'components/FormAddBalance/FormAddBalance';
import CalendarHome from 'components/CalendarHome/CalendarHome';
import TransactionList from 'components/TransactionList/TransactionList';
import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';

import s from './HomePage.module.scss';

import products from './products.js';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Section sectionClass="sectionHome">
        <div className={s.overleyTab}>
          <LinkReport />
          <FormAddBalance />
        </div>

        {isTablet && (
          <>
            <ButtonsExpenInc />
            <div className={s.overlayExpInc}></div>
            {/* <ExpensesPage /> */}
          </>
        )}

        <CalendarHome />
        <TransactionList products={products} />
      </Section>
      {isMobile && <ButtonsExpenInc />}
    </>
  );
}
